"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Comparison {
  slug: string;
  title: string;
  description: string;
  [key: string]: any;
}

interface ComparisonsListProps {
  comparisons: Comparison[];
}

export function ComparisonsList({ comparisons }: ComparisonsListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {comparisons.length > 0 ? (
        comparisons.map((comp) => (
          <motion.div key={comp.slug} variants={item}>
            <Link href={`/comparisons/${comp.slug}`} className="group block bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {comp.title}
                </h2>
                <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                  {comp.description}
                </p>
              </div>
              <span className="text-blue-600 font-bold flex items-center gap-2 mt-auto">
                Read Comparison <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-12 text-slate-500">
          No comparisons found. Check back soon!
        </div>
      )}
    </motion.div>
  );
}
