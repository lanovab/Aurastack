import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), 'public', 'blog-posts.json');

function getPosts() {
  const data = fs.readFileSync(POSTS_FILE, 'utf-8');
  return JSON.parse(data || '[]');
}

function savePosts(posts: any[]) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
}

// GET, PUT, DELETE single post
export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const posts = getPosts();

    const postIndex = posts.findIndex((p: any) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    posts[postIndex] = {
      ...posts[postIndex],
      title: body.title,
      description: body.description,
      content: body.content,
      image: body.image,
      category: body.category,
    };

    savePosts(posts);
    return NextResponse.json(posts[postIndex]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const posts = getPosts();

    const filteredPosts = posts.filter((p: any) => p.id !== id);
    savePosts(filteredPosts);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
