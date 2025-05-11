
import { asc, count, eq, getTableColumns, gt, sql } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import { SelectAdmin, adminTable } from '../../db/schema';
import { getUserByEmail } from "./utils";


export async function POST(req: NextRequest) {
    try {
      const { email, password } = await req.json();
      
      if (!email || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
      }
  
      const admin = await getUserByEmail(email);
  
      if (admin.length === 0) {
        return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
      }
  
      const storedPassword = admin[0].password;

      if (password !== storedPassword) {
        return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
      }
  
      return NextResponse.json({ message: 'Sign-in successful' });
  
    } catch (error) {
      console.error('Error signing in:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  
