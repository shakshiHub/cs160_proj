// app/api/verifyAdminCode/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import { adminTable } from '../../db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const { code, realPassword } = await req.json();


    // check the code exists
    const [user] = await db
      .select({ id: adminTable.id })
      .from(adminTable)
      .where(eq(adminTable.id, code));

    if (!user) {
      return NextResponse.json(
        { error: 'Code not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
