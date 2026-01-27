import { reviews } from '@/data/reviews';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Star,
  ArrowLeft,
  ExternalLink,
  Check,
  X,
  Clock,
  Calendar,
  Tag,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export const dynamicParams = false;

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    notFound();
  }

  // Get related reviews (same category, excluding current)
  const relatedReviews = reviews
    .filter((r) => r.category === review.category && r.slug !== review.slug)
    .slice(0, 2);

  // If not enough related in same category, fill with others
  const otherReviews = relatedReviews.length < 2
    ? reviews.filter((r) => r.slug !== review.slug && !relatedReviews.includes(r)).slice(0, 2 - relatedReviews.length)
    : [];

  const allRelated = [...relatedReviews, ...otherReviews];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/reviews"
            className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Reviews
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                <Tag className="w-3 h-3" />
                {review.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {review.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              {review.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
              {review.description}
            </p>

            {/* Rating and CTA Row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Rating */}
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(review.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : i < review.rating
                          ? 'text-yellow-400 fill-yellow-400/50'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-slate-900">{review.rating}</span>
                <span className="text-slate-400">/5.0</span>
              </div>

              {/* CTA Button */}
              <a
                href={review.websiteUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm"
              >
                Visit {review.productName}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Content Area */}
          <main className="lg:col-span-8">
            {/* Quick Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Quick Summary
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">{review.summary}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Pros */}
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-700" />
                    </span>
                    What We Liked
                  </h3>
                  <ul className="space-y-2">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700 text-sm">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-red-700" />
                    </span>
                    Could Be Better
                  </h3>
                  <ul className="space-y-2">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700 text-sm">
                        <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Review Content */}
            <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700 prose-li:text-slate-600 prose-strong:text-slate-900 prose-img:rounded-xl">
                {review.content}
              </div>
            </article>

            {/* Related Reviews */}
            {allRelated.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Reviews</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {allRelated.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/reviews/${related.slug}`}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">
                          {related.productName.charAt(0)}
                        </div>
                        <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold">
                          <Star className="w-3 h-3 mr-1 fill-green-700" />
                          {related.rating}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {related.productName}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">{related.category}</p>
                      <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        Read Review <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* Product Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {review.productName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{review.productName}</h3>
                    <p className="text-sm text-slate-500">{review.category}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Our Rating</span>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-slate-900">{review.rating}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Category</span>
                    <span className="font-medium text-slate-900">{review.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Last Updated</span>
                    <span className="font-medium text-slate-900">{review.date}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={review.websiteUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors w-full"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-xs text-slate-400 text-center mt-3">
                  We may earn a commission through this link
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm">Explore More</h4>
                <div className="space-y-2">
                  <Link
                    href="/reviews"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2"
                  >
                    <span>All Reviews</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/comparisons"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2"
                  >
                    <span>Comparisons</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2"
                  >
                    <span>Guides & Tips</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50">
        <a
          href={review.websiteUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full"
        >
          Visit {review.productName}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
