
export interface StorySlide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  mood: 'funny' | 'romantic' | 'epic';
}

export type Page = 'home' | 'story';
