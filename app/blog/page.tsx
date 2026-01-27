import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | yoursoftcare',
  description: 'Expert advice on selecting the right tools, avoiding common pitfalls, and optimizing your software stack.',
};

export default function BlogIndexPage() {
  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
            <BookOpen className="w-4 h-4" />
            Insights & Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Articles</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Expert advice on selecting the right tools, avoiding common pitfalls, and optimizing your software stack.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-6xl">
        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 mb-12"
          >
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="aspect-[16/10] md:aspect-auto md:h-full bg-slate-100 relative overflow-hidden">
                {featuredPost.coverImage ? (
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-blue-300" />
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4 w-fit border border-blue-100">
                  Featured Article
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                  </span>
                  {featuredPost.author && (
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> {featuredPost.author}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Other Posts Grid */}
        {otherPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-slate-300" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    {post.author && (
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-600 mb-5 flex-grow line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for software recommendations?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Check out our in-depth reviews and comparisons to find the perfect tools for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reviews"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
            >
              Browse Reviews
            </Link>
            <Link
              href="/comparisons"
              className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              View Comparisons
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
