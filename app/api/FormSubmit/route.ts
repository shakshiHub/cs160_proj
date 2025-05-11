import { NextRequest, NextResponse } from 'next/server'; 
import { db } from '../../db'; 
import { formsTable } from '../../db/schema';

export async function POST(req: NextRequest) {
  try {
    const { date, time, building, message } = await req.json();
    
    if (!date || !time || !building || !message ) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 }); // make sure all inputs are given
    }

    await db.insert(formsTable).values({ // inserting user row
      date,
      time,
      building,
      message,
    });

    return NextResponse.json({ message: 'Form created successfully' }); 
    
  } catch (error) {
    console.error('Error creating form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
