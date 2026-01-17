import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Image 
                 src="/assets/logo.png" 
                 alt="yoursoftcare logo" 
                 width={180} 
                 height={70} 
                 className="w-auto h-42 object-contain"
               />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Helping businesses find the best software tools. Unbiased reviews, in-depth comparisons, and expert verdicts for B2B SaaS.
            </p>
            <div className="flex gap-4">
               {/* Twitter/X Icon */}
               <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Follow us on X">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </a>
               {/* Instagram Icon */}
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Follow us on Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/editorial-policy" className="text-slate-600 hover:text-blue-600 transition-colors">Editorial Policy</Link></li>
              <li><Link href="/how-we-review" className="text-slate-600 hover:text-blue-600 transition-colors">How We Review</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/comparisons" className="text-slate-600 hover:text-blue-600 transition-colors">Comparisons</Link></li>
              <li><Link href="/reviews" className="text-slate-600 hover:text-blue-600 transition-colors">Browse Reviews</Link></li>
              <li><Link href="/explore" className="text-slate-600 hover:text-blue-600 transition-colors">Explore SaaS</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-600 hover:text-blue-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-slate-600 hover:text-blue-600 transition-colors">Disclaimer</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-slate-600 hover:text-blue-600 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} yoursoftcare. All rights reserved.</p>
          <div className="flex gap-4">
             <span>Made with ❤️ for SaaS Founders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
