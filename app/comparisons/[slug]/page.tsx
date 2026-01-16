import { comparisons } from '@/data/comparisons';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8 text-sm text-slate-400">
           <span>{comparison.date}</span>
        </div>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
          {comparison.content}
        </div>
      </div>
    </article>
  );
}
