import { Mail, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | yoursoftcare',
  description: 'Get in touch with the yoursoftcare team for feedback, suggestions, or partnership inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Contact the <span className="text-blue-600">yoursoftcare</span> Team
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
             Have a question, suggestion, or partnership inquiry? We’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Content & Trust */}
          <div className="flex flex-col gap-10">
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <MessageSquare className="w-6 h-6 text-blue-600" />
                   Why Reach Out?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Feedback on Reviews</h3>
                      <p className="text-slate-600 text-sm">Spotted a mistake or want to share your experience with a tool?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Software Suggestions</h3>
                      <p className="text-slate-600 text-sm">Know a great SaaS tool we should review? Let us know!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Partnerships</h3>
                      <p className="text-slate-600 text-sm">Media inquiries and potential collaborations.</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-2">Direct Email</h3>
                   <p className="text-blue-100 mb-6">Prefer email? No problem.</p>
                   <a href="mailto:hello@yoursoftcare.com" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <Mail className="w-4 h-4" /> hello@yoursoftcare.com
                   </a>
                   <p className="mt-6 text-xs text-blue-200 opacity-80">
                      We typically respond within 24–48 hours.
                   </p>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
             </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                   <input 
                     type="text" 
                     className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                     placeholder="John Doe" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                   <input 
                     type="email" 
                     className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                     placeholder="john@example.com" 
                   />
                 </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-600">
                  <option>General Inquiry</option>
                  <option>Feedback / Correction</option>
                  <option>Software Suggestion</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-40 resize-none transition-all placeholder:text-slate-400" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Send Message
              </button>
              
              <p className="text-xs text-center text-slate-400">
                 By sending this message, you agree to our <Link href="/privacy" className="underline hover:text-slate-600">Privacy Policy</Link>.
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
