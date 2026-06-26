'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 0,
      name: 'Lanova Kevin',
      role: 'CEO & Founder',
      image: '/ceo lanova kevin.jpeg',
      color: 'cyan',
      description: 'Visionary leader driving innovation and transforming businesses through cutting-edge technology solutions. With deep expertise in digital transformation, Kevin leads Aura Stack with passion and strategic vision.',
      isCEO: true,
    },
    {
      id: 1,
      name: 'Okinah',
      role: 'Chief Growth Officer',
      image: '/okinah chief growth officer.jpg',
      color: 'purple',
      description: 'Okinah is the Chief Growth Officer at Aura Stack, driving strategic expansion and market development. With a keen focus on scaling operations and maximizing business opportunities, Okinah combines visionary leadership with tactical execution to accelerate company growth and establish Aura Stack as an industry leader.',
    },
    {
      id: 2,
      name: 'Osteen',
      role: 'Web Frontend Developer',
      image: '/osteen web developer.jpeg',
      color: 'cyan',
      description: 'Osteen is a talented web frontend developer at Aura Stack, passionate about building beautiful and responsive user interfaces. He brings creativity and technical expertise to every project, ensuring exceptional user experiences. Expert in React, JavaScript, HTML, CSS, and modern web technologies.',
    },
    {
      id: 3,
      name: 'Mimi Wanjiru',
      role: 'Acquisition Specialist',
      image: '/vee.jpg',
      color: 'indigo',
      description: 'Mimi is a skilled negotiator and a trusted advisor, guiding candidates through the entire journey with clarity and professionalism. Responsible for constructing the foundational innovation.',
    },
    {
      id: 4,
      name: 'Hilda',
      role: 'Software Engineer',
      image: '/Hilda software.png',
      color: 'teal',
      description: 'Hilda is a dedicated software engineer at Aura Stack, focusing on developing innovative solutions that drive business success. Strong background in full-stack development.',
    },
    {
      id: 5,
      name: 'Aura Support Team',
      role: 'Business Lead',
      image: '/team aura.jpg',
      color: 'orange',
      description: 'Our Engineers arent just developers, they are digital alchemist who breathe life to business. Every solution carries our signature. Our whiteboard session birth ideas that makes investors say why didnt we think of that. We dont watch the clock, we reprogram it by bending time to delivering your work',
    },
    {
      id: 6,
      name: 'Isaack',
      role: 'Sales and Marketing Team',
      image: '/isaack.jpeg',
      color: 'purple',
      description: 'Isaack drives business growth through strategic sales and marketing initiatives. With expertise in digital marketing and client acquisition, he builds lasting relationships and expands market opportunities for Aura Stack. Passionate about translating technical solutions into market success.',
    },
    {
      id: 7,
      name: 'Leah',
      role: 'Frontend Developer',
      image: '/leah engineer.png',
      color: 'indigo',
      description: 'Leah is a skilled frontend developer at Aura Stack, specializing in creating modern, responsive, and user-friendly web interfaces. With expertise in React, JavaScript, and contemporary design frameworks, she transforms designs into seamless digital experiences that delight users.',
    },
  ];

  const colorGradients = {
    cyan: { border: 'border-cyan-400/60', glow: 'from-cyan-400 to-blue-400', bg: 'from-cyan-600/40 to-blue-600/40', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/50' },
    indigo: { border: 'border-indigo-400/60', glow: 'from-indigo-400 to-blue-400', bg: 'from-indigo-600/40 to-blue-600/40', text: 'text-indigo-400', shadow: 'hover:shadow-indigo-500/50' },
    teal: { border: 'border-teal-400/60', glow: 'from-teal-400 to-cyan-400', bg: 'from-teal-600/40 to-cyan-600/40', text: 'text-teal-400', shadow: 'hover:shadow-teal-500/50' },
    orange: { border: 'border-orange-400/60', glow: 'from-orange-400 to-pink-400', bg: 'from-orange-600/40 to-pink-600/40', text: 'text-orange-400', shadow: 'hover:shadow-orange-500/50' },
    purple: { border: 'border-purple-400/60', glow: 'from-purple-400 to-pink-400', bg: 'from-purple-600/40 to-pink-600/40', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/50' },
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-gray-200 my-0 mb-20 sm:mb-28 md:mb-32 lg:mb-40">
      {/* Animated White Background with Rays */}
      <div className="absolute inset-0 bg-white -z-20" />
      
      {/* Snake Lights Effect SVG */}
      <motion.svg 
        className="absolute inset-0 w-full h-full -z-10 opacity-50"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="snake-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
          </linearGradient>
          <linearGradient id="snake-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
          </linearGradient>
        </defs>
        
        {/* Animated Snake Lines */}
        <motion.path
          d="M 0,30% Q 25%,20% 50%,30% T 100%,30%"
          stroke="url(#snake-gradient-1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 0,50% Q 25%,40% 50%,50% T 100%,50%"
          stroke="url(#snake-gradient-2)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
        />
        <motion.path
          d="M 0,70% Q 25%,60% 50%,70% T 100%,70%"
          stroke="url(#snake-gradient-1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2, repeat: Infinity }}
        />
      </motion.svg>

      {/* Static Light Orbs - Removed animations for performance */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-28 md:mb-36 lg:mb-48 w-full flex flex-col items-center"
        >
          {/* Top Decorative Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center items-center"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-r from-pink-500 to-rose-400 shadow-lg shadow-pink-500/50 animate-pulse" />
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-linear-to-r from-purple-500 to-indigo-400 shadow-lg shadow-purple-500/50" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-400 shadow-lg shadow-cyan-500/50 animate-pulse" style={{animationDelay: '0.3s'}} />
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-linear-to-r from-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/50" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-r from-orange-500 to-yellow-400 shadow-lg shadow-orange-500/50 animate-pulse" style={{animationDelay: '0.6s'}} />
          </motion.div>

          {/* Decorative Line with Gradient Bubbles */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-1.5 w-32 sm:w-40 bg-linear-to-r from-pink-500 via-purple-500 to-orange-500 mx-auto mb-8 sm:mb-10 rounded-full shadow-lg shadow-cyan-500/40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative inline-block"
          >
            {/* Animated Bubble Background */}
            <motion.div
              className="absolute -inset-8 sm:-inset-10 md:-inset-12 bg-linear-to-r from-pink-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-2xl"
            />

            <motion.h2
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-linear-to-r from-pink-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight animate-pulse"
              style={{
                textShadow: '0 0 40px rgba(236, 72, 153, 0.5), 0 0 80px rgba(59, 130, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.3)',
                letterSpacing: '0.05em',
              }}
            >
              Meet Our Elite Team
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg sm:text-xl md:text-2xl bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent max-w-3xl mx-auto mb-4 sm:mb-6 font-bold text-center drop-shadow-lg"
          >
            World-class talent united by passion for innovation
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-base sm:text-lg bg-linear-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold text-center drop-shadow-md"
          >
            Diverse expertise • Proven track record • Collaborative spirit
          </motion.p>

          {/* Bottom Decorative Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            viewport={{ once: true }}
            className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center items-center"
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-linear-to-r from-orange-500 to-yellow-400 shadow-lg shadow-orange-500/40 animate-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-r from-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/50" />
            <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-400 shadow-lg shadow-cyan-500/50 animate-pulse" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-r from-purple-500 to-indigo-400 shadow-lg shadow-purple-500/50 animate-pulse" style={{animationDelay: '0.4s'}} />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-linear-to-r from-pink-500 to-rose-400 shadow-lg shadow-pink-500/40" />
          </motion.div>
        </motion.div>

        {/* Team Members Grid - Dark Card Design with Circular Images - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl">
            {teamMembers.map((member, index) => {
              const colors = colorGradients[member.color as keyof typeof colorGradients];
              const isCEO = member.isCEO || false;
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`rounded-3xl border-2 ${colors.border} bg-slate-900/80 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden group h-fit hover:shadow-2xl`}
                >
                <div className="flex flex-col items-center py-8 sm:py-10 px-6 text-center w-full">
                  {/* Circular Image with Glow */}
                  <div className="relative mb-6 sm:mb-8 w-40 h-40 sm:w-48 sm:h-48">
                    <div className={`absolute inset-0 bg-linear-to-r ${colors.glow} rounded-full blur-2xl opacity-50`} />
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`relative w-full h-full rounded-full border-4 ${colors.border} shadow-2xl object-cover object-center`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className={`relative w-full h-full rounded-full border-4 ${colors.border} bg-linear-to-br ${colors.bg} flex items-center justify-center text-4xl sm:text-5xl shadow-2xl font-black`}>
                        {member.name ? member.name.charAt(0) : ''}
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className={`text-xs sm:text-sm font-bold ${colors.text} mb-4 sm:mb-6 uppercase tracking-widest`}>
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 min-h-30 sm:min-h-35">
                    {member.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3 sm:gap-4 justify-center">
                    <a
                      href="#"
                      className={`w-10 h-10 rounded-full border-2 ${colors.border} flex items-center justify-center text-gray-300 hover:${colors.text} transition-colors duration-200 hover:shadow-lg hover:shadow-current`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`w-10 h-10 rounded-full border-2 ${colors.border} flex items-center justify-center text-gray-300 hover:${colors.text} transition-colors duration-200 hover:shadow-lg hover:shadow-current`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zm3.5-11c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.465 5.101-3.545h-10.202c.791 2.08 2.771 3.545 5.101 3.545z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`w-10 h-10 rounded-full border-2 ${colors.border} flex items-center justify-center text-gray-300 hover:${colors.text} transition-colors duration-200 hover:shadow-lg hover:shadow-current`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.5-7 7.5c-4 1-8-1-8.5-6.5.5.17 1 .24 1.5.24 2.487 0 4.782-1.016 6.456-2.697" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
