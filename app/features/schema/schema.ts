import {
  pgTable,
  uuid,
  text,
  varchar,
  boolean,
  date,
  timestamp,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";
import { timestamps } from "./utils";

// Enum 타입 정의
export const feedbackTypeEnum = pgEnum("feedback_type", [
  "like",
  "dislike",
  "comment",
  "emotion_tag",
]);
export const feedbackEmotionEnum = pgEnum("feedback_emotion", [
  "happy",
  "sad",
  "nostalgic",
  "surprised",
]);
export const userStatusEnum = pgEnum("user_status", ["active", "inactive"]);
export const eventTypeEnum = pgEnum("event_type", [
  "page_view",
  "click",
  "scroll",
  "share",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  nickname: varchar("nickname", { length: 100 }),
  language: varchar("language", { length: 10 }),
  last_login: timestamp("last_login", { withTimezone: true }),
  status: userStatusEnum("status").notNull().default("active"),
  ...timestamps,
});

export const guestVisitors = pgTable("guest_visitors", {
  id: uuid("id").primaryKey().defaultRandom(),
  ip_address: varchar("ip_address", { length: 45 }),
  country_code: varchar("country_code", { length: 2 }),
  user_agent: text("user_agent"),
  referrer_url: varchar("referrer_url", { length: 2048 }),
  first_visit_at: timestamp("first_visit_at", { withTimezone: true }),
  last_visit_at: timestamp("last_visit_at", { withTimezone: true }),
});

export const emotionDays = pgTable("emotion_days", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  target_date: date("target_date").notNull(),
  title: varchar("title", { length: 255 }),
  notes: text("notes"),
  is_public: boolean("is_public").default(false).notNull(),
  ...timestamps,
});

export const contentSnapshots = pgTable("content_snapshots", {
  id: uuid("id").primaryKey().defaultRandom(),
  emotion_day_id: uuid("emotion_day_id")
    .references(() => emotionDays.id, { onDelete: "cascade" })
    .notNull(),
  weather: jsonb("weather"),
  music_embed_url: varchar("music_embed_url", { length: 2048 }),
  news_headline: text("news_headline"),
  tv_program: text("tv_program"),
  image_url: varchar("image_url", { length: 2048 }),
  ...timestamps,
});

export const feedbacks = pgTable("feedbacks", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  guest_id: uuid("guest_id").references(() => guestVisitors.id, {
    onDelete: "set null",
  }),
  emotion_day_id: uuid("emotion_day_id")
    .references(() => emotionDays.id, { onDelete: "cascade" })
    .notNull(),
  type: feedbackTypeEnum("type").notNull(),
  comment: text("comment"),
  emotion: feedbackEmotionEnum("emotion"),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const visitLogs = pgTable("visit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  guest_id: uuid("guest_id").references(() => guestVisitors.id, {
    onDelete: "set null",
  }),
  user_id: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  page: varchar("page", { length: 1024 }).notNull(),
  event_type: eventTypeEnum("event_type").notNull(),
  metadata: jsonb("metadata"),
  timestamp: timestamp("timestamp", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
