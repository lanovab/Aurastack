import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), 'public', 'blog-posts.json');

// Ensure posts file exists
function ensurePostsFile() {
  if (!fs.existsSync(POSTS_FILE)) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify([]));
  }
}

function getPosts() {
  ensurePostsFile();
  const data = fs.readFileSync(POSTS_FILE, 'utf-8');
  return JSON.parse(data || '[]');
}

function savePosts(posts: any[]) {
  ensurePostsFile();
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
}

// GET all posts or POST new post
export async function GET() {
  try {
    const posts = getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const posts = getPosts();

    const newPost = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      content: body.content,
      image: body.image,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: body.author || 'Aura Stack',
      category: body.category || 'AI & Automation',
    };

    posts.unshift(newPost);
    savePosts(posts);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
