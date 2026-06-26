'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Truehost Kenya',
    description: 'Tap and buy domain or hosting with true host enjoy exclusive discounts. Smart businesses start here. Tap it',
    color: 'from-orange-400 to-yellow-400',
  },
  {
    name: 'Microsoft',
    description: 'Driving our innovation and productivity with world-class software, cloud, and AI technologies.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Nvidia',
    description: 'Accelerating our AI and graphics capabilities with cutting-edge GPU solutions.',
    color: 'from-green-400 to-emerald-400',
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 border-b border-gray-300 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-28 flex flex-col items-center px-2 sm:px-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
          >
            <span className="bg-linear-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Our Partners
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-linear-to-r from-red-400 to-pink-400 rounded-full"
          />
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 212, 255, 0.15)' }}
              className="flex flex-col items-center text-center group"
            >
              {/* Partner Logo Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-6 sm:mb-8 p-8 rounded-2xl border border-gray-300 bg-linear-to-br from-white to-gray-100 backdrop-blur-sm group-hover:border-gray-400 transition-all duration-300"
              >
                {partner.name === 'Truehost Kenya' && (
                  <img src="/truehost cloud c.png" alt="Truehost Kenya Logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"/>
                )}
                {partner.name === 'Microsoft' && (
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="6" width="9" height="9" fill="#00A4EF"/>
                    <rect x="17" y="6" width="9" height="9" fill="#7FBA00"/>
                    <rect x="6" y="17" width="9" height="9" fill="#F25022"/>
                    <rect x="17" y="17" width="9" height="9" fill="#FFB900"/>
                  </svg>
                )}
                {partner.name === 'Nvidia' && (
                  <img src="/nivida logo.png" alt="Nvidia Logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"/>
                )}
              </motion.div>

              {/* Partner Name */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                {partner.name}
              </h3>

              {/* Partner Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xs">
                {partner.description}
              </p>

              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="mt-6 h-1 w-12 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
