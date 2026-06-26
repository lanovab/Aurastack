'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    category: 'AI & Automation',
    author: 'Aura Stack',
  });

  // Admin password check
  useEffect(() => {
    const savedPassword = localStorage.getItem('aurastack_admin_verified');
    if (savedPassword === 'true') {
      setIsPasswordCorrect(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password verification (change to your actual password)
    if (password === 'aurastack123') {
      setIsPasswordCorrect(true);
      localStorage.setItem('aurastack_admin_verified', 'true');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
    }
  };

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

  useEffect(() => {
    if (isPasswordCorrect) {
      fetchPosts();
    }
  }, [isPasswordCorrect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        // Update existing post
        const response = await fetch(`/api/blog/posts/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          fetchPosts();
          setEditingId(null);
          setShowForm(false);
          setFormData({
            title: '',
            description: '',
            content: '',
            image: '',
            category: 'AI & Automation',
            author: 'Aura Stack',
          });
        }
      } else {
        // Create new post
        const response = await fetch('/api/blog/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          fetchPosts();
          setShowForm(false);
          setFormData({
            title: '',
            description: '',
            content: '',
            image: '',
            category: 'AI & Automation',
            author: 'Aura Stack',
          });
        }
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      description: post.description,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
    });
    setEditingId(post.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' });
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      content: '',
      image: '',
      category: 'AI & Automation',
      author: 'Aura Stack',
    });
  };

  // Password screen
  if (!isPasswordCorrect) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-black mb-2 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-gray-400 mb-8">AI Tech News Management</p>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500"
                  placeholder="Enter admin password"
                />
                {passwordError && <p className="text-red-400 text-sm mt-2">{passwordError}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                Access Admin Panel
              </button>
            </form>

            <Link href="/" className="block text-center mt-6 text-cyan-400 hover:text-cyan-300 text-sm">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  // Admin dashboard
  return (
    <main className="bg-black text-white min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-gray-800/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-gray-400 text-sm mt-1">AI Tech News Management</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(!showForm)}
                className="px-6 py-2 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                {showForm ? 'Cancel' : '+ New Post'}
              </button>
              <Link
                href="/blog"
                className="px-4 py-2 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
              >
                View Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* New/Edit Post Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-8 bg-slate-900/50 border border-cyan-400/30 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                    placeholder="Post title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  >
                    <option>AI & Automation</option>
                    <option>Business Solutions</option>
                    <option>Technology Trends</option>
                    <option>News</option>
                    <option>Updates</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  placeholder="Short description"
                  rows={2}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  placeholder="Full post content"
                  rows={8}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                  placeholder="https://example.com/image.jpg"
                />
                {formData.image && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Preview:</p>
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="max-w-xs h-40 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                >
                  {editingId ? 'Update Post' : 'Publish Post'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-400 font-bold rounded-lg hover:bg-gray-900/50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Posts List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Posts ({posts.length})</h2>
          {loading ? (
            <p className="text-gray-400">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-400">No posts yet. Create your first post!</p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold">{post.title}</h3>
                          <p className="text-sm text-gray-400">{post.date}</p>
                        </div>
                        <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{post.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded hover:bg-blue-500/30 transition-all"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="px-4 py-2 bg-red-500/20 text-red-400 text-sm font-semibold rounded hover:bg-red-500/30 transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
