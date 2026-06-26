'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Security', href: '#security' },
        { label: 'Updates', href: '#updates' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Team', href: '#team' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Community', href: '#community' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  const socialLinks = [
    { icon: '𝕏', href: '#twitter', label: 'Twitter' },
    { icon: 'f', href: '#facebook', label: 'Facebook' },
    { icon: 'in', href: '#linkedin', label: 'LinkedIn' },
    { icon: '🔗', href: '#github', label: 'GitHub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-linear-to-b from-black via-slate-950 to-black pt-0 overflow-hidden" style={{ borderTop: '1px solid', borderImage: 'linear-gradient(to right, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2)) 1' }}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/10 flex items-center justify-center"
      >
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center w-full"
          >
            Let's Build Tomorrow Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 leading-relaxed text-center w-full max-w-3xl"
          >
            Join thousands of innovative companies already transforming their businesses with Aura Stack. Let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-sm sm:text-base hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Footer Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-14 mb-16 sm:mb-20 md:mb-24 lg:mb-28 w-full"
          >
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-black mb-4 sm:mb-6 md:mb-6 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Aura Stack
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed mb-6 sm:mb-8 md:mb-6">
                Forging the future of technology through innovative solutions, exceptional service, and unwavering commitment to excellence.
              </p>
              <div className="flex gap-4 items-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border-2 border-cyan-400/50 flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 font-bold text-sm"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {footerLinks.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="col-span-1">
                <h4 className="font-bold text-white mb-5 sm:mb-6 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-xs lg:text-sm">
                  {section.title}
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 md:space-y-2.5 lg:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-cyan-400 text-xs sm:text-sm md:text-xs lg:text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full mb-16 sm:mb-20 md:mb-24 lg:mb-28 relative overflow-hidden rounded-3xl border-2 border-cyan-400/40 bg-linear-to-br from-slate-900/90 via-cyan-950/40 to-slate-900/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20"
          >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/8 via-blue-500/5 to-purple-500/8 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0" />
            
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

            <div className="relative z-10 p-8 sm:p-10 md:p-16 lg:p-20 w-full flex items-center justify-center">
              <div className="w-full max-w-5xl flex flex-col items-center justify-center">
                {/* Header Section */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                    className="inline-block mb-4 sm:mb-5 md:mb-6"
                  >
                    <span className="text-xs sm:text-sm md:text-sm lg:text-sm font-bold text-cyan-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10">
                      📬 Newsletter
                    </span>
                  </motion.div>
                  
                  <h3 className="font-attractive text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 lg:mb-7 bg-linear-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight mx-auto text-center">
                    Stay Updated with Latest News
                  </h3>

                  <p className="font-attractive text-gray-300 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0 text-center">
                    Get exclusive insights, product updates, and industry trends delivered directly to your inbox. Join thousands of professionals already subscribed.
                  </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-4 w-full max-w-3xl mx-auto px-2 sm:px-0"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 lg:py-6 rounded-full bg-slate-800/70 border-2 border-cyan-400/50 text-white placeholder-gray-400 text-sm sm:text-base md:text-base lg:text-base font-medium font-attractive focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300 hover:border-cyan-400/70 shadow-lg shadow-cyan-500/10"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 lg:py-6 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-black font-bold text-sm sm:text-base md:text-base lg:text-base rounded-full whitespace-nowrap transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/60 backdrop-blur-sm font-attractive"
                  >
                    Subscribe Now
                  </motion.button>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  viewport={{ once: true }}
                  className="text-center text-xs sm:text-xs md:text-sm lg:text-sm text-gray-400 mt-5 sm:mt-6 md:mt-7 lg:mt-8 px-2"
                >
                  <span className="inline-block">✓ No spam</span> <span className="text-gray-600">•</span> <span className="inline-block">100% Privacy</span> <span className="text-gray-600">•</span> <span className="inline-block">Unsubscribe anytime</span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent mb-8 sm:mb-10 md:mb-12 lg:mb-14" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-10 text-gray-400 text-xs sm:text-sm md:text-sm mb-6 sm:mb-8 lg:mb-10 items-center lg:items-center"
          >
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-16 w-full justify-center lg:justify-center items-center lg:items-center text-center lg:text-center">
              <p className="shrink-0">&copy; {currentYear} Aura Stack. All rights reserved. Crafted with passion and innovation.</p>
              
              <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm flex-wrap justify-center items-center">
                <a href="#privacy" className="hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap">Privacy Policy</a>
                <span className="text-gray-600 hidden md:inline">•</span>
                <a href="#terms" className="hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap">Terms of Service</a>
                <span className="text-gray-600 hidden md:inline">•</span>
                <a href="#cookies" className="hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap">Cookie Settings</a>
              </div>
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xs sm:text-sm text-cyan-400/60 w-full mt-6 sm:mt-8 md:mt-8 lg:mt-10"
          >
            Made with <span className="text-pink-500">💙</span> by the Aura Stack team • Thank you for being part of our journey
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
