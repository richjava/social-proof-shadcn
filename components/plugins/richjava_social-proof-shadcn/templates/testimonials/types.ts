export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  image: {
    url: string;
    width?: number;
    height?: number;
  };
  rating?: number;
}

export interface TestimonialsContent {
  data?: {
    heading?: string;
    blurb?: string;
  };
  collections?: {
    testimonial?: Testimonial[];
  };
}