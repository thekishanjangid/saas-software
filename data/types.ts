export interface Review {
  slug: string;
  title: string;
  description: string;
  date: string;
  productName: string;
  rating: number;
  summary: string;
  pros: string[];
  cons: string[];
  websiteUrl: string;
  category: string;
  content: React.JSX.Element;
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  date: string;
  productA: string;
  productB: string;
  content: React.JSX.Element;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  author?: string;
  content?: React.JSX.Element; // Optional for list view
}
