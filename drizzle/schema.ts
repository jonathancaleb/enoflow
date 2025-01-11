import {
  pgTable,
  unique,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
} from 'drizzle-orm/pg-core';

export const early_access = pgTable(
  'early_access',
  {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    reason: text('reason').notNull(),
    approved: boolean('approved').default(false),
    created_at: timestamp('created_at', {
      precision: 3,
      mode: 'string',
    }).defaultNow(),
    invitation_sent_at: timestamp('invitation_sent_at', {
      precision: 3,
      mode: 'string',
    }),
  },
  (table) => {
    return {
      early_access_email_unique: unique('early_access_email_unique').on(
        table.email,
      ),
    };
  },
);

export const modules = pgTable('modules', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  user_id: text('user_id').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  code: text('code').notNull(),
  icon: text('icon').default('default').notNull(),
  color: text('color').default('default').notNull(),
  archived: boolean('archived').default(false).notNull(),
  credits: integer('credits').default(0).notNull(),
  created_at: timestamp('created_at', { mode: 'string' })
    .defaultNow()
    .notNull(),
  modified_at: timestamp('modified_at', { mode: 'string' })
    .defaultNow()
    .notNull(),
  last_visited: timestamp('last_visited', { mode: 'string' })
    .defaultNow()
    .notNull(),
});
