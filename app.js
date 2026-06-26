/**
 * Aura Stack Production Server - Minimal Version
 * 
 * This is a simpler alternative if server.js above has issues
 * Uses built-in Next.js server instead of custom HTTP server
 * 
 * Save this as: app.js
 * Usage: node app.js
 */

process.env.NODE_ENV = 'production';

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

require('./server.js');
