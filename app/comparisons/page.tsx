import Link from 'next/link';
import { comparisons } from '@/data/comparisons';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { LogoImage } from '@/components/LogoImage';

export const metadata = {
  title: 'Software Comparisons | yoursoftcare',
  description: 'Head-to-head comparisons of the best SaaS tools. Find the right software for your needs.',
};

export default function AllComparisonsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
            <BarChart2 className="w-4 h-4" />
            Head-to-Head
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Comparisons</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Detailed side-by-side comparisons to help you choose the right tool. We test both products so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/comparisons/${comparison.slug}`}
              className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all overflow-hidden"
            >
              {/* VS Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 p-6">
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <LogoImage productName={comparison.productA} size={48} className="mx-auto mb-2 shadow-sm" />
                    <span className="text-slate-700 font-medium text-sm">{comparison.productA}</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                      VS
                    </div>
                  </div>

                  <div className="text-center">
                    <LogoImage productName={comparison.productB} size={48} className="mx-auto mb-2 shadow-sm" />
                    <span className="text-slate-700 font-medium text-sm">{comparison.productB}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {comparison.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {comparison.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{comparison.date}</span>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can&apos;t find the comparison you need?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Check out our in-depth reviews or contact us to request a specific comparison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reviews"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
            >
              Browse Reviews
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              Request Comparison
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
