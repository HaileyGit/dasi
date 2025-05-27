import { pgEnum } from "drizzle-orm/pg-core";

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
