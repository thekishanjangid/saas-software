import { Microscope, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'How We Review Software | SaaSReviewPro',
  description: 'Our rigorous testing methodology for SaaS tools.',
};

export default function HowWeReviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">How We Review</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
          <div className="flex items-center gap-4 mb-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <Microscope className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
               <h3 className="font-bold text-slate-900 text-lg m-0">Our Testing Lab</h3>
               <p className="text-slate-600 m-0 text-sm">We don't just read the website. We sign up, log in, and use the tools.</p>
            </div>
          </div>

          <p className="lead text-lg text-slate-600 mb-8">
            Choosing software is hard. Vendor marketing often overpromises. Our goal is to cut through the noise and tell you what it's really like to use these platforms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Evaluation Criteria</h2>
          <p className="text-slate-700">
            We score every tool on five key dimensions:
          </p>
          <ul className="space-y-4 list-none pl-0 mt-4">
            <li className="flex items-start gap-3">
               <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm w-32 shrink-0">1. Usability</span>
               <span className="text-slate-600">Is the interface intuitive? Can a beginner get started without a manual?</span>
            </li>
            <li className="flex items-start gap-3">
               <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm w-32 shrink-0">2. Features</span>
               <span className="text-slate-600">Does it do what it claims? Are the features deep or shallow?</span>
            </li>
            <li className="flex items-start gap-3">
               <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm w-32 shrink-0">3. Pricing</span>
               <span className="text-slate-600">Is it good value for money? Are there hidden costs?</span>
            </li>
            <li className="flex items-start gap-3">
               <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm w-32 shrink-0">4. Support</span>
               <span className="text-slate-600">How responsive is the customer team? Is the documentation good?</span>
            </li>
            <li className="flex items-start gap-3">
               <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm w-32 shrink-0">5. Reliability</span>
               <span className="text-slate-600">Is the uptime good? Is the platform secure?</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
             <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="flex items-center gap-2 font-bold text-green-800 mb-2">
                   <CheckCircle className="w-4 h-4" /> Good Stuff
                </h4>
                <p className="text-sm text-green-700">We highlight unique strengths and "Aha!" moments.</p>
             </div>
             <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="flex items-center gap-2 font-bold text-red-800 mb-2">
                   <XCircle className="w-4 h-4" /> The Bad
                </h4>
                <p className="text-sm text-red-700">We don't shy away from pointing out bugs, lag, or poor UX.</p>
             </div>
          </div>
          
          <p className="text-slate-700 italic">
             Our final score is an editorial opinion based on this structured analysis.
          </p>

        </div>
      </div>
    </div>
  );
}
