'use client';

import { useEffect, useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

export function WhatsAppButtonWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side
  if (!isClient) return null;

  return <WhatsAppButton />;
}
