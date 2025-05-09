import { NextRequest, NextResponse } from 'next/server'; 
import { db } from '../../db'; 
import { adminTable } from '../../db/schema'; 

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 }); // make sure all inputs are given
    }

    await db.insert(adminTable).values({ // inserting user row
      name,
      email,
      password,
    });

    return NextResponse.json({ message: 'Admin created successfully' }); 
    
  } catch (error) {
    console.error('Error creating admin:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
