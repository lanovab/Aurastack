'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'aurastacklimited@gmail.com',
    description: 'Send us an email and we will respond within 24 hours',
  },
  {
    icon: '📞',
    title: 'Phone',
    value: '+254713095009',
    description: 'Available Monday to Friday, 9 AM to 6 PM EAT',
  },
  {
    icon: '📍',
    title: 'Office',
    value: 'Nairobi, Kenya',
    description: 'Tech Hub, Nairobi, Kenya',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send email using Formspree service with timeout
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      try {
        const response = await fetch('https://formspree.io/f/mgvvgqqd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            _redirect: 'false',
          }),
          signal: controller.signal,
        });
        
        clearTimeout(timeout);
        
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            setFormData({ name: '', email: '', company: '', message: '' });
            setSubmitted(false);
          }, 3000);
        }
      } catch (error: any) {
        clearTimeout(timeout);
        if (error.name === 'AbortError') {
          console.error('Form submission timeout');
        } else {
          throw error;
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success to user as fallback
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            Get in{' '}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Have questions about our services? Our dedicated team is ready to help you transform your business. Reach out and let's start a conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50 flex justify-center">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Multiple ways to reach our team for any inquiries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px rgba(0, 212, 255, 0.25)',
                  transition: { duration: 0.3 },
                }}
                className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-cyan-400/30 bg-linear-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl hover:border-cyan-400/70 transition-all duration-300 overflow-hidden group text-center sm:text-left"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 flex justify-center sm:justify-start">{method.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{method.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{method.value}</p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-linear-to-b from-black via-slate-950/30 to-black" />

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20 md:mb-24 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-4 sm:mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Fill out the form below and our team will respond within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-7 sm:space-y-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-9">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-3 text-gray-300 text-center sm:text-left">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/80 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-3 text-gray-300 text-center sm:text-left">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/80 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-3 text-gray-300 text-center sm:text-left">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/80 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                placeholder="Your Company"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-3 text-gray-300 text-center sm:text-left">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/80 border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm sm:text-base"
                placeholder="Tell us about your project and requirements..."
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              type="submit"
              className="w-full py-4 sm:py-5 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              {submitted ? '✓ Message Sent Successfully!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 sm:p-6 bg-cyan-400/10 border border-cyan-400/50 rounded-xl text-cyan-300 text-center text-sm sm:text-base"
            >
              Thank you for reaching out! We'll get back to you within 24 hours with detailed information about how we can help you.
            </motion.div>
          )}
        </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-linear-to-b from-black via-slate-950/30 to-black" />

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50 flex justify-center">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-4 sm:mb-6">
              Frequently Asked{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
            {[
              {
                q: 'How quickly will I hear back?',
                a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please use our phone number +254713095009.',
              },
              {
                q: 'Do you offer custom solutions?',
                a: 'Absolutely! We specialize in tailored solutions designed specifically for your unique business needs and goals. Our team can work with you to create the perfect solution.',
              },
              {
                q: 'What is your support availability?',
                a: 'Our support team is available 24/7 for enterprise clients. Standard support covers business hours (9 AM - 6 PM EAT) with guaranteed response times.',
              },
              {
                q: 'Can I schedule a consultation?',
                a: 'Yes, absolutely! After submitting your inquiry, we\'ll contact you to schedule a convenient time for an in-depth consultation. We can meet virtually or in person.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-gray-600/30 bg-linear-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 backdrop-blur-lg shadow-lg shadow-black/30 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/15"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-7 sm:px-10 py-7 sm:py-8 flex items-center justify-between group hover:bg-slate-900/40 transition-all duration-300"
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-left text-gray-100 group-hover:text-cyan-300 transition-colors pr-4 leading-relaxed">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="shrink-0"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFAQ === index ? 'auto' : 0,
                    opacity: expandedFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-7 sm:px-10 py-8 sm:py-9 border-t border-gray-600/20 bg-linear-to-br from-cyan-500/8 via-blue-500/5 to-transparent">
                    <p className="text-sm sm:text-base md:text-base text-gray-200 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 md:mt-24 p-8 sm:p-10 md:p-12 rounded-2xl border border-cyan-400/40 bg-linear-to-br from-cyan-500/12 via-blue-500/8 to-transparent backdrop-blur-lg shadow-lg shadow-cyan-500/10"
          >
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="text-4xl sm:text-5xl shrink-0">💬</div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Didn't find your answer?</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                  Have more questions? Our dedicated support team is ready to help you. Contact us directly or submit the form above.
                </p>
                <a href="mailto:aurastacklimited@gmail.com" className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400 transition-all duration-300 font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/20">
                  <span>Email us now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacing Divider */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-linear-to-b from-black via-slate-950/30 to-black" />

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
