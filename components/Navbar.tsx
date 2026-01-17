'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, Rocket, BarChart2, BookOpen, Info, Mail } from 'lucide-react';
import { clsx } from 'clsx';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">SaaSReviewPro</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Reviews Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2">
              Reviews <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 z-50">
               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Categories</div>
                 <Link href="/reviews" className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg group/item">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 group-hover/item:text-blue-700">
                       <Rocket className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600">All Reviews</div>
                        <div className="text-xs text-slate-500">Browse all software</div>
                    </div>
                 </Link>
                 <Link href="/reviews/payroll" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">Payroll Software</Link>
                 <Link href="/reviews/crm" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">CRM Software</Link>
                 <Link href="/reviews/project-management" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">Project Management</Link>
                 <Link href="/reviews/marketing" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">Marketing Tools</Link>
               </div>
            </div>
          </div>

          {/* Comparisons Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2">
              Comparisons <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 z-50">
               <div className="flex flex-col gap-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Explore</div>
                  <Link href="/comparisons" className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg group/item">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 group-hover/item:text-purple-700">
                       <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-700 group-hover/item:text-purple-600">All Comparisons</div>
                        <div className="text-xs text-slate-500">Head-to-head battles</div>
                    </div>
                 </Link>
                 <div className="h-px bg-slate-100 my-1"></div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Popular</div>
                 <Link href="/comparisons/hubspot-vs-salesforce" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">HubSpot vs Salesforce</Link>
               </div>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2">
              Blog <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 z-50">
               <div className="flex flex-col gap-2">
                  <Link href="/blog" className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg group/item">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 group-hover/item:text-green-700">
                       <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-700 group-hover/item:text-green-600">Latest Guides</div>
                        <div className="text-xs text-slate-500">Expert tips & advice</div>
                    </div>
                 </Link>
                 <Link href="/blog" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">Buying Guides</Link>
                 <Link href="/blog" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">SaaS Insights</Link>
               </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2">
              About <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 w-56 bg-white border border-slate-200 shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 z-50">
               <div className="flex flex-col gap-2">
                  <Link href="/about" className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg group/item">
                    <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center text-indigo-600 group-hover/item:text-indigo-700">
                       <Info className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-700 group-hover/item:text-indigo-600">About Us</div>
                        <div className="text-xs text-slate-500">Our mission & team</div>
                    </div>
                 </Link>
                 <Link href="/about" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">How We Review</Link>
                 <Link href="/affiliate-disclosure" className="block px-2 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded">Editorial Policy</Link>
               </div>
            </div>
          </div>

          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>

          {/* Affiliate Disclosure (Desktop) */}
          <div className="group relative">
             <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors py-2 flex items-center gap-1 cursor-help">
               Affiliate Disclosure
             </button>
             <div className="absolute top-full right-0 w-64 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 z-50">
               <p className="mb-2 leading-relaxed">We may earn a commission from affiliate links at no extra cost to you.</p>
               <Link href="/affiliate-disclosure" className="underline hover:text-blue-300">Read Policy</Link>
             </div>
          </div>

          {/* Explore CTA */}
          <Link href="/explore" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow hover:shadow-lg hover:-translate-y-0.5 ml-2">
            Explore SaaS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={clsx(
        "fixed inset-0 top-16 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out border-t border-slate-100 overflow-y-auto pb-20",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
         <div className="container mx-auto px-4 py-8 flex flex-col gap-8">

            <div className="pb-4 border-b border-slate-100">
               <Link href="/explore" onClick={closeMobileMenu} className="w-full block text-center bg-blue-600 text-white px-5 py-3 rounded-xl text-lg font-bold shadow-md hover:bg-blue-700 transition-colors">
                  Explore SaaS
               </Link>
            </div>
            
            {/* Mobile Reviews section */}
            <div className="space-y-4">
               <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-600" /> Reviews
               </h3>
               <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                  <Link href="/reviews" onClick={closeMobileMenu} className="text-slate-600 font-medium py-2">All Reviews</Link>
                  <Link href="/reviews/payroll" onClick={closeMobileMenu} className="text-slate-500 py-1">Payroll Software</Link>
                  <Link href="/reviews/crm" onClick={closeMobileMenu} className="text-slate-500 py-1">CRM Software</Link>
                  <Link href="/reviews/project-management" onClick={closeMobileMenu} className="text-slate-500 py-1">Project Management</Link>
                  <Link href="/reviews/marketing" onClick={closeMobileMenu} className="text-slate-500 py-1">Marketing Tools</Link>
               </div>
            </div>

            {/* Mobile Comparisons section */}
            <div className="space-y-4">
               <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-purple-600" /> Comparisons
               </h3>
               <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                  <Link href="/comparisons" onClick={closeMobileMenu} className="text-slate-600 font-medium py-2">All Comparisons</Link>
                  <Link href="/comparisons/hubspot-vs-salesforce" onClick={closeMobileMenu} className="text-slate-500 py-1">HubSpot vs Salesforce</Link>
               </div>
            </div>

            {/* Mobile Blog section */}
            <div className="space-y-4">
               <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" /> Blog
               </h3>
               <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                  <Link href="/blog" onClick={closeMobileMenu} className="text-slate-600 font-medium py-2">Latest Guides</Link>
                  <Link href="/blog" onClick={closeMobileMenu} className="text-slate-500 py-1">Buying Guides</Link>
                  <Link href="/blog" onClick={closeMobileMenu} className="text-slate-500 py-1">SaaS Insights</Link>
               </div>
            </div>

             {/* Mobile About/Contact section */}
             <div className="space-y-4">
               <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-600" /> Company
               </h3>
               <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                  <Link href="/about" onClick={closeMobileMenu} className="text-slate-600 font-medium py-2">About Us</Link>
                  <Link href="/about" onClick={closeMobileMenu} className="text-slate-500 py-1">How We Review</Link>
                  <Link href="/about" onClick={closeMobileMenu} className="text-slate-500 py-1">How We Review</Link>
                  <Link href="/affiliate-disclosure" onClick={closeMobileMenu} className="text-slate-500 py-1">Affiliate Disclosure</Link>
                  <Link href="/contact" onClick={closeMobileMenu} className="text-slate-600 font-medium py-2 flex items-center gap-2">
                     <Mail className="w-4 h-4" /> Contact
                  </Link>
               </div>
            </div>

         </div>
      </div>
    </nav>
  );
}

