import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>
      
      <header className="mb-12 text-center max-w-3xl mx-auto">
         <div className="flex items-center justify-center gap-4 text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider">
             <span>{post.date}</span>
             {post.author && (
                 <>
                    <span className="w-1 h-1 bg-blue-300 rounded-full" />
                    <span>{post.author}</span>
                 </>
             )}
         </div>
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            {post.title}
         </h1>
         <p className="text-xl md:text-2xl text-slate-500 leading-relaxed">
            {post.excerpt}
         </p>
      </header>

      {post.coverImage && (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-16">
            <Image 
                src={post.coverImage} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
            />
        </div>
      )}
      
      <div className="prose prose-slate prose-lg max-w-prose mx-auto prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl prose-img:shadow-lg">
        {post.content}
      </div>
    </article>
  );
}
