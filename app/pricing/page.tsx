'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses or startups looking to establish their brand presence',
      price: 199,
      features: [
        'Fast project turn around time',
        'Substantial cost savings',
        'International quality standards',
        'Customized project',
        'Increase in business revenue',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Advanced',
      description: 'Ideal for growing brands ready to expand their reach and enhance engagement',
      price: 399,
      features: [
        'A dedicated Project Management',
        'Strategic delivery locations',
        'Basic social media strategy',
        'Quarterly performance reports',
        'Press release drafting and distribution',
      ],
      cta: 'Get Started',
      featured: true,
    },
    {
      name: 'Premier',
      description: 'A solution for established brands needing management and strategy',
      price: 799,
      features: [
        'Fast project turn around time',
        'Substantial cost savings',
        'International quality standards',
        'Customized project',
        'Increase in business revenue',
      ],
      cta: 'Get Started',
      featured: false,
    },
  ];

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



  // Advanced animation variants
  const pageFlipVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };



  const rotatingCardVariants = {
    hidden: {
      rotateX: 180,
      opacity: 0,
      y: 50,
    },
    visible: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 100, 255, 0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
          <motion.div
            variants={pageFlipVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              Simple, Transparent{' '}
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Choose the perfect plan for your needs. Scale as you grow with flexible pricing options.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-7xl w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={rotatingCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
                  plan.featured
                    ? 'md:scale-105 border-2 border-cyan-400/50 bg-linear-to-br from-slate-800/80 via-slate-900/60 to-slate-950/80 shadow-2xl shadow-cyan-500/40'
                    : 'border border-gray-700/60 bg-linear-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50'
                } backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-500/30 group`}
                style={{ perspective: 1000 }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 pointer-events-none" />

                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
                    <div className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 text-white px-6 py-2 text-xs font-bold rounded-b-2xl shadow-lg tracking-widest">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="relative p-8 sm:p-10 flex flex-col h-full">
                  <div className={`${plan.featured ? 'mt-6' : ''} text-center sm:text-left flex sm:block justify-center`}>
                    <div className="inline-block mb-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        plan.featured
                          ? 'bg-cyan-500/30 text-cyan-200'
                          : 'bg-gray-700/40 text-gray-300'
                      }`}>
                        {plan.name}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black mb-3 text-white text-center sm:text-left">{plan.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed text-center sm:text-left">{plan.description}</p>

                  {/* Price Section */}
                  <div className="mb-8 pb-8 border-b border-gray-700/40 text-center sm:text-left">
                    <div className="flex items-baseline gap-2 mb-2 justify-center sm:justify-start">
                      <span className="text-6xl sm:text-7xl font-black bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">${plan.price}</span>
                      <span className="text-gray-400 text-lg">/year</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Billed yearly • Cancel anytime</p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 mb-8 relative overflow-hidden group/btn ${
                      plan.featured
                        ? 'bg-linear-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/80 font-extrabold'
                        : 'border-2 border-cyan-400/70 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/15 font-semibold'
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    {plan.featured && (
                      <div className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-600 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    )}
                  </motion.button>

                  {/* Features */}
                  <div className="grow">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6 text-center sm:text-left">What&apos;s included:</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.06 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group/feature justify-center sm:justify-start"
                        >
                          <div className="shrink-0 mt-1">
                            <svg className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover/feature:scale-110" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-linear-to-b from-black via-slate-950/30 to-black" />

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 flex justify-center">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-4 sm:mb-6">
              Pricing{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FAQs
              </span>
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">{[
              {
                q: 'Can I change my plan anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a free trial available?',
                a: 'Yes! We offer a 14-day free trial on all plans. No credit card required to get started.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, bank transfers, and various international payment methods for your convenience.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service. No questions asked.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 sm:p-12 rounded-2xl border border-gray-600/40 bg-linear-to-br from-slate-900/60 via-slate-900/40 to-slate-950/60 backdrop-blur-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5">{faq.q}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-linear-to-b from-black via-slate-950/30 to-black" />

      {/* CTA Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-4xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg sm:text-xl mb-8 sm:mb-10"
          >
            Join thousands of companies using Aura Stack
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20start%20a%20free%20trial%20with%20Aura%20Stack." target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
              >
                Start Free Trial
              </motion.button>
            </a>
            <a href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Aura%20Stack%20services." target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </a>
          </motion.div>
        </div>
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
