import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '../../db';
import { adminTable } from '../../db/schema';
import { eq } from 'drizzle-orm';

const allowedAdminEmails = [
  'dominic.abucejo@sjsu.edu',
  'fabio.detroia@sjsu.edu',
  'faranak.abri@sjsu.edu',
  'sayma.akther@sjsu.edu',
  'william.andreopoulos@sjsu.edu',
  'shakshi.sharma@sjsu.edu',
  //'smriti.jha@sjsu.edu',
];

async function generateUniqueUserId(): Promise<number> {
  let code: number;
  while (true) {
    // random 10000–99999
    code = Math.floor(Math.random() * 90000) + 10000;
    const [existing] = await db
      .select({ id: adminTable.id })
      .from(adminTable)
      .where(eq(adminTable.id, code));
    if (!existing) break;
  }
  return code;
}

export async function POST(req: NextRequest) {
  const { name, email, password} = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!email.endsWith('@sjsu.edu')) {
    return NextResponse.json({ error: 'Only SJSU emails are allowed.' }, { status: 400 });
  }

  if (!allowedAdminEmails.includes(email.toLowerCase())) {
    return NextResponse.json({
      error:
        'Sorry, you are not currently recognized as having admin status at SJSU. If you believe this is a mistake, contact us at ezefood09@gmail.com.',
    }, { status: 403 });
  }



try {
      // 1. get a unique 5-digit code
      const newId = await generateUniqueUserId();

      // 2. insert into adminTable with that code as the PK
      await db.insert(adminTable).values({
        id: newId,
        name,
        email,
        password: password,
      });

    // Send welcome email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const firstName = name.split(' ')[0];

    await transporter.sendMail({
          from: `"FoodEZ" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: 'Welcome to FoodEZ!',
          html: `
                  <p>Hi ${name},</p>
                  <p>Thank you for choosing FoodEZ! Your unique 5‑digit admin code is:</p>
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


