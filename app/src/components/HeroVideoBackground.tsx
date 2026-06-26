'use client';

import React from 'react';

export const HeroVideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        preload="metadata"
      >
        <source src="/future.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70 z-10" />
    </div>
  );
};
