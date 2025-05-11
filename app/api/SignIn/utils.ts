import { db } from '../../db';
import { SelectAdmin, adminTable } from '../../db/schema';
import { asc, count, eq, getTableColumns, gt, sql } from 'drizzle-orm';

export async function getUserByEmail(email: SelectAdmin['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    password: string;
  }>
> {
  return db.select().from(adminTable).where(eq(adminTable.email, email));
}