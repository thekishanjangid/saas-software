'use client';

import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Latest Insights & Guides</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert advice on selecting the right tools, avoiding common pitfalls, and optimizing your software stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
            <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                    {post.coverImage ? (
                        <Image 
                            src={post.coverImage} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                            <span className="font-medium">No Image</span>
                        </div>
                    )}
                </div>
                
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        {post.author && <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>}
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>
                    
                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                    
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 font-bold hover:underline flex items-center mt-auto text-sm group/link">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </article>
        ))}
      </div>
    </div>
  );
}
