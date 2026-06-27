'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

export default function CashflowStabilizationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const features = [
    {
      title: 'Calling parents manually',
      description: 'Right now, most schools operate in uncertainty with outdated payment tracking methods.',
      icon: '📱',
    },
    {
      title: 'Chasing fee balances blindly',
      description: 'Managing fees without visibility into who has paid and who hasn\'t.',
      icon: '👁️',
    },
    {
      title: 'Making decisions without data',
      description: 'Spending decisions made without real financial insights or forecasting.',
      icon: '📊',
    },
    {
      title: 'Delayed revenue visibility',
      description: 'Straining operations because revenue visibility is delayed by manual processes.',
      icon: '⏱️',
    },
  ];

  const benefits = [
    { number: '95%', label: 'Reduction in financial errors' },
    { number: '40%', label: 'Faster payment processing' },
    { number: '3-6', label: 'Months earlier cash flow forecasting' },
    { number: '60%', label: 'Less time on financial management' },
  ];

  // Slideshow images
  const slideshowImages = [
    { src: '/system.jpeg', alt: 'System' },
    { src: '/gaps.jpeg', alt: 'Gaps' },
    { src: '/khaby lame.jpeg', alt: 'Khaby Lame' },
    { src: '/school cash.jpeg', alt: 'School Cash' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
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
              'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ zIndex: 0 }}
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
                backgroundImage: 'linear-gradient(90deg, #00ffff 0%, #22c55e 50%, #0088ff 100%)',
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
              Cashflow Stabilization system
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 sm:mb-8 max-w-3xl text-center mx-auto"
            >
              Reduce human delay , errors with machine level accuracy
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-2xl mb-8 sm:mb-12 text-center mx-auto"
            >
              Our cashflow stabilization system is available at only Ksh 25,000 per month, with a one-time installation fee of Ksh 2,000,000. You pay just Ksh 25,000 per month for five years.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-linear-to-r from-cyan-500 to-green-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            {/* Admin School Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 sm:mt-16 md:mt-20 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30 border border-cyan-500/30 max-w-3xl mx-auto"
            >
              <img
                src="/admin  school.jpeg"
                alt="School Cash Flow Management"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-cyan-400 to-red-400 bg-clip-text text-transparent">
              Why institutions struggle and how forward-thinking schools are already switching
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {features.map((feature, index) => (
                <motion.div
                  key={index}

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl border border-cyan-500/30 bg-linear-to-br from-cyan-500/10 to-green-500/10 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-full flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white">
              The Hidden Psychology: Why Smart Institutions Are Switching
            </h2>
            <p className="text-2xl font-bold text-cyan-300 mb-8">
              Schools don't fail because of a lack of students. They struggle because of unpredictable cashflow timing.
            </p>
          </motion.div>

          {/* Psychology Section Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12 sm:mb-16"
          >
            <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/40 border border-cyan-500/40 bg-slate-900/50 p-2">
              <img
                src="/school csh.jpeg"
                alt="School Cash Flow Psychology"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 md:p-16 mb-8 sm:mb-12"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
              When you don't know:
            </p>
            <ul className="space-y-4 text-gray-300 mb-8 max-w-2xl mx-auto text-left">
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl shrink-0">•</span>
                <span className="text-lg">Who has paid</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl shrink-0">•</span>
                <span className="text-lg">Who hasn't paid</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl shrink-0">•</span>
                <span className="text-lg">How much is remaining</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl shrink-0">•</span>
                <span className="text-lg">Whether collections match expenses</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-green-400 mb-4 text-center">
              You are forced to react instead of lead.
            </p>
            <p className="text-lg text-gray-300 text-center">
              And in today's competitive education market, reacting is dangerous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Introducing: Digital Asset Cashflow Stabilization System for Institutions
            </h2>
            <p className="text-2xl font-bold text-green-300 mt-8">
              This is not just software.<br/>This is financial visibility + automation + decision intelligence.
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full max-w-6xl">
              {/* Paybill Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-green-500/30 bg-linear-to-br from-green-500/10 to-cyan-500/10 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 lg:col-span-1 flex flex-col"
            >
              <div className="text-5xl mb-4 text-center">✔️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-300 text-center">Paybill Integrated Intelligence</h3>
              <p className="text-gray-300 mb-4 text-center">
                When a parent pays school fees using school paybill number or student admission number, the system automatically:
              </p>
              <ul className="space-y-2 text-gray-300 text-left max-w-xs mx-auto">
                <li>✓ Captures payment instantly</li>
                <li>✓ Assigns it to the correct student</li>
                <li>✓ Updates fee balance remaining</li>
                <li>✓ Saves records securely</li>
              </ul>
            </motion.div>

            {/* Parent Communication */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-cyan-500/30 bg-linear-to-br from-cyan-500/10 to-green-500/10 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 lg:col-span-1 flex flex-col"
            >
              <div className="text-5xl mb-4 text-center">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300 text-center">Automatic Parent Communication</h3>
              <p className="text-gray-300 mb-4 text-center">
                Immediately after payment, parents receive an SMS: "Thank you. Fee received. The balance remaining is…"
              </p>
              <p className="text-gray-300 mb-4 font-semibold text-center">This builds:</p>
              <ul className="space-y-2 text-gray-300 text-left max-w-xs mx-auto">
                <li>✓ Trust & transparency</li>
                <li>✓ Professional image</li>
                <li>✓ Reduced admin workload</li>
                <li>✓ Faster payment completion</li>
              </ul>
            </motion.div>

            {/* Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 lg:col-span-3 flex flex-col"
            >
              <div className="text-5xl mb-4 text-center">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300 text-center">Real-Time Institutional Cashflow Dashboard</h3>
              <p className="text-gray-300 mb-4 text-center">
                School management can instantly see:
              </p>
              <ul className="space-y-2 text-gray-300 text-left max-w-2xl mx-auto">
                <li>✓ Total fee collected (daily, weekly, monthly)</li>
                <li>✓ Outstanding balances per student</li>
                <li>✓ Revenue vs. operational expenses</li>
                <li>✓ Predictive cashflow forecasts</li>
                <li>✓ Automated financial reports for decision-making</li>
              </ul>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results
            </h2>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div className="text-5xl sm:text-6xl font-black bg-linear-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2 text-center">
                    {benefit.number}
                  </motion.div>
                  <p className="text-gray-300 font-semibold text-center">{benefit.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Dashboard Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
              <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto text-center leading-relaxed">
              The dashboard continues to track:
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-green-500/30 bg-linear-to-br from-green-500/10 to-cyan-500/10 text-center"
              >
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Expected Total Fee</h3>
                <p className="text-gray-300">Annual revenue projections based on enrollment and fee structure analysis.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-cyan-500/30 bg-linear-to-br from-cyan-500/10 to-green-500/10 text-center"
              >
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Students Who Have Not Paid</h3>
                <p className="text-gray-300">Real-time list of pending payments to enable targeted follow-up strategies.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-500/10 to-pink-500/10 text-center"
              >
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Collection Trend vs Expenses</h3>
                <p className="text-gray-300">Visual comparison of incoming revenue against operational spending patterns.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Financial Decision Guidance Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Financial Decision Guidance (Risk Control)
            </h2>
            <div className="flex justify-center">
              <p className="text-gray-300 text-lg sm:text-xl max-w-4xl text-center">
                The system doesn't just show numbers — it guides action based on real-time data
              </p>
            </div>
          </motion.div>

          {/* Smart Financial Section Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 sm:mb-20"
          >
            <div className="w-full max-w-xl sm:max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-green-500/30 border border-green-500/30 bg-slate-900/60 p-1">
                <img
                  src="/software management.jpeg"
                  alt="Software Management System"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
                {/* Professional corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-green-400/40 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-green-400/40 rounded-br-2xl"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Stable Collection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-green-500/40 bg-linear-to-br from-green-500/15 to-emerald-500/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-300">If Fee Collection is Stable ✅</h3>
                <p className="text-gray-300 mb-6 font-semibold">→ Proceed with:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Supplier payments and vendor agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Bread & food supply procurement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Learning materials acquisition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Operational expansion initiatives</span>
                  </li>
                </ul>
              </motion.div>

              {/* Unstable Collection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-orange-500/40 bg-linear-to-br from-orange-500/15 to-red-500/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-orange-300">If Fee Collection is Unstable ⚠️</h3>
                <p className="text-gray-300 mb-6 font-semibold">→ System recommends:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Delay non-essential spending</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Control and optimize operational costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Trigger early follow-up strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Protect institutional financial stability</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-green-300 text-center mt-12 max-w-3xl mx-auto"
          >
            This reduces panic decisions and protects institutional stability.
          </motion.p>
        </div>
      </section>

      {/* Old Way vs Intelligent Way */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              The Old Way vs The Intelligent Way
            </h2>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Old System */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 rounded-2xl border border-gray-600/40 bg-linear-to-br from-gray-700/20 to-gray-800/20"
              >
                <h3 className="text-3xl font-black mb-8 text-gray-400">Old System</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-gray-500 text-2xl">❌</span>
                    <span className="text-gray-400">Manual follow ups</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-500 text-2xl">❌</span>
                    <span className="text-gray-400">Paper reconciliation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-500 text-2xl">❌</span>
                    <span className="text-gray-400">Guesswork budgeting</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-gray-500 text-2xl">❌</span>
                    <span className="text-gray-400">Late financial decisions</span>
                  </li>
                </ul>
              </motion.div>

              {/* New Intelligent System */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 rounded-2xl border border-green-500/50 bg-linear-to-br from-green-500/20 to-cyan-500/15"
              >
                <h3 className="text-3xl font-black mb-8 bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  New Intelligent System
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-green-400 text-2xl">✅</span>
                    <span className="text-gray-300">Real-time data</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-400 text-2xl">✅</span>
                    <span className="text-gray-300">Automated payment capture</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-400 text-2xl">✅</span>
                    <span className="text-gray-300">Automated parent communication</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-400 text-2xl">✅</span>
                    <span className="text-gray-300">Predictive spending confidence</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality for School Owners Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white">
              Reality for School Owners & Founders
            </h2>
            <div className="flex justify-center">
              <p className="text-xl text-gray-300 max-w-4xl text-center">
                Institutions adopting financial automation now will leverage competitive advantages
              </p>
            </div>
          </motion.div>

          {/* Reality Section Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 sm:mb-20"
          >
            <div className="w-full max-w-xl sm:max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-500/30 border border-cyan-500/30 bg-slate-900/60 p-1">
                <img
                  src="/students.jpeg"
                  alt="Students"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
                {/* Professional corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40 rounded-br-2xl"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Early Adopters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-cyan-500/40 bg-linear-to-br from-cyan-500/15 to-blue-500/10"
              >
                <h3 className="text-2xl font-black mb-6 text-cyan-300">Early Adopters Will:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Stabilize revenue faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Reduce operational risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Scale confidently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Gain competitive trust from parents</span>
                  </li>
                </ul>
              </motion.div>

              {/* Delayers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-red-500/40 bg-linear-to-br from-red-500/15 to-orange-500/10"
              >
                <h3 className="text-2xl font-black mb-6 text-red-300">Institutions Delaying Will:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span>Continue chasing payments manually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span>Experience unpredictable operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span>Lose efficiency advantage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span>Fall behind in market competition</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Closing Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-white leading-tight text-center">
              The shift is already happening.
            </p>

            <motion.div className="my-12 p-8 rounded-2xl border border-cyan-500/40 bg-linear-to-br from-cyan-500/10 to-green-500/10">
              <p className="text-2xl sm:text-3xl font-black text-cyan-300 mb-6 leading-relaxed text-center">
                If you had real-time financial truth,
                <br />
                Would you still run your institution blindly?
              </p>
            </motion.div>

            <div className="space-y-6 flex flex-col items-center">
              <p className="text-xl sm:text-2xl text-gray-300 font-semibold leading-relaxed text-center">
                Because the future of education management is not paperwork.
              </p>
              <p className="text-xl sm:text-2xl text-gray-300 font-semibold leading-relaxed text-center">
                It is <span className="bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-black">data-driven financial control.</span>
              </p>
              <p className="text-xl sm:text-2xl text-gray-300 font-semibold leading-relaxed text-center">
                And the institutions who adopt early will define the new standard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/40 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white text-center">
              Ready to Stabilize Your Cash Flow?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto text-center">
               using our platform to maintain healthy cash flow and make better financial decisions.
            </p>

            {/* Slideshow */}
            <div className="mb-12 flex justify-center">
              <div className="w-full max-w-2xl">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/40 border border-green-500/30 h-80 sm:h-96"
                >
                  <img
                    src={slideshowImages[currentSlide].src}
                    alt={slideshowImages[currentSlide].alt}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                </motion.div>

                {/* Slideshow Controls */}
                <div className="flex items-center justify-between mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevSlide}
                    className="p-3 rounded-full border border-green-500/40 text-green-400 hover:bg-green-500/20 transition-all"
                  >
                    ←
                  </motion.button>

                  <div className="flex gap-2">
                    {slideshowImages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? 'bg-green-500 w-6'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSlide}
                    className="p-3 rounded-full border border-green-500/40 text-green-400 hover:bg-green-500/20 transition-all"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-linear-to-r from-green-500 to-cyan-500 text-black font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
