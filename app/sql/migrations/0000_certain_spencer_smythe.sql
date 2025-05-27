CREATE TYPE "public"."event_type" AS ENUM('page_view', 'click', 'scroll', 'share');--> statement-breakpoint
CREATE TYPE "public"."feedback_emotion" AS ENUM('happy', 'sad', 'nostalgic', 'surprised');--> statement-breakpoint
CREATE TYPE "public"."feedback_type" AS ENUM('like', 'dislike', 'comment', 'emotion_tag');--> statement-breakpoint
CREATE TYPE "public"."user_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TABLE "memories" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"date" timestamp NOT NULL,
	"content" text NOT NULL,
	"weather" text,
	"location" text,
	"mood" text,
	"is_public" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "memory_media" (
	"id" serial PRIMARY KEY NOT NULL,
	"memory_id" integer,
	"url" text NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "memory_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"memory_id" integer,
	"tag" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_snapshots" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"emotion_day_id" uuid NOT NULL,
	"weather" jsonb,
	"music_embed_url" varchar(2048),
	"news_headline" text,
	"tv_program" text,
	"image_url" varchar(2048),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "emotion_days" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"target_date" date NOT NULL,
	"title" varchar(255),
	"notes" text,
	"is_public" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedbacks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"guest_id" uuid,
	"emotion_day_id" uuid NOT NULL,
	"type" "feedback_type" NOT NULL,
	"comment" text,
	"emotion" "feedback_emotion",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "guest_visitors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ip_address" varchar(45),
	"country_code" varchar(2),
	"user_agent" text,
	"referrer_url" varchar(2048),
	"first_visit_at" timestamp with time zone,
	"last_visit_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(255) NOT NULL,
	"nickname" varchar(100),
	"language" varchar(10),
	"last_login" timestamp with time zone,
	"status" "user_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visit_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"guest_id" uuid,
	"user_id" uuid,
	"page" varchar(1024) NOT NULL,
	"event_type" "event_type" NOT NULL,
	"metadata" jsonb,
	"timestamp" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "memory_media" ADD CONSTRAINT "memory_media_memory_id_memories_id_fk" FOREIGN KEY ("memory_id") REFERENCES "public"."memories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "memory_tags" ADD CONSTRAINT "memory_tags_memory_id_memories_id_fk" FOREIGN KEY ("memory_id") REFERENCES "public"."memories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_snapshots" ADD CONSTRAINT "content_snapshots_emotion_day_id_emotion_days_id_fk" FOREIGN KEY ("emotion_day_id") REFERENCES "public"."emotion_days"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emotion_days" ADD CONSTRAINT "emotion_days_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_guest_id_guest_visitors_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."guest_visitors"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_emotion_day_id_emotion_days_id_fk" FOREIGN KEY ("emotion_day_id") REFERENCES "public"."emotion_days"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "visit_logs" ADD CONSTRAINT "visit_logs_guest_id_guest_visitors_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."guest_visitors"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "visit_logs" ADD CONSTRAINT "visit_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;