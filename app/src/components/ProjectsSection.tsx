'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'GIFT HOUSE',
    subtitle: 'MIKA COMPANY',
    image: '/mika company.png',
    type: 'image',
    technologies: ['Javascript', 'Html', 'CSS', 'REACT'],
    viewLink: 'https://giftshouse.co.ke/',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'INTERNATIONAL SCHOOL OF',
    subtitle: 'TROPICAL ECOLOGY',
    image: '/ECOLOGY.png',
    type: 'image',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    viewLink: 'https://africacenteroftropicalecology.com/',
    color: 'indigo',
  },
  {
    id: 3,
    title: 'Interactive Animation',
    subtitle: 'Platform',
    image: '/animation.mp4',
    type: 'video',
    technologies: ['Python', 'TensorFlow', 'Javascript', 'AWS'],
    viewLink: '#',
    color: 'teal',
  },
  {
    id: 4,
    title: 'PCEA ENCHORO EMUNY',
    subtitle: 'PRIMARY SCHOOL',
    image: '/emuny%20school.png',
    type: 'image',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    viewLink: 'https://pceaenchoroemuny.co.ke/',
    color: 'cyan',
  },
  {
    id: 5,
    title: 'SHAKIR HARDWARE',
    subtitle: 'COMPANY',
    image: '/shakir.png',
    type: 'image',
    technologies: ['React Native', 'Firebase', 'Expo', 'Redux'],
    viewLink: 'https://shakirhardwarelimited.co.ke/',
    color: 'indigo',
  },
  {
    id: 6,
    title: 'JUNIOR',
    subtitle: 'HARDWARE APP',
    image: '/junior.png',
    type: 'image',
    technologies: ['React', 'Node.js', 'Firebase', 'Payment API', 'Analytics'],
    viewLink: 'https://newjuniour-hardware.vercel.app/',
    color: 'teal',
  },
  {
    id: 7,
    title: '1760 HARDWARE',
    subtitle: 'HARDWARE SOLUTIONS',
    image: '/1760.png',
    type: 'image',
    technologies: ['React', 'Node.js', 'UI/UX', 'E-commerce'],
    viewLink: 'https://1760hardware.vercel.app/',
    color: 'indigo',
  },
  {
    id: 8,
    title: 'MERRYLAND',
    subtitle: 'RESTAURANT WEB APP',
    image: '/merryland.png',
    type: 'image',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Restaurant UI'],
    viewLink: 'http://merrylandrestaurant.co.ke/',
    color: 'cyan',
  },
];

const colorGradients = {
  cyan: { border: 'border-cyan-400/60', glow: 'from-cyan-400 to-blue-400', bg: 'from-cyan-600/40 to-blue-600/40', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/50' },
  indigo: { border: 'border-indigo-400/60', glow: 'from-indigo-400 to-blue-400', bg: 'from-indigo-600/40 to-blue-600/40', text: 'text-indigo-400', shadow: 'hover:shadow-indigo-500/50' },
  teal: { border: 'border-teal-400/60', glow: 'from-teal-400 to-cyan-400', bg: 'from-teal-600/40 to-cyan-600/40', text: 'text-teal-400', shadow: 'hover:shadow-teal-500/50' },
};

export function ProjectsSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-28 md:mb-36 lg:mb-48 w-full flex flex-col items-center"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-linear-to-r from-cyan-500 to-purple-400 mx-auto mb-6 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-3"
          >
            <span>Latest Projects</span>
            <span>🚀</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg sm:text-xl md:text-2xl bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent max-w-3xl mx-auto mb-3 font-semibold text-center"
          >
            Explore our latest web development projects
          </motion.p>

          <motion.p
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-base sm:text-lg bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent font-medium text-center"
          >
            Innovative solutions • Cutting-edge technology • Exceptional results
          </motion.p>
        </motion.div>

        {/* Projects Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full lg:max-w-7xl">
            {projects.map((project, index) => {
              const colors = colorGradients[project.color as keyof typeof colorGradients];
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 0 30px ${colors.border === 'border-cyan-400/60' ? 'rgba(34, 211, 238, 0.5)' : colors.border === 'border-indigo-400/60' ? 'rgba(129, 140, 248, 0.5)' : 'rgba(20, 184, 166, 0.5)'}`,
                  }}
                  className={`rounded-3xl border-2 ${colors.border} bg-slate-900/80 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden group h-fit hover:shadow-2xl`}
                >
                  {/* Full Width Image Container */}
                  <div className="relative w-full h-64 sm:h-56 md:h-64 bg-linear-to-br from-blue-900/40 to-purple-900/40 overflow-hidden group/image">
                    {project.type === 'video' ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                        preload="none"
                      >
                        <source src={project.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div className={`absolute inset-0 bg-linear-to-br ${colors.glow} opacity-20 group-hover/image:opacity-30 transition-all duration-300`} />
                    
                    {/* View Live Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                      <motion.a
                        href={project.viewLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-sm sm:text-base flex items-center gap-2"
                      >
                        <span>View Live</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 md:p-8 flex flex-col grow justify-center items-center text-center">
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent leading-tight">
                      {project.title}
                    </h3>

                    {/* Project Subtitle */}
                    <p className={`text-xs sm:text-sm font-bold bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 uppercase tracking-widest`}>
                      {project.subtitle}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 1, scale: 1 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className={`px-3 sm:px-4 py-1 sm:py-2 border ${colors.border} bg-slate-900/50 ${colors.text} rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-slate-800/50`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Live Button */}
                    <motion.a
                      href={project.viewLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 sm:py-3 border-2 ${colors.border} text-xs sm:text-sm font-bold ${colors.text} rounded-full hover:bg-slate-800/50 transition-all duration-300`}
                    >
                      View Live
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
