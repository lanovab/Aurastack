'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { TeamSection } from '@/components/TeamSection';

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We constantly push the boundaries of whats possible with technology, creating solutions that define industries.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Working together with our clients and teams to achieve extraordinary goals and build lasting relationships.',
  },
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions that exceed expectations and drive measurable impact.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'Fostering continuous learning, development, and innovation across our entire organization and client base.',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <main className="bg-black text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 100, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 md:mb-12 w-full flex flex-col items-center"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight tracking-tighter px-2 text-center w-full"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00ffff 0%, #0088ff 20%, #6366f1 40%, #a855f7 60%, #ff0088 80%, #00ffff 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              About Aura
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-semibold px-4 text-center w-full"
          >
            We are a team of passionate innovators dedicated to transforming how businesses operate through cutting-edge software solutions and unwavering commitment to excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4 px-4"
          >
            <a href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20get%20in%20touch%20with%20Aura%20Stack." target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-sm sm:text-base whitespace-nowrap"
              >
                Get In Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50 flex justify-center">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-10 md:mb-12 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center w-full"
            >
              Our Story
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full"
            >
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
                Founded in 2020, Aura emerged from a simple vision: to create software solutions that dont just meet expectations but exceed them. What started as a small team of five passionate developers has grown into a global force of over 50 talented individuals across multiple continents.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
                Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to our clients success. We serve over 10 companies kenya , from ambitious startups to Fortune 100 enterprises, helping them harness the power of technology to transform their industries.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
                At Aura, we believe that technology should empower people, not replace them. Every solution we build carries the passion and expertise of our team, and every client relationship is built on trust, transparency, and mutual success.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-800/50 flex justify-center">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center w-full">
              Our Core Values
            </h2>
            <div className="flex justify-center">
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl px-2 text-center">
                These principles guide every decision we make and every solution we build
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 212, 255, 0.25)',
                }}
                className="p-6 sm:p-8 rounded-2xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur hover:border-cyan-400/70 transition-all duration-300 group text-center"
              >
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spacing Between Sections */}
      <div className="h-16 sm:h-20 md:h-28 lg:h-32 bg-linear-to-b from-black via-slate-950/30 to-black"></div>

      {/* Services Section */}
      <section className="py-24 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-gray-800/50 flex justify-center">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center w-full">
              Our Services
            </h2>
            <div className="flex justify-center">
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl px-2 text-center">
                Comprehensive solutions tailored to transform your business
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              {
                image: '/web development.jpeg',
                title: 'Web Development',
                description: 'We craft high performance digital engines with the Aura Stack. Our focus is on delivering superior ROI through blazing fast performance, enhanced security, and scalable solutions that grow with your business.',
              },
              {
                image: '/Ai automation.jpeg',
                title: 'AI AGENTS',
                description: 'Purpose built autonomous systems that execute complex tasks, analyze data, and make decisions to achieve specific business goals 24/7. We move beyond automation to true intelligence.',
              },
              {
                image: '/mobile android app development.jpeg',
                title: 'Mobile Android App',
                description: 'High-performance native Android applications built with our Aura Stack. We handle strategy, design, development, testing, and launch—delivering scalable apps that drive growth.',
              },
              {
                image: '/cyber security.jpeg',
                title: 'Cyber Security',
                description: 'Comprehensive security solutions protecting your digital assets from threats. We implement robust defenses, conduct security audits, and ensure your systems remain secure and compliant.',
              },
              {
                image: '/Ethical hacking.jpeg',
                title: 'Ethical Hacking',
                description: 'Proactive penetration testing and vulnerability assessment to identify and fix security weaknesses before malicious actors exploit them.',
              },
              {
                image: '/cloud computing.jpeg',
                title: 'Cloud Computing',
                description: 'Scalable cloud infrastructure solutions including deployment, migration, and management. We optimize your cloud strategy for performance, cost-efficiency, and reliability.',
              },
              {
                image: '/Ai generation.jpeg',
                title: 'AI Generation',
                description: 'Cutting-edge AI models for content generation, image synthesis, text generation, and intelligent automation tailored to your business needs.',
              },
              {
                image: '/Architectural design.jpeg',
                title: 'Architectural Design AI',
                description: 'AI-powered architectural and design solutions including house design generation, 3D visualization, and intelligent building design automation.',
              },
              {
                image: '/Ai automation.jpeg',
                title: 'AI Automation',
                description: 'Full automation solutions from WhatsApp agents to social media management, email automation, workflow optimization, and intelligent business process automation.',
              },
              {
                image: '/Ai voice creation.jpeg',
                title: 'AI Voice Creation',
                description: 'Advanced voice synthesis and generation technology for creating natural-sounding AI voices for applications, assistants, and multimedia content.',
              },
              {
                image: '/school management  system.jpeg',
                title: 'School Management',
                description: 'Complete web application for educational institutions including student management, attendance tracking, grading systems, and parent communication portals.',
              },
              {
                image: '/Inventory management system.jpeg',
                title: 'Inventory Management',
                description: 'Intelligent inventory tracking system with real-time stock monitoring, automated reordering, reporting analytics, and supply chain optimization.',
              },
              {
                image: '/Ai automation.jpeg',
                title: 'Payroll System',
                description: 'Automated payroll management system handling salary calculations, tax compliance, attendance integration, and comprehensive employee payment processing.',
              },
              {
                image: '/web development.jpeg',
                title: 'Training',
                description: 'Comprehensive training programs to help your team master our software solutions and leverage technology effectively.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: '0 30px 60px rgba(0, 212, 255, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-6 sm:p-8 rounded-2xl border-2 border-blue-400/40 bg-linear-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl hover:border-cyan-400/80 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Image Container */}
                  <motion.div 
                    className="relative w-full h-48 sm:h-56 md:h-48 mb-4 rounded-lg overflow-hidden shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full group-hover:brightness-125 transition-all duration-300"
                      priority={false}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300 text-center grow">
                    {service.description}
                  </p>
                </div>

                {/* Accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Import and Display */}
      <div className="h-20 sm:h-24 md:h-32 lg:h-40 bg-linear-to-b from-black via-slate-950/30 to-black"></div>
      <TeamSection />

      {/* Spacing Between Sections */}
      <div className="h-16 sm:h-20 md:h-28 lg:h-32 bg-linear-to-b from-black via-slate-950/30 to-black"></div>
      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center"
          >
            {[
              { number: '5+', label: 'Years of Excellence', icon: '⭐' },
              { number: '50+', label: 'Clients Served', icon: '🤝' },
              { number: '50+', label: 'Talented Team Members', icon: '👥' },
              { number: '100+', label: 'Happy Clients Worldwide', icon: '🌍' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl sm:text-6xl mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-5xl sm:text-6xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full text-center flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-center w-full"
          >
            Ready to Build the Future with Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 text-center max-w-2xl"
          >
            Join us on our mission to transform industries through innovative technology solutions.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-base sm:text-lg"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative mt-24 sm:mt-32 md:mt-40 lg:mt-48 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 bg-linear-to-b from-black via-slate-950/50 to-black overflow-hidden flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">Aura Stack</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions and unwavering commitment to excellence.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent mb-8 sm:mb-12" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
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
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
