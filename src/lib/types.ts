export type UserTier = 'free' | 'prime';

export interface User {
  name: string;
  email: string;
  tier: UserTier;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  isPremium: boolean;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  isPremium: boolean;
}

export interface Material {
  id: number;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'ebook';
  downloadUrl: string;
  isPremium: boolean;
  category: string;
}
