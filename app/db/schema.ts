import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
    id: integer('id').primaryKey(),  // should auto increment in sqlite
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    phone: text('phone').notNull(), 
    password: text('password').notNull()
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

