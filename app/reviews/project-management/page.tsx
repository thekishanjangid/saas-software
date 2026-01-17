import Link from 'next/link';
import { reviews } from '@/data/reviews';
import { Star, ArrowRight, Kanban } from 'lucide-react';

export const metadata = {
  title: 'Best Project Management Software Reviews | yoursoftcare',
  description: 'In-depth reviews of top project management tools including Monday.com, Asana, and more.',
};

export default function PMReviewsPage() {
  const pmReviews = reviews.filter(r => r.category === 'Project Management');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6 border border-purple-100">
             <Kanban className="w-4 h-4" />
             Productivity
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Best <span className="text-purple-600">Project Management</span> Tools
           </h1>
           <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
             Keep your team aligned and on track. We test the best project management software for workflows of all sizes.
           </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {pmReviews.length > 0 ? pmReviews.map((software) => (
             <div key={software.slug} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full overflow-hidden group">
                <div className="p-6 flex flex-col h-full">
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-xl">
                            {software.productName.charAt(0)}
                         </div>
                         <div>
                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-purple-600 transition-colors">{software.productName}</h3>
                            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{software.category}</span>
                         </div>
                      </div>
                      <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-sm font-bold">
                         <Star className="w-3.5 h-3.5 mr-1 fill-green-700" />
                         {software.rating}
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {software.summary}
                   </p>
                   <div className="flex flex-col gap-3 mt-auto">
                      <Link 
                        href={`/reviews/${software.slug}`}
                        className="w-full bg-white text-slate-700 font-bold py-2.5 rounded-lg border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all"
                      >
                         Read Review <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </div>
             </div>
           )) : (
             <div className="col-span-full text-center py-10 text-slate-500">
               No reviews found in this category yet. Check back soon!
             </div>
           )}
        </div>
      </section>
    </div>
  );
}
