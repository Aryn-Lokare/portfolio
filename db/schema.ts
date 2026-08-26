import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const contactMessages = pgTable('contact_messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  imageUrl: text('image_url'),
  githubUrl: text('github_url'),
  siteUrl: text('site_url'),
  headerClassName: text('header_class_name'),
  headerStyle: text('header_style'),
  headerText: text('header_text'),
  headerTextClassName: text('header_text_class_name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const certificates = pgTable('certificates', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  certificateUrl: text('certificate_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
