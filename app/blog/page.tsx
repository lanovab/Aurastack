'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        const data = await response.json();
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

      {/* Hero Section with CEO Banner */}
      <section className="relative overflow-hidden border-b border-gray-800/50">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-transparent to-blue-500/10 -z-20" />
        
        {/* CEO Exhibition Image Banner */}
        <div 
          className="relative w-full h-96 lg:min-h-screen flex items-center justify-start overflow-hidden"
          style={{ 
            height: 'auto',
            minHeight: 'clamp(24rem, 100vh, 600px)'
          }}
        >
          <img
            src="/ceo lanova  at exh.jpeg"
            alt="CEO Lanova discussing automation leverage at exhibition"
            className="absolute inset-0 w-full h-full object-cover brightness-75 hover:brightness-80 transition-all duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/40 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/70 z-10" />
          
          {/* Shine Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent z-20"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 lg:px-12 py-8 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-400/20 border border-cyan-400/50 rounded-full">
                <p className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">
                  💡 Expert Insights
                </p>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 sm:mb-4 text-white drop-shadow-2xl leading-tight sm:leading-snug">
                AI Tech News
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 drop-shadow-lg font-semibold max-w-2xl leading-relaxed sm:leading-loose">
                Learn how to leverage automation to stabilize revenue and reduce business risk
              </p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="text-cyan-400 text-sm font-bold">Featuring CEO Lanova</span>
                <div className="h-1 w-12 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-black" />
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
              <Link
                href="/admin/blog"
                className="inline-block mt-6 px-6 py-2 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                Admin Panel
              </Link>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-400/60 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-linear-to-br from-cyan-500/10 to-blue-500/10">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-600">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className="text-xs sm:text-sm text-gray-500">By {post.author}</span>
                      <button className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
