import { reviews } from '@/data/reviews';
import { notFound } from 'next/navigation';
import { Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>
      
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
             <div className="flex items-center gap-3">
               <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
                 {review.category}
               </span>
               <span className="text-slate-400 text-sm">{review.date}</span>
             </div>
             <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-lg text-green-700 font-bold text-lg self-start md:self-auto">
                <Star className="w-5 h-5 mr-1.5 fill-green-700" />
                {review.rating}/5.0
             </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
          {review.content}
        </div>
      </div>
    </article>
  );
}
