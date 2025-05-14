import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '../../db';
import { usersTable } from '../../db/schema';
// starting new stuff here
import { eq } from 'drizzle-orm';

async function generateUniqueUserId(): Promise<number> {
  let code: number;
  while (true) {
    // random 10000–99999
    code = Math.floor(Math.random() * 90000) + 10000;
    const [existing] = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.id, code));
    if (!existing) break;
  }
  return code;
}

// ending new stuff here
export async function POST(req: NextRequest) {
  const { name, email, phone, password } = await req.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!email.endsWith('@sjsu.edu')) {
    return NextResponse.json({ error: 'Only SJSU emails are allowed.' }, { status: 400 });
  }

// adding new stuff here
  try {
      // 1. get a unique 5-digit code
      const newId = await generateUniqueUserId();

      // 2. insert into with that code as the PK
      await db.insert(usersTable).values({
        id: newId,
        name,
        email,
        password,
        phone,
      });
// ending new stuff here

    // Send email from Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"FoodEZ" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to FoodEZ!',
      html: `
              <p>Hi ${name},</p>
              <p>Welcome aboard! Your unique 5‑digit student code is:</p>
              <h2>${newId}</h2>
              <p>Keep this safe—this is how you’ll check in and manage FoodEZ.</p>
            `,
          });

    return NextResponse.json({ message: 'Signup complete. Email sent.' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
