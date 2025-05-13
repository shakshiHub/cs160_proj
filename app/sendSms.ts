import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_TOKEN!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { phone, message } = req.body;

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER!,
      to: phone,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Twilio Error:', error);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
}