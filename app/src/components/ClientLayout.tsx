'use client';

import React from 'react';
import WhatsAppButton from './WhatsAppButton';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
};
