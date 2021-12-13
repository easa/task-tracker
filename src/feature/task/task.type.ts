export type Task = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priority: 'low' | 'mediate' | 'high';
};
