export type Database = {
  public: {
    Tables: {
      emotion_days: {
        Row: {
          id: string;
          user_id: string | null;
          target_date: string;
          title: string | null;
          notes: string | null;
          is_public: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      content_snapshots: {
        Row: {
          id: string;
          emotion_day_id: string;
          weather: any;
          music_embed_url: string | null;
          news_headline: string | null;
          tv_program: string | null;
          image_url: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          password_hash: string;
          nickname: string | null;
          language: string | null;
          last_login: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
      };
      memories: {
        Row: {
          id: string;
          user_id: string | null;
          date: string;
          content: string;
          weather: string | null;
          location: string | null;
          mood: string | null;
          is_public: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      memory_tags: {
        Row: {
          id: string;
          memory_id: string;
          tag: string;
        };
      };
      memory_media: {
        Row: {
          id: string;
          memory_id: string;
          url: string;
          type: string;
          created_at: string;
        };
      };
    };
    Views: {
      public_memories_view: {
        Row: {
          id: string;
          user_id: string | null;
          date: string;
          content: string;
          weather: string | null;
          location: string | null;
          mood: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      public_emotion_days_view: {
        Row: {
          id: string;
          user_id: string | null;
          target_date: string;
          title: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
};
