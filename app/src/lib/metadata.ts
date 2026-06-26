import type { Metadata } from 'next';

export const seoConfig = {
  baseUrl: 'https://aurastack.co.ke',
  siteName: 'Aura Stack',
  twitterHandle: '@aura_stack_',
};

export const homepageMetadata: Metadata = {
  title: 'Aura Stack - Business Automation & Software Solutions | Nairobi Kenya',
  description: 'Aura Stack is a leading automation company in Kenya, helping businesses stabilize revenue, reduce risk, and gain complete visibility and control through enterprise software, web apps, and digital transformation services.',
  keywords: [
    'business automation company nairobi',
    'automation company kenya',
    'business automation solutions',
    'enterprise automation nairobi',
    'revenue stabilization software',
    'risk management solutions kenya',
    'business visibility and control',
    'digital transformation nairobi',
    'web design nairobi',
    'website developers nairobi',
    'software development company kenya',
    'mobile app developers nairobi',
    'enterprise software solutions',
    'custom software development',
    'business management software',
    'inventory management system kenya',
    'best automation company nairobi',
    'affordable software solutions',
    'web developers in kenya',
    'tech innovation nairobi',
  ],
  authors: [{ name: 'Aura Stack', url: 'https://aurastack.co.ke' }],
  creator: 'Aura Stack',
  publisher: 'Aura Stack',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://aurastack.co.ke',
    siteName: 'Aura Stack',
    title: 'Aura Stack - Business Automation & Software Solutions | Nairobi Kenya',
    description: 'Stabilize revenue, reduce risk, and gain complete control & visibility of your business operations with enterprise automation solutions from Aura Stack, Nairobi\'s leading automation company.',
    images: [
      {
        url: 'https://aurastack.co.ke/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aura Stack - Business Automation & Enterprise Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Stack - Business Automation & Software Solutions | Nairobi Kenya',
    description: 'Stabilize revenue, reduce business risk, and gain visibility & control with enterprise automation solutions from Nairobi\'s top automation company',
    creator: '@aura_stack_',
    images: ['https://aurastack.co.ke/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aurastack.co.ke',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const aboutPageMetadata: Metadata = {
  title: 'About Aura Stack - Business Automation & Software Solutions Team Kenya',
  description: 'Discover how Aura Stack helps businesses stabilize revenue and reduce risk through automation. Meet our team of expert software engineers, automation specialists, and developers in Nairobi, Kenya.',
  keywords: ['about aura stack', 'automation team kenya', 'software engineers nairobi', 'business automation experts'],
  openGraph: {
    title: 'About Aura Stack - Business Automation & Software Solutions Team Kenya',
    description: 'Learn how our expert team of automation specialists helps businesses gain visibility, control, and stability through innovative software solutions',
    url: 'https://aurastack.co.ke/about',
  },
  alternates: {
    canonical: 'https://aurastack.co.ke/about',
  },
};

export const pricingPageMetadata: Metadata = {
  title: 'Pricing - Business Automation & Software Solutions Cost | Aura Stack Kenya',
  description: 'Affordable business automation and enterprise software pricing in Kenya. Custom automation solutions packages to stabilize revenue, reduce risk, and improve business visibility. Transparent quotes from Aura Stack.',
  keywords: [
    'automation software cost kenya',
    'business automation pricing',
    'software development cost',
    'enterprise software pricing',
    'affordable automation solutions',
    'business management software cost',
    'inventory system pricing kenya',
    'web development cost nairobi',
  ],
  openGraph: {
    title: 'Pricing - Business Automation & Software Solutions Cost | Aura Stack Kenya',
    description: 'Transparent pricing for business automation and enterprise software solutions designed to stabilize your revenue and reduce operational risk',
    url: 'https://aurastack.co.ke/pricing',
  },
  alternates: {
    canonical: 'https://aurastack.co.ke/pricing',
  },
};

export const contactPageMetadata: Metadata = {
  title: 'Contact Aura Stack - Business Automation Solutions | Nairobi Kenya',
  description: 'Get in touch with Aura Stack for business automation, enterprise software solutions, and digital transformation services. Phone: +254713095009 | Email: aurastacklimited@gmail.com',
  keywords: ['contact aura stack', 'automation company nairobi', 'business automation services contact'],
  openGraph: {
    title: 'Contact Aura Stack - Business Automation Solutions | Nairobi Kenya',
    description: 'Contact our automation experts to discuss how we can stabilize your revenue and reduce business risk',
    url: 'https://aurastack.co.ke/contact',
  },
  alternates: {
    canonical: 'https://aurastack.co.ke/contact',
  },
};

export const blogPageMetadata: Metadata = {
  title: 'AI Tech News - Latest Automation & Business Technology Updates | Aura Stack',
  description: 'Stay informed with Aura Stack AI Tech News. Latest automation trends, business technology insights, and digital transformation updates to help your business succeed in Nairobi, Kenya.',
  keywords: [
    'AI tech news',
    'automation news',
    'business automation updates',
    'technology trends',
    'AI automation insights',
    'business technology news',
    'digital transformation updates',
    'software automation trends',
    'enterprise technology news',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Tech News - Latest Automation & Business Technology Updates | Aura Stack',
    description: 'Stay updated with the latest automation trends and business technology insights from Aura Stack',
    url: 'https://aurastack.co.ke/blog',
  },
  alternates: {
    canonical: 'https://aurastack.co.ke/blog',
  },
};
