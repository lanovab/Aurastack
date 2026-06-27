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

      {/* Our Services Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-32">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 100, 255, 0.08) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              Our Services
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-center"
          >
            We build custom business automation, enterprise software, and strategic solutions to stabilize revenue, reduce risk, and scale operations.
          </motion.p>

          <div className="w-full space-y-16 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-5xl rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-5 sm:p-7 md:p-8 shadow-2xl shadow-cyan-500/10"
            >
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] items-center">
              <img
                src="/whatapp%20ai%20agent.jpeg"
                alt="WhatsApp AI agent chatbot for business"
                className="w-full h-full object-cover rounded-2xl border border-cyan-400/20"
              />
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 mb-3">WhatsApp AI Agent</p>
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">WhatsApp 24 hrs Support Assistant Agents</h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  We build WhatsApp AI agent chatbots for businesses and organizations that can communicate in both Swahili and English, even mixing languages naturally based on the customer&apos;s needs. They can think, know when to escalate to a human, negotiate, and understand human psychology and negotiation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Swahili & English</span>
                  <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-200">Human escalation</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Negotiation-ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full max-w-5xl rounded-3xl border border-fuchsia-500/20 bg-slate-900/70 p-5 sm:p-7 md:p-8 shadow-2xl shadow-fuchsia-500/10 mt-16"
          >
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] items-center">
              <img
                src="/bussiness%20whatapp%20ai.png"
                alt="Business WhatsApp AI agent for customer engagement"
                className="w-full h-full object-cover rounded-2xl border border-fuchsia-400/20"
              />
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Business AI</p>
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">Never miss customers because of late replies</h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  We train the AI about your business and let it handle the heavy lifting. It responds with human-like intuition, understands Swahili and English, and can act like your sales person with no sick days, no coffee breaks, and 24/7 support whether you are online or offline.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-200">Business-trained AI</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">24/7 support</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Human-like replies</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-5xl rounded-3xl border border-amber-500/20 bg-slate-900/70 p-5 sm:p-7 md:p-8 shadow-2xl shadow-amber-500/10 mt-16"
          >
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] items-center">
              <img
                src="/appointment%20reminder.png"
                alt="AI appointment reminder assistant"
                className="w-full h-full object-cover rounded-2xl border border-amber-400/20"
              />
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 mb-3">Voice Caller Assistant</p>
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white">AI appointment reminder and follow-up assistant</h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  We develop AI voice agents that are trained with your appointment schedules, business operations, and client context. They call at the right time to remind you and your clients about upcoming meetings, including the venue, the person involved, and the purpose of the appointment. They can also confirm attendance, follow up professionally, and only proceed after your approval.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm text-amber-200">Appointment reminders</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Venue & contact awareness</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Human-approved follow-ups</span>
                </div>
              </div>
            </div>
          </motion.div>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full mt-6">
            {[
              { title: 'Business Automation', desc: 'Streamline workflows, reduce manual effort, and improve accuracy.' },
              { title: 'Custom Software', desc: 'Tailored systems built to match your unique business processes.' },
              { title: 'Revenue Stabilization', desc: 'Strategies and tools to smooth cashflow and reduce volatility.' },
              { title: 'Consulting & Strategy', desc: 'Product and operational guidance to maximize ROI.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * i, duration: 0.5 }}
                className="p-6 rounded-2xl border border-gray-800/40 bg-linear-to-br from-slate-900/60 to-slate-950/60"
              >
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-10 flex gap-4">
            <a href="https://wa.me/254713095009?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20Aura%20Stack%20services." target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl">
                Contact Us
              </motion.button>
            </a>
            <a href="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 border-2 border-cyan-400 text-cyan-300 rounded-xl">
                Learn More
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
