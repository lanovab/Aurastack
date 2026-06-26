'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Innovation', href: '/innovation', icon: '💡' },
    { label: 'Cashflow', href: '/cashflow-stabilization', icon: '💹' },
    { label: 'AI Tech News', href: '/blog', icon: '📰' },
    { label: 'About Us', href: '/about', icon: '👥' },
    { label: 'Pricing', href: '/pricing', icon: '💰' },
    { label: 'Contact', href: '/contact', icon: '✉️' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-linear-to-r from-slate-950 via-black to-slate-950 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20'
          : 'bg-linear-to-r from-slate-900/95 via-black/95 to-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20'
      }`}
      style={{
        perspective: '1200px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.08, rotateZ: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group rounded-lg px-2 sm:px-3 py-1.5 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:border-cyan-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/aura logo.jpg"
                  alt="Aura World Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover w-full h-full brightness-110 contrast-125"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <div className="text-base sm:text-lg font-bold text-cyan-700">
                  Aura
                </div>
                <div className="text-xs text-cyan-600 font-bold tracking-widest">
                  STACK
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <Link href={item.href}>
                <motion.div
                  className="relative px-5 lg:px-6 py-3 text-cyan-300 text-sm lg:text-base font-bold tracking-wide cursor-pointer group"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* 3D Card Background */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/40 backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      rotateY: 0,
                      boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)'
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      perspective: '1000px',
                    }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-cyan-400/30 via-cyan-400/40 to-blue-500/20 blur"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text Content */}
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-cyan-100 transition-colors duration-300">
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  
                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <motion.a
            href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Aura%20Stack%20services."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="group relative px-6 sm:px-8 py-3 text-white font-bold rounded-xl text-sm sm:text-base whitespace-nowrap overflow-hidden block"
          >
            {/* 3D Button Background */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-cyan-500 via-cyan-600 to-blue-700 rounded-xl"
              initial={{ opacity: 1 }}
              whileHover={{
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)'
              }}
            />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-linear-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.span
                initial={{ x: -4, opacity: 0 }}
                whileHover={{ x: 2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-300 p-2.5 rounded-lg hover:bg-cyan-500/20 transition-all backdrop-blur-md border border-cyan-500/40 hover:border-cyan-400/60"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-linear-to-b from-slate-900/98 via-black/95 to-slate-900/98 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
          >
            <div className="px-5 py-8 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      onClick={() => setIsMenuOpen(false)}
                      className="relative overflow-hidden group px-5 py-4 rounded-xl transition-all duration-300"
                    >
                      {/* Card Background */}
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-cyan-500/15 to-blue-500/10 rounded-xl border border-cyan-500/40"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Text */}
                      <span className="relative z-10 flex items-center gap-3 text-cyan-300 group-hover:text-cyan-100 text-base font-semibold transition-colors duration-300">
                        <span className="text-xl">{item.icon}</span>
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              
              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.36 }}
                className="h-px bg-linear-to-r from-cyan-500/20 via-cyan-400/10 to-transparent my-4"
              />
              
              {/* Get Started Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="pt-2"
              >
                <motion.a
                  href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Aura%20Stack%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative px-5 py-4 text-white font-bold rounded-xl text-base tracking-wide overflow-hidden group block"
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-cyan-500 via-cyan-600 to-blue-700 rounded-xl"
                    whileHover={{
                      boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-linear-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <motion.span
                      initial={{ x: -4 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                className="pt-4 mt-2"
              >
                <p className="text-xs uppercase tracking-widest text-cyan-500/70 font-semibold px-5 mb-3">Connect With Us</p>
                <div className="flex gap-3 px-5">
                  {[
                    { label: 'Facebook', icon: 'f', href: 'https://www.facebook.com/share/1MQf9dcQEN/' },
                    { 
                      label: 'TikTok', 
                      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 0 1-5.45 1.64H2.95a4.7 4.7 0 0 0 8.45-4.54v-5.42a7.17 7.17 0 0 0 4.14 1.27v-3.73a2.62 2.62 0 0 1-.04-.55zM23.4 7.29V4.62a2.66 2.66 0 0 1-2.66 2.66h.37a5.4 5.4 0 0 0 2.3-2.99zm-7.84 5.05a2.33 2.33 0 0 0-1.82 2.15v.22a2.82 2.82 0 0 1-5.63-.54H5.5a4.7 4.7 0 0 0 8.45 4.54V12.34z"/></svg>, 
                      href: 'https://www.tiktok.com/@aura_stack_?_r=1&_t=ZM-91uRn80SmIF' 
                    },
                    { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/aura-stack-269006372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 relative p-3 rounded-lg border border-cyan-500/40 hover:border-cyan-400/60 hover:bg-cyan-500/15 text-cyan-400/70 hover:text-cyan-300 transition-all group overflow-hidden"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.54 + idx * 0.06 }}
                      title={social.label}
                    >
                      <motion.div
                        className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/5 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/20"
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 text-lg flex items-center justify-center">
                        {typeof social.icon === 'string' ? social.icon : social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
