import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const memories = pgTable("memories", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  date: timestamp("date").notNull(),
  content: text("content").notNull(),
  weather: text("weather"),
  location: text("location"),
  mood: text("mood"),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const memoryTags = pgTable("memory_tags", {
  id: serial("id").primaryKey(),
  memoryId: integer("memory_id").references(() => memories.id),
  tag: text("tag").notNull(),
});

export const memoryMedia = pgTable("memory_media", {
  id: serial("id").primaryKey(),
  memoryId: integer("memory_id").references(() => memories.id),
  url: text("url").notNull(),
  type: text("type").notNull(), // 'image', 'video', 'audio'
  createdAt: timestamp("created_at").defaultNow(),
});
