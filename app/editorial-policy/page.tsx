import Link from 'next/link';
import { ShieldCheck, Scale, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Editorial Policy | SaaSReviewPro',
  description: 'Our commitment to unbiased, independent, and transparent software reviews.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">Editorial Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-8">
            At SaaSReviewPro, our mission is to help you find the best software for your business. We believe that trust is our most valuable asset. This policy outlines our standards for independence, accuracy, and transparency.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-10 not-prose">
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <ShieldCheck className="w-8 h-8 mx-auto text-blue-600 mb-3" />
               <h3 className="font-bold text-slate-900 mb-2">Independent Research</h3>
               <p className="text-sm text-slate-500">Our reviews are based on actual testing and rigorous analysis.</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <Scale className="w-8 h-8 mx-auto text-blue-600 mb-3" />
               <h3 className="font-bold text-slate-900 mb-2">Unbiased Analysis</h3>
               <p className="text-sm text-slate-500">We highlight both pros and cons. No software is perfect.</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <DollarSign className="w-8 h-8 mx-auto text-blue-600 mb-3" />
               <h3 className="font-bold text-slate-900 mb-2">Transparency</h3>
               <p className="text-sm text-slate-500">We clearly disclose how we make money.</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Principles</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
             <li><strong>No Paid Reviews:</strong> We do not accept payment from software companies to write favorable reviews. Our opinions are our own.</li>
             <li><strong>Fact-Checked:</strong> We strive for accuracy in pricing, features, and specifications. If we make a mistake, we correct it.</li>
             <li><strong>User-Centric:</strong> We write for the user, not the vendor. We prioritize ease of use, value, and support quality in our assessments.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Affiliate Disclosure</h2>
          <p className="text-slate-700">
             To keep our content free, we may earn a commission when you click on links to some of the products we review. This never influences our editorial content or ratings. <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">Read our full Affiliate Disclosure</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Corrections & Updates</h2>
          <p className="text-slate-700">
             Software changes fast. If you spot outdated information, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>. We regularly update our content to ensure it remains relevant and accurate.
          </p>

        </div>
      </div>
    </div>
  );
}
