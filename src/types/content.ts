export interface Profile {
  name: string;
  headline: string;
  subheadline: string;
  education: {
    institute: string;
    major: string;
    minor: string;
  };
  contact: {
    phone: string;
    email_primary: string;
    email_secondary: string;
    github: string;
    linkedin: string;
    resume: string;
  };
}

export interface HeroContent {
  image: string;
  image_alt: string;
  caption: string;
}

export interface FeaturedProject {
  title: string;
  category: string;
  link?: string;
  summary: string;
  bullets: string[];
  tech_stack: string[];
}

export interface ProductProject {
  title: string;
  summary: string;
  bullets: string[];
  focus: string[];
  link?: string;
}

export interface ExperienceEntry {
  title: string;
  org?: string;
  duration?: string;
  description?: string;
  bullets: string[];
  tags?: string[];
  link?: string;
}

export interface ExperienceAndLeadership {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image_alt?: string;
  caption?: string;
  entries: ExperienceEntry[];
}

export interface PortfolioContent {
  profile: Profile;
  hero: HeroContent;
  featured_projects: FeaturedProject[];
  product_business_projects: ProductProject[];
  experience_and_leadership: ExperienceAndLeadership;
  achievements: string[];
  skills: Record<string, string[]>;
  portfolio_copy: {
    one_liner: string;
    about_short: string;
  };
}
