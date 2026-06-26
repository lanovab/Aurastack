'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Aura%20Stack%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="sticky left-6 bottom-8 z-9999 group pointer-events-auto w-fit"
      style={{ position: 'sticky', left: '24px', bottom: '32px', zIndex: 9999 }}
    >
      {/* Green gradient background circle */}
      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-green-400 via-green-500 to-green-600 border-2 border-green-300/30 shadow-lg group-hover:shadow-green-500/50 group-hover:shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 relative">
        {/* WhatsApp SVG Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.98C18.85 2.31 16.60 1.31 14.12 1.31 7.79 1.31 2.64 6.46 2.64 12.79c0 2.04.53 4.04 1.54 5.79L2.5 22.69l6.27-1.65c1.69.92 3.59 1.40 5.52 1.40 6.33 0 11.48-5.15 11.48-11.48 0-3.06-1.22-5.94-3.44-8.10zm-6.40 17.63c-1.73 0-3.43-.46-4.93-1.33l-.35-.21-3.64.96.98-3.59-.23-.37C4.01 15.54 3.5 14.18 3.5 12.79 3.5 7.77 7.42 3.86 12.44 3.86c2.52 0 4.88 1.00 6.65 2.79 1.77 1.79 2.75 4.16 2.75 6.68 0 5.03-3.92 8.95-8.95 8.95zm4.90-6.72c-.27-.14-1.58-.78-1.82-.87-.25-.09-.42-.14-.60.14-.17.27-.67.87-.82 1.04-.15.17-.30.19-.57.05-.27-.14-1.13-.42-2.15-1.33-.80-.71-1.34-1.59-1.49-1.86-.15-.27-.02-.42.11-.55.11-.11.27-.29.40-.43.14-.14.18-.24.27-.40.09-.17.05-.31-.02-.43-.07-.12-.60-1.44-.82-1.97-.21-.51-.43-.44-.60-.45-.15 0-.32-.02-.48-.02-.17 0-.44.06-.67.30-.23.25-.88.86-.88 2.10 0 1.24.90 2.44 1.03 2.60.13.17 1.84 2.81 4.46 3.94.62.27 1.10.43 1.47.55.62.20 1.19.17 1.64.10.50-.08 1.54-.63 1.75-1.23.21-.61.21-1.13.15-1.24-.07-.11-.23-.17-.50-.31z"/>
        </svg>

        {/* Chat Us Badge */}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap">Chat Us</span>
      </div>

      {/* Glow effect background */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300" />
    </a>
  );
}
