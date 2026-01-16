import { comparisons } from '@/data/comparisons';
import { reviews } from '@/data/reviews';
import { blogs } from '@/data/blogs'; // Assuming you might want to use this for dynamic blogs later
import { ComparisonsList } from '@/components/ComparisonsList';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle, Shield, TrendingUp, ArrowRight } from 'lucide-react';

// Use this for dynamic blog posts if needed, or keep the static array if preferred
const BLOG_POSTS = blogs.slice(0, 3); 

export const dynamic = 'force-static';

export default function Home() {
  console.log('[Home] Rendering expanded homepage...');
  
  // Take only top 3 reviews
  const featuredReviews = reviews.slice(0, 3);
  const featuredComparisons = comparisons.slice(0, 6); // Limit comparisons if needed

  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New Comparisons Added 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Best Software</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Unbiased, in-depth comparisons to help you make the right choice for your business stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="#comparisons" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
               Browse Comparisons
             </a>
             <a href="#reviews" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all hover:border-slate-300">
               Read Reviews
             </a>
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
           <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Software Reviews</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Deep dives into the most popular tools on the market.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {featuredReviews.length > 0 ? (
                featuredReviews.map((review) => (
                  <div key={review.slug} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-bold text-slate-900">{review.productName}</h3>
                       <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-sm font-bold">
                         <Star className="w-4 h-4 mr-1 fill-green-700" />
                         {review.rating}
                       </div>
                    </div>
                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{review.summary}</p>
                    <Link href={`/reviews/${review.slug}`} className="text-blue-600 font-bold hover:underline flex items-center">
                       Read Full Review <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-slate-500">Coming soon...</div>
              )}
           </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section id="comparisons" className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
           <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Software Comparisons</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Detailed head-to-head battles to settle the score.</p>
           </div>
           <ComparisonsList comparisons={featuredComparisons} />
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <Shield className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Independent Testing</h3>
                 <p className="text-slate-400 leading-relaxed">We pay for our own subscriptions and test software in real-world scenarios. No paid placements.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <CheckCircle className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Transparent Disclosures</h3>
                 <p className="text-slate-400 leading-relaxed">We are supported by our readers. If you click a link, we may earn a commission at no cost to you.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Data-Driven Verdicts</h3>
                 <p className="text-slate-400 leading-relaxed">Our ratings are based on performance, pricing, feature sets, and support quality.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Blog/Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-2">Guides & Insights</h2>
                 <p className="text-slate-600">Expert advice on selecting the right tools.</p>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:underline">
                 View all articles <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                 <article key={post.slug} className="group cursor-pointer">
                    <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                       {post.coverImage ? (
                          <Image 
                             src={post.coverImage} 
                             alt={post.title} 
                             fill 
                             className="object-cover group-hover:scale-105 transition-transform duration-500"
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                       ) : (
                          <div className="absolute inset-0 bg-slate-200 group-hover:bg-blue-50 transition-colors flex items-center justify-center text-slate-400">
                             <span className="text-sm font-medium">No Image</span>
                          </div>
                       )}
                    </div>
                    <div className="text-sm text-blue-600 font-semibold mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                       <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                 </article>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
