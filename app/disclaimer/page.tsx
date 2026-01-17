export const metadata = {
  title: 'Disclaimer | SaaSReviewPro',
  description: 'Legal disclaimer and accuracy statement.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 text-center">Disclaimer</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none text-slate-700">
          
          <h3>General Information Only</h3>
          <p>
            The information provided by SaaSReviewPro ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h3>No Professional Advice</h3>
          <p>
            The Site cannot and does not contain professional financial, legal, or technology advice. The information is provided for general educational and entertainment purposes only and is not a substitute for professional advice.
          </p>

          <h3>External Links Disclaimer</h3>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h3>Affiliate Disclaimer</h3>
          <p>
            This website may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. 
          </p>

          <h3>Errors and Omissions</h3>
          <p>
            While we strive to keep information up to date, software pricing, features, and policies change frequently. We assume no responsibility for errors or omissions in the contents on the Service.
          </p>

        </div>
      </div>
    </div>
  );
}
