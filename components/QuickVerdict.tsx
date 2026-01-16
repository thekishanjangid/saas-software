import { Check, X, Star, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface QuickVerdictProps {
  productName: string;
  rating: number; // 0 to 5
  summary: string;
  pros: string[];
  cons: string[];
  websiteUrl: string;
  className?: string;
}

export function QuickVerdict({
  productName,
  rating,
  summary,
  pros,
  cons,
  websiteUrl,
  className,
}: QuickVerdictProps) {
  return (
    <div className={twMerge("bg-white border text-foreground border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm my-8", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            The Verdict: {productName}
          </h2>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={clsx(
                  "w-5 h-5",
                  i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
                )}
              />
            ))}
            <span className="text-slate-600 font-medium ml-2">{rating}/5.0</span>
          </div>
        </div>
        <a
          href={websiteUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
        >
          Visit Website <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="text-slate-600 mb-6 leading-relaxed">{summary}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-5 rounded-xl border border-green-100">
          <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span className="bg-green-200 p-1 rounded-full"><Check className="w-3 h-3 text-green-700" /></span>
             Pros
          </h3>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-700 text-sm">
                 <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                 <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-xl border border-red-100">
          <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
             <span className="bg-red-200 p-1 rounded-full"><X className="w-3 h-3 text-red-700" /></span>
             Cons
          </h3>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-700 text-sm">
                 <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                 <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
