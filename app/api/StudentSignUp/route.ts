import { NextRequest, NextResponse } from 'next/server'; 
import { db } from '../../db'; 
import { usersTable } from '../../db/schema'; 

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, password } = await req.json();

    
    if (!name || !email || !phone || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 }); // make sure all inputs are given
    }

    await db.insert(usersTable).values({ // inserting user row
      name,
      email,
      phone,
      password,
    });

    return NextResponse.json({ message: 'User created successfully' }); 
    
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
