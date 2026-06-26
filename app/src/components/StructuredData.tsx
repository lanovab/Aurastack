'use client';

import React from 'react';

export const StructuredData = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aurastack.co.ke',
    name: 'Aura Stack',
    image: 'https://aurastack.co.ke/aura-logo.jpg',
    description: 'Leading business automation and enterprise software solutions company in Nairobi, Kenya. We stabilize revenue, reduce risk, and give business owners visibility and control.',
    url: 'https://aurastack.co.ke',
    telephone: '+254713095009',
    email: 'aurastacklimited@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
      addressRegion: 'Nairobi',
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Nairobi',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
    ],
    serviceArea: {
      '@type': 'City',
      name: 'Nairobi',
    },
    service: [
      {
        '@type': 'Service',
        name: 'Business Automation Solutions',
        description: 'Enterprise automation software to stabilize revenue and reduce business risk',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Aura Stack',
        },
      },
      {
        '@type': 'Service',
        name: 'Enterprise Software Development',
        description: 'Custom enterprise software solutions for business visibility and control',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Aura Stack',
        },
      },
      {
        '@type': 'Service',
        name: 'Web Design and Development',
        description: 'Professional website design and development services',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Aura Stack',
        },
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'Android and iOS mobile application development',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Aura Stack',
        },
      },
      {
        '@type': 'Service',
        name: 'Digital Transformation',
        description: 'Digital transformation and business process automation',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Aura Stack',
        },
      },
    ],
    sameAs: [
      'https://www.facebook.com/share/1MQf9dcQEN/',
      'https://www.tiktok.com/@aura_stack_?_r=1&_t=ZM-91uRn80SmIF',
      'https://www.linkedin.com/in/aura-stack-269006372',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
