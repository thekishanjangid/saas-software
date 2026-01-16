import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xs">S</div>
               <span className="font-bold text-lg text-slate-900">SaaSReviewPro</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Helping businesses find the best software tools. Unbiased reviews, in-depth comparisons, and expert verdicts for B2B SaaS.
            </p>
            <p className="text-slate-400 text-xs mt-4 italic">
              This site contains affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-slate-600 hover:text-blue-600 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/reviews/hr" className="text-slate-600 hover:text-blue-600 transition-colors">HR Software</Link></li>
              <li><Link href="/reviews/crm" className="text-slate-600 hover:text-blue-600 transition-colors">CRM Software</Link></li>
              <li><Link href="/reviews/project-management" className="text-slate-600 hover:text-blue-600 transition-colors">Project Management</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} SaaSReviewPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
