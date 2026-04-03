export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  dateCreated?: string;
  dateUpdated?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  screenshots?: string[];
}
