import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '../../db';
import { usersTable } from '../../db/schema';

export async function POST(req: NextRequest) {
  const { name, email, phone, password } = await req.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!email.endsWith('@sjsu.edu')) {
    return NextResponse.json({ error: 'Only SJSU emails are allowed.' }, { status: 400 });
  }

  try {
    // Save user
    await db.insert(usersTable).values({ name, email, phone, password });

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
        <p>
          Thanks for signing up! <strong>Welcome to FoodEZ 🎉</strong> You will now automatically receive real-time emails when there is free food available!
        </p>
      `,
    });

    return NextResponse.json({ message: 'Signup complete. Email sent.' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
