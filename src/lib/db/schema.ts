
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const news = pgTable("news", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  location: text("location"),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const gallery = pgTable("gallery", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  src: text("src").notNull(),
  className: varchar("class_name", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const impactSections = pgTable("impact_sections", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  type: varchar("type", { length: 100 }).notNull(), // e.g., 'school', 'technical', 'humanitarian'
  imageUrl: text("image_url"),
  videoUrl: text("video_url"),
  data: text("data"), // JSON string for flexible structure like tables
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const adminUsers = pgTable("admin_users", {
  id: uuid("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
