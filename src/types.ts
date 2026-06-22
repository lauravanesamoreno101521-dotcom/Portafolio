export type ActiveTab = 'Home' | 'Work' | 'Education' | 'Hobbies';

export interface EducationItem {
  id: string;
  years: string;
  degree: string;
  description: string;
  icon: string;
  techStackTitle: string;
  techStack: string;
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isFullTime: boolean;
  type: 'web' | 'data' | 'design' | 'research';
  icon: string;
  bullets: string[];
  skills: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  icon: string;
  tags?: string[];
  aspectRatio: string; // 'aspect-video' | 'aspect-square' | 'aspect-[4/5]' | 'aspect-[3/4]'
}

export interface JourneyStep {
  id: string;
  period: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
}
