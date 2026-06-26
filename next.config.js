/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Disable standalone mode for cPanel compatibility
  // output: 'standalone' causes lock issues on shared hosting
  
  // Compression
  compress: true,
  
  // PoweredBy header (security)
  poweredByHeader: false,
  
  // Trailing slashes
  trailingSlash: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    unoptimized: true, // cPanel compatibility
    formats: ['image/webp', 'image/avif'],
  },
  
  // Disable incremental static regeneration (ISR) - causes lock issues on shared hosting
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },

  // Turbopack configuration
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;
