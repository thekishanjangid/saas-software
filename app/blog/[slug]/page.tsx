import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar, Clock, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';
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

  // Get related posts (excluding current)
  const relatedPosts = blogs.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              {post.author && (
                <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0 pt-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Content Area */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700 prose-li:text-slate-600 prose-strong:text-slate-900 prose-img:rounded-xl prose-img:shadow-lg">
                {post.content}
              </div>
            </article>

            {/* Author Card */}
            {post.author && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Written by {post.author}</h3>
                    <p className="text-sm text-slate-500">Software Reviewer at yoursoftcare</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Continue Reading</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                    >
                      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                        {related.coverImage ? (
                          <Image
                            src={related.coverImage}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-slate-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-slate-400 mb-2 block">{related.date}</span>
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                          {related.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* Share Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">About this article</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Published</span>
                    <span className="font-medium text-slate-900">{post.date}</span>
                  </div>
                  {post.author && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Author</span>
                      <span className="font-medium text-slate-900">{post.author}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Reading time</span>
                    <span className="font-medium text-slate-900">5 min</span>
                  </div>
                </div>
              </div>

              {/* Navigation Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm">Explore More</h4>
                <div className="space-y-1">
                  <Link
                    href="/blog"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-slate-50"
                  >
                    <span>All Articles</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/reviews"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-slate-50"
                  >
                    <span>Software Reviews</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/comparisons"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-slate-50"
                  >
                    <span>Comparisons</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-2">Find the right software</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Check out our detailed reviews to make informed decisions.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm w-full justify-center"
                >
                  Browse Reviews
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
