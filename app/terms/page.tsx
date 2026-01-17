export const metadata = {
  title: 'Terms & Conditions | yoursoftcare',
  description: 'Terms of use for yoursoftcare.',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none text-slate-700">
          <p className="text-sm text-slate-500 mb-8">Last Updated: January 2026</p>

          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using yoursoftcare ("the Site"), you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h3>2. Intellectual Property</h3>
          <p>All content on this site, including text, graphics, logos, and images, is the property of yoursoftcare and is protected by international copyright laws.</p>

          <h3>3. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on yoursoftcare's website for personal, non-commercial transitory viewing only.</p>

          <h3>4. Affiliate Disclosure</h3>
          <p>This site uses affiliate links and may earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>

          <h3>5. Limitations</h3>
          <p>In no event shall yoursoftcare be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on yoursoftcare's website.</p>

          <h3>6. Governing Law</h3>
          <p>Any claim relating to yoursoftcare's website shall be governed by the laws of the main operating jurisdiction without regard to its conflict of law provisions.</p>
          
          <div className="mt-8 pt-8 border-t border-slate-100">
             <p className="text-sm text-slate-500">
                If you have any questions about these Terms, please contact us.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
