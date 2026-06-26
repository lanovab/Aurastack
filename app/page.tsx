'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { HeroVideoBackground } from '@/components/HeroVideoBackground';
import { TeamSection } from '@/components/TeamSection';
import { PartnersSection } from '@/components/PartnersSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ReviewsSection } from '@/components/ReviewsSection';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const closeTimer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(closeTimer);
    }
  }, [showPopup]);

  // Removed mouse tracking to improve performance

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Popup Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full mx-4"
          >
            <img
              src="/stabilize.jpeg"
              alt="Stabilize"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
        {/* Hero Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <HeroVideoBackground />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 w-full"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2 leading-tight tracking-tighter"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00ffff 0%, #0088ff 20%, #6366f1 40%, #a855f7 60%, #ff0088 80%, #00ffff 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
              }}
              animate={{
                backgroundPosition: ['200% center', '0% center'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Forging The Future
            </motion.h1>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff0088 0%, #a855f7 20%, #6366f1 40%, #0088ff 60%, #00ffff 80%, #ff0088 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              of Technology
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl w-full text-center leading-relaxed font-semibold"
          >
            Unlock  the next generation of AI-powered solutions, where  we dont develop softwares only we stabilize revenue , reduce risk and give 
            the business owners and founders visibility & control
          </motion.p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-lg"
            >
              Explore Now
            </motion.button>
            <motion.button
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400/10 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 border-b border-gray-800/50 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 flex flex-col items-center px-2 sm:px-4"
          >
            <motion.h2
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight italic"
            >
              <span className="bg-linear-to-r from-rose-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
                Why Choose Aura Stack
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed md:leading-8 mb-2 w-full font-semibold"
            >
              <span className="bg-linear-to-r from-violet-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                We combine innovation, expertise, and passion to deliver exceptional software solutions that transform your business and exceed expectations.
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-8 w-full place-items-center md:place-items-stretch">
            {/* Problem Solving Card */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 212, 255, 0.25)' }}
              className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 group flex flex-col h-full w-full max-w-sm md:max-w-none"
            >
              {/* Full Width Image Container */}
              <div 
                className="relative w-full h-64 sm:h-56 md:h-64 bg-linear-to-br from-blue-900/40 to-purple-900/40 overflow-hidden"
                style={{
                  backgroundImage: 'url(/grid2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-purple-600/20 group-hover:from-blue-600/50 group-hover:to-purple-600/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">🧩</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col grow justify-center items-center text-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black mb-3 sm:mb-4 bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent leading-tight">Problem Solving</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg">
                  At Aura stack we engineer emotions not just code. We solve world problem by a pixel of code
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 212, 255, 0.25)' }}
              className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 group flex flex-col h-full w-full max-w-sm md:max-w-none"
            >
              {/* Full Width Video Container */}
              <div 
                className="relative w-full h-64 sm:h-56 md:h-64 bg-linear-to-br from-indigo-900/40 to-blue-900/40 overflow-hidden"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-transparent to-blue-600/20 group-hover:from-indigo-600/50 group-hover:to-blue-600/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">⚙️</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col grow justify-center items-center text-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black mb-3 sm:mb-4 bg-linear-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent leading-tight">Tech Stack</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg">
                  We specialize in a variety of languages, frameworks, and tools that allow us to build robust and scalable applications.
                </p>
              </div>
            </motion.div>

            {/* Flexibility Card */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 212, 255, 0.25)' }}
              className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 group flex flex-col h-full w-full max-w-sm md:max-w-none"
            >
              {/* Full Width Video Container */}
              <div 
                className="relative w-full h-64 sm:h-56 md:h-64 bg-linear-to-br from-teal-900/40 to-cyan-900/40 overflow-hidden"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src="/glob.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-br from-cyan-600/20 via-transparent to-teal-600/20 group-hover:from-cyan-600/50 group-hover:to-teal-600/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">🌍</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col grow justify-center items-center text-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black mb-3 sm:mb-4 bg-linear-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent leading-tight">flexible on time zone communication & location</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg">
                  We based in USA & Kenya and open to remote work worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with White Background and Animated Rays */}
      <TeamSection />

      {/* Spacing Between Sections */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24"></div>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-6 border-y border-gray-800/50 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            {[
              { number: '100+', label: 'Happy Clients' },
              { number: '50+', label: 'Clients Served' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Spacing Between Sections */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24"></div>

      {/* Latest Projects Section */}
      <ProjectsSection />

      {/* Spacing Between Sections */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24"></div>

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Large Gap Between Reviews and Footer */}
      <div className="h-16 sm:h-20 md:h-28 lg:h-32"></div>

      {/* Footer */}
      <footer className="relative mt-24 sm:mt-32 md:mt-40 lg:mt-48 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-linear-to-b from-black via-slate-900 to-black overflow-hidden flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Aura Stack</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions and unwavering commitment to excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'Updates'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Team', 'Blog', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-2">
                {['Documentation', 'Contact Us', 'FAQ', 'Community'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent mb-8 sm:mb-12" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; 2025 Aura Stack. All rights reserved. Crafted with passion and innovation.
            </p>
            <div className="flex gap-6 sm:gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
