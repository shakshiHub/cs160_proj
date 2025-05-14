// app/api/verifyCode/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import { usersTable } from '../../db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (typeof code !== 'number') {
      return NextResponse.json(
        { error: 'Invalid code format' },
        { status: 400 }
      );
    }

    // Look up by PK
    const [user] = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.id, code));

    if (!user) {
      return NextResponse.json({ valid: false }, { status: 404 });
    }

    return NextResponse.json({ valid: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Server error verifying code' },
      { status: 500 }
    );
  }
}
