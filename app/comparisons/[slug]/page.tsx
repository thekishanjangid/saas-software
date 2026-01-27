import { comparisons } from '@/data/comparisons';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { LogoImage } from '@/components/LogoImage';

export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export const dynamicParams = false;

interface ComparisonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  // Get related comparisons (excluding current)
  const relatedComparisons = comparisons
    .filter((c) => c.slug !== comparison.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/comparisons"
            className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Comparisons
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {comparison.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                <Clock className="w-3.5 h-3.5" />
                10 min read
              </span>
            </div>

            {/* VS Display */}
            <div className="flex items-center gap-5 mb-8">
              <div className="flex items-center gap-3">
                <LogoImage productName={comparison.productA} size={56} className="shadow-md" />
                <span className="text-xl font-bold text-slate-900">{comparison.productA}</span>
              </div>

              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                VS
              </div>

              <div className="flex items-center gap-3">
                <LogoImage productName={comparison.productB} size={56} className="shadow-md" />
                <span className="text-xl font-bold text-slate-900">{comparison.productB}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              {comparison.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {comparison.description}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Content Area */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700 prose-li:text-slate-600 prose-strong:text-slate-900 prose-img:rounded-xl">
                {comparison.content}
              </div>
            </article>

            {/* Related Comparisons */}
            {relatedComparisons.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">More Comparisons</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedComparisons.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/comparisons/${related.slug}`}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <LogoImage productName={related.productA} size={32} className="shadow-sm" />
                          <span className="text-xs font-medium text-slate-400">vs</span>
                          <LogoImage productName={related.productB} size={32} className="shadow-sm" />
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        Read Comparison <ChevronRight className="w-4 h-4" />
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
              {/* Quick Summary Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">Quick Summary</h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <LogoImage productName={comparison.productA} size={40} className="shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 text-sm">{comparison.productA}</span>
                      <p className="text-xs text-slate-600 mt-0.5">Best for ease of use and quick setup</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <LogoImage productName={comparison.productB} size={40} className="shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 text-sm">{comparison.productB}</span>
                      <p className="text-xs text-slate-600 mt-0.5">Best for advanced features and scale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm">Explore More</h4>
                <div className="space-y-1">
                  <Link
                    href="/comparisons"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-slate-50"
                  >
                    <span>All Comparisons</span>
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
                    href="/blog"
                    className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm py-2.5 px-3 rounded-lg hover:bg-slate-50"
                  >
                    <span>Guides & Tips</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-2">Need help deciding?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Check out our detailed reviews for more insights.
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
