export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI Automation Trends for 2026',
    description: 'Explore how AI-driven automation is reshaping business models, optimizing revenue, and reducing risk.',
    content: 'From intelligent workflow automation to predictive analytics, AI now helps businesses scale faster while keeping operations lean. This post covers practical trends, adoption strategies, and examples for modern teams.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    date: 'June 27, 2026',
    author: 'Aura Stack',
    category: 'AI & Automation',
  },
  {
    id: '2',
    title: 'Revenue Stability with Intelligent Systems',
    description: 'Learn how automated systems can stabilize cashflow and strengthen business resilience.',
    content: 'By combining AI insights with streamlined operations, businesses can reduce unpredictability and create a more stable revenue stream. This post highlights the key levers for building resilience in volatile markets.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    date: 'June 20, 2026',
    author: 'Aurastack',
    category: 'Business Solutions',
  },
];
