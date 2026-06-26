'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InnovationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <Navigation />

      {/* Gazette Header */}
      <section className="relative bg-linear-to-b from-black via-slate-900 to-black text-white pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-6 leading-tight tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00ffff 0%, #0088ff 50%, #ff0088 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            INNOVATION GAZETTE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider"
          >
            SPECIAL EDITION | JANUARY 2026 | KENYAN REAL ESTATE REVOLUTION
          </motion.p>
        </div>
      </section>

      {/* Main Story Container */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Top Banner/Headline */}
          <motion.div
            {...fadeInUp}
            className="bg-black text-white p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-xl mb-8 sm:mb-12 border-l-4 sm:border-l-6 border-cyan-400 shadow-lg text-center w-full"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-center">
              AI & M-PESA Transform Kenya's Housing hutting challenge
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed text-center tracking-wide">
              Revolutionary Digital Platform Tackles 200 Billion Shilling House Hunting Challenge
            </p>
          </motion.div>
          {/* Main Content Section - Full Width Centered */}
          <div className="w-full text-center mb-12 sm:mb-16 flex flex-col items-center">
            <motion.div {...fadeInUp} className="mb-8 sm:mb-12 max-w-3xl">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black border-b-4 border-cyan-500 pb-2 sm:pb-3 inline-block">
                BREAKING: The Kenya Housing Revolution Begins
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-relaxed text-gray-800 mb-4 sm:mb-6 font-normal text-center tracking-wide">
                In a groundbreaking initiative, lanova kevin  emerges as the beacon of change in Kenya's real estate 
                landscape. We are building an AI-powered and M-Pesa integrated real estate digital asset web application 
                designed to solve the nation's unprecedented 200 billion shilling house hunting challenge.
              </p>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded mx-auto max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 text-center tracking-wide font-normal">
                  <strong className="text-black text-base sm:text-lg md:text-xl">Our Solution:</strong> A sophisticated system that blends artificial 
                  intelligence, real-time data, and trusted payment automation to eliminate fraud while updating property 
                  listings instantaneously across Kenya's 47 counties.
                </p>
              </div>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-relaxed text-gray-800 mb-6 sm:mb-8 text-center font-normal tracking-wide">
                The statistics are sobering: <strong>70% of Kenyan tenants struggle</strong> with a rental market plagued by 
                systemic inefficiencies. This critical gap has eroded user trust and cost billions annually.
              </p>
            </motion.div>

            {/* Key Problems Section */}
            <motion.div {...fadeInUp} className="mb-8 sm:mb-12 max-w-4xl mx-auto text-center">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black border-b-4 border-red-500 pb-2 sm:pb-3 inline-block">
                The Crisis: Four Critical Challenges
              </h3>

              <div className="space-y-3 sm:space-y-4 text-center">
                {[
                  {
                    num: '1',
                    title: 'Unverified Landlords & Fake Listings',
                    color: 'red',
                  },
                  {
                    num: '2',
                    title: 'Outdated Listings on Platforms like Buyrent Kenya & Jiji',
                    color: 'orange',
                  },
                  {
                    num: '3',
                    title: 'Fraudulent Property Agents',
                    color: 'yellow',
                  },
                  {
                    num: '4',
                    title: 'Poor Data Transparency on House Status (Vacant/Occupied)',
                    color: 'red',
                  },
                ].map((problem, idx) => {
                  const colorMap = {
                    red: 'bg-red-50 border-red-500 text-red-600',
                    orange: 'bg-orange-50 border-orange-500 text-orange-600',
                    yellow: 'bg-yellow-50 border-yellow-500 text-yellow-600',
                  };
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                        className={`${colorMap[problem.color]} border-l-4 p-4 sm:p-5 rounded mx-auto max-w-2xl text-center`}
                      >
                        <div className="flex gap-3 sm:gap-4 items-center justify-center">
                        <span className={`text-xl sm:text-2xl font-bold ${colorMap[problem.color].split(' ')[2]} min-w-fit pt-1`}>
                          #{problem.num}
                        </span>
                        <p className="text-sm sm:text-lg font-semibold text-gray-800">{problem.title}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mt-6 sm:mt-8 italic text-center font-normal tracking-wide">
                <strong>Impact:</strong> This inefficiency erodes user trust and costs billions annually, making innovation not just 
                desirable but essential.
              </p>
            </motion.div>

            {/* Solution Section */}
            <motion.div {...fadeInUp} className="mb-8 sm:mb-12 max-w-4xl mx-auto">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black border-b-4 border-green-500 pb-2 sm:pb-3 inline-block">
                Our Answer: Verified Trust Through Technology
              </h3>

              <div className="bg-green-50 p-6 sm:p-8 rounded-lg border border-green-200 mx-auto max-w-2xl">
                <ul className="space-y-3 sm:space-y-4 text-gray-800 text-center inline-block">
                  <li className="flex gap-2 sm:gap-3 items-center justify-center">
                    <span className="text-green-600 font-bold text-lg sm:text-xl min-w-fit">✓</span>
                    <span className="text-sm sm:text-base"><strong>Verified Landlords & Tenants:</strong> AI-powered identity verification across 47 Kenyan counties</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 items-center justify-center">
                    <span className="text-green-600 font-bold text-lg sm:text-xl min-w-fit">✓</span>
                    <span className="text-sm sm:text-base"><strong>Real-Time Data:</strong> Property listings updated instantly to prevent fraudulent old postings</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 items-center justify-center">
                    <span className="text-green-600 font-bold text-lg sm:text-xl min-w-fit">✓</span>
                    <span className="text-sm sm:text-base"><strong>M-Pesa Integration:</strong> Secure, trusted payment automation eliminating third-party fraud</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 items-center justify-center">
                    <span className="text-green-600 font-bold text-lg sm:text-xl min-w-fit">✓</span>
                    <span className="text-sm sm:text-base"><strong>Full Transparency:</strong> Live property status tracking - know if properties are vacant or occupied</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Three Column Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Founder Card */}
            <motion.div
              {...fadeInUp}
              className="bg-black text-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-lg border border-cyan-400/30 h-full flex flex-col justify-between"
            >
              <div className="flex-1"></div>
              
              <div className="relative w-full aspect-square mb-6 sm:mb-8 rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/mafiathon.png"
                  alt="Founder - Lanova Kevin Koome"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Lanova Kevin Koome</h5>
              
              <div className="text-center mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-cyan-400 uppercase tracking-wide">Founder & Visionary</h4>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 text-center font-normal tracking-wide flex-1">
                Visionary entrepreneur leading the AI-powered transformation of Kenya's real estate sector, 
                connecting 47 counties with verified landlords and tenants.
              </p>

              <div className="border-t border-cyan-400/50 pt-5 sm:pt-6 mt-auto">
                <p className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-2 sm:mb-3 text-center">Leadership Role</p>
                <p className="text-base sm:text-lg font-semibold text-center">Founder & CEO</p>
                <p className="text-xs sm:text-sm text-gray-400 text-center">Aura  stack Kenya</p>
              </div>
            </motion.div>

            {/* Investor Message Card */}
            <motion.div
              {...fadeInUp}
              className="bg-black text-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-lg border border-cyan-400/50 h-full flex flex-col justify-between"
            >
              <div className="flex-1 flex flex-col justify-end mb-6 sm:mb-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                    <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Join the Revolution
                    </span>
                  </h3>
                  <div className="h-1.5 w-20 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8 flex-1 flex flex-col justify-end">
                <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal tracking-wide text-center">
                  We're transforming Kenya's real estate landscape with <span className="text-cyan-300 font-semibold">cutting-edge AI</span> and <span className="text-cyan-300 font-semibold">M-Pesa integration</span>. Industry leaders and prominent business figures have already committed to this vision.
                </p>

                <div className="bg-cyan-500/20 border border-cyan-400/50 p-5 sm:p-6 rounded-lg text-center">
                  <p className="text-lg sm:text-xl font-bold text-cyan-300 mb-3">⚡ Limited Opportunity</p>
                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-normal">
                    <strong>Only 3 investor slots remaining</strong> to close our strategic funding round and accelerate market expansion across Kenya's 47 counties.
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal tracking-wide text-center">
                  Be part of a trusted team solving the <span className="text-yellow-400 font-semibold">200 billion shilling</span> housing crisis while generating significant returns.
                </p>
              </div>

              <a
                href="https://wa.me/254713095009?text=I%20am%20interested%20in%20investing%20in%20Aura%20Global%20Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold py-3 sm:py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg mt-6 sm:mt-8"
              >
                📞 Contact Us Now
              </a>
            </motion.div>

            {/* Executive Leadership Card */}
            <motion.div
              {...fadeInUp}
              className="bg-linear-to-br from-cyan-100 to-blue-100 p-6 sm:p-8 rounded-lg sm:rounded-xl border-2 border-cyan-400 shadow-lg h-full flex flex-col justify-between"
            >
              <div className="relative w-full aspect-square mb-6 sm:mb-8 rounded-lg overflow-hidden bg-gray-800 flex-1">
                <Image
                  src="/kevoh billionaire.jpeg"
                  alt="Chief Executive Officer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              <h5 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 text-center">Leadership Excellence</h5>
              
              <div className="text-center mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-black uppercase tracking-wide">Executive Leadership</h4>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center font-normal tracking-wide">
                Bringing together technology, vision, and execution to revolutionize Kenya's housing market and restore 
                trust in digital real estate platforms.
              </p>
            </motion.div>
          </div>

          {/* Full Width Impact Section */}
          <motion.div
            {...fadeInUp}
            className="bg-linear-to-r from-black via-gray-900 to-black text-white p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-xl mb-8 sm:mb-12 shadow-lg"
          >
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Impact & Vision
              </span>
            </h3>

            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-4xl xs:text-5xl sm:text-6xl font-black mb-2 text-cyan-400">47</p>
                <p className="text-sm sm:text-base font-light text-gray-300">Counties Connected</p>
              </div>
              <div className="text-center">
                <p className="text-4xl xs:text-5xl sm:text-6xl font-black mb-2 text-cyan-400">200B</p>
                <p className="text-sm sm:text-base font-light text-gray-300">Shilling Market Opportunity</p>
              </div>
              <div className="text-center">
                <p className="text-4xl xs:text-5xl sm:text-6xl font-black mb-2 text-cyan-400">70%</p>
                <p className="text-sm sm:text-base font-light text-gray-300">Tenants Struggling Today</p>
              </div>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            {...fadeInUp}
            className="border-t-4 border-b-4 border-black pt-6 sm:pt-8 pb-6 sm:pb-8"
          >
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight text-center">The Future is Verified. The Future is Real-Time.</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto font-light text-center">
              Aura stack is building trust back into Kenya's real estate market. Through AI-powered verification, 
              real-time data, and M-Pesa integration, we are eliminating fraud and creating a transparent ecosystem 
              where landlords and tenants can transact with confidence. The housing revolution has begun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">INNOVATION GAZETTE SPECIAL EDITION</p>
          <p className="text-xs sm:text-sm text-gray-500">© 2026 Aura stack Kenya | Transforming Real Estate Through Technology</p>
        </div>
      </section>
    </main>
  );
}
