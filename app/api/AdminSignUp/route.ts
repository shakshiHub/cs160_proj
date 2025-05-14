import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '../../db';
import { adminTable } from '../../db/schema';

const allowedAdminEmails = [
  'dominic.abucejo@sjsu.edu',
  'fabio.detroia@sjsu.edu',
  'faranak.abri@sjsu.edu',
  'sayma.akther@sjsu.edu',
  'william.andreopoulos@sjsu.edu',
  'smriti.jha@sjsu.edu',
];

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!email.endsWith('@sjsu.edu')) {
    return NextResponse.json({ error: 'Only SJSU emails are allowed.' }, { status: 400 });
  }

  if (!allowedAdminEmails.includes(email.toLowerCase())) {
    return NextResponse.json({
      error:
        'Sorry, you are not currently recognized as having admin status at SJSU. If you believe this is a mistake, contact us at support@sjsufoodapp.com.',
    }, { status: 403 });
  }

  try {
    // Save admin
    await db.insert(adminTable).values({ name, email, password });

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
        <p>Hi ${firstName}!</p>
        <p>Thanks for joining <strong>FoodEZ</strong> :)</p>
        <p>As an admin, you can log into your account at any time and post about surplus food opportunities to the SJSU community in less than a minute!</p>
        <p>Welcome aboard!<br/>– The FoodEZ Team</p>
      `,
    });

    return NextResponse.json({ message: 'Admin created and email sent successfully' });
  } catch (error) {
    console.error('Email or DB error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
