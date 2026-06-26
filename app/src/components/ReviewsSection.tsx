'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Use placeholder data directly without async delay
    const placeholderReviews: Review[] = [
      {
        id: '1',
        author: 'PCEA Enchoro Primary School',
        rating: 5,
        text: 'Aura Stack Limited successfully developed our school\'s web application, and we are very pleased with the results. Their team was professional, efficient, and attentive to our needs. The final system is user-friendly, well-designed, and greatly improves how we communicate with parents and manage school information. We highly recommend Aura Stack for dependable and high-quality web development services.',
        date: '2024-12-02',
        avatar: '🏫'
      },
      {
        id: '2',
        author: 'International School of Africa Ecology',
        rating: 5,
        text: 'Aura Stack Limited did an excellent job developing our school website. Their team was professional, creative, and responsive throughout the project. The final website is modern, fast, and well-designed to meet our needs. We highly recommend Aura Stack for reliable and quality web development services.',
        date: '2024-11-25',
        avatar: '🌍'
      },
      {
        id: '3',
        author: 'Gifts House Mika',
        rating: 5,
        text: 'We are pleased to acknowledge the exceptional services provided by Aura Stack Limited in the development of our e-commerce web application. Their team demonstrated outstanding professionalism, technical competence, and a clear understanding of our business model. The delivered platform is secure, visually refined, and remarkably user-friendly, enabling us to streamline our operations and enhance our customers\' shopping experience. Throughout the project, Aura Stack maintained excellent communication, adhered to timelines, and provided valuable insights that elevated the final product. We confidently recommend Aura Stack Limited to any organization seeking reliable, innovative, and high-standard web development services.',
        date: '2024-11-20',
        avatar: '🎁'
      },
      {
        id: '4',
        author: 'Shakir Hardware',
        rating: 5,
        text: 'We are pleased to commend Aura Stack Limited for their exceptional work in developing our web application. Their team demonstrated high professionalism, strong technical expertise, and a clear understanding of our business operations within the hardware sector. The final system is efficient, user-friendly, and designed to support both our customers and internal processes. Throughout the project, Aura Stack maintained excellent communication, delivered within the agreed timelines, and provided valuable guidance that improved the overall outcome. We confidently recommend Aura Stack Limited to any business seeking reliable, well-executed, and innovative web development solutions.',
        date: '2024-11-15',
        avatar: '🔧'
      },
    ];
    
    setReviews(placeholderReviews);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500 text-lg' : 'text-gray-300 text-lg'}>
        ★
      </span>
    ));
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-gray-800/50 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-28 md:mb-36 lg:mb-48 w-full flex flex-col items-center"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-linear-to-r from-cyan-500 to-purple-400 mx-auto mb-6 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
          >
            <span>Customer Reviews</span>
            <span>⭐</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg sm:text-xl md:text-2xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent max-w-3xl mx-auto mb-3 font-semibold text-center"
          >
            What our clients say about us
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-base sm:text-lg bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-medium text-center"
          >
            Real feedback from satisfied customers • Excellence in every project
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-full lg:max-w-7xl">
            {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border-2 border-cyan-400/60 bg-white backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:border-cyan-400/80 p-6 sm:p-7 md:p-8 flex flex-col justify-between h-full"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm sm:text-base mb-6 grow leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="text-3xl sm:text-4xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                        {review.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Google Business Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mt-12 sm:mt-16 md:mt-20"
        >
          <motion.a
            href="https://www.google.com/maps/place/Aura+Stack"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full text-base sm:text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <span>Visit Google Business Profile</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
