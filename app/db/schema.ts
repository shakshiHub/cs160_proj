import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
    id: integer('id').primaryKey(),  // should auto increment in sqlite
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    phone: integer('phone').notNull(), 
    password: text('password').notNull()
});

export const adminTable = sqliteTable('admin', { // no phone input
    id: integer('id').primaryKey(),  // should auto increment in sqlite
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull()
});

export const formsTable = sqliteTable('forms', {
    id: integer('id').primaryKey(),
    date: text('date').notNull(),         // storing as string- ISO format
    time: text('time').notNull(),
    building: text('building').notNull(),
    message: text('message').notNull(),   // What Food will be Available?
  });
  


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InserAdmin = typeof adminTable.$inferInsert;
export type SelectAdmin = typeof adminTable.$inferSelect;

export type InsertForm = typeof formsTable.$inferInsert;
export type SelectForm = typeof formsTable.$inferSelect;