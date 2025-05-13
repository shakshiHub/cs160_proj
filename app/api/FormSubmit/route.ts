import { NextRequest, NextResponse } from 'next/server'; 
import { db } from '../../db'; 
import { formsTable, usersTable } from '../../db/schema';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { date, time, building, message } = await req.json();

    if (!date || !time || !building || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // ✅ Save form
    await db.insert(formsTable).values({
      date,
      time,
      building,
      message,
    });

    // ✅ Get all user emails
    const users = await db.select().from(usersTable);
    const allEmails = users.map((user) => user.email);

    // ✅ Send email to all
    for (const email of allEmails) {
      await transporter.sendMail({
        from: `"FoodEZ" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `🍕 Free Food Alert at ${building} 🍕`,
        html: `
          <h2>🚨 Free Food Alert 🚨</h2>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Location:</strong> ${building}</p>
          <p><strong>Details:</strong> ${message}</p>
          <p>Get there fast before it's gone! 🚀</p>
        `,
      });
    }

    return NextResponse.json({ message: 'Form created and alerts sent!' });
  } catch (error) {
    console.error('Error sending food alert:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
