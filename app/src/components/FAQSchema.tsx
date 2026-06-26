'use client';

import React from 'react';

export const FAQSchema = () => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can business automation stabilize revenue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business automation reduces operational errors, improves efficiency, enables data-driven decisions, and streamlines processes. Aura Stack delivers automation solutions that stabilize and increase your business revenue.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is business automation software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business automation software automates repetitive tasks, improves visibility into operations, reduces business risk, and gives owners complete control over their business processes. Aura Stack specializes in custom automation solutions for Kenya businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does enterprise software give business visibility and control?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enterprise software provides real-time dashboards, reporting, analytics, and control systems that help business owners see all operations and make informed decisions. Aura Stack creates custom solutions tailored to your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I reduce business risk with software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom software solutions automate critical processes, reduce human errors, provide backup systems, improve compliance, and enable better decision-making. Contact Aura Stack to discuss risk reduction strategies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of business automation in Kenya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business automation costs vary based on complexity and scope. Aura Stack offers affordable, scalable automation solutions. Contact us for a personalized quote tailored to your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which company provides the best automation solutions in Nairobi Kenya?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aura Stack is a leading automation company in Nairobi, Kenya, specializing in business automation, enterprise software, digital transformation, and software development services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer web and mobile app development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Aura Stack provides comprehensive services including web design and development, Android mobile app development, and enterprise software solutions for businesses in Kenya.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};
