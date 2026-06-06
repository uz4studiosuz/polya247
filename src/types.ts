export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  category: 'business' | 'tech' | 'process' | 'general' | 'finance';
  bulletPoints?: string[];
}

export interface BudgetCost {
  title: string;
  description: string;
  cost: number;
  icon: string;
}

export interface TimelineMilestone {
  phase: string;
  duration: string;
  progress: number; // 0 to 100
  startOffset: number; // 0 to 12
  width: number; // 1 to 12 (fractional percentage map)
  milestones: string[];
  color: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: 'mobile' | 'backend' | 'api';
  role: string;
  description: string;
  icon: string;
  benefits: string[];
}
