import { Shield, Users, Trophy } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About yoursoftcare</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are dedicated to helping businesses find the perfect software solutions through unbiased testing and in-depth reviews.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              The software landscape is crowded and confusing. Our mission is simple: to provide clear, honest, and comprehensive reviews of B2B SaaS tools so you can make informed decisions without the marketing fluff.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8 border-y border-slate-100 py-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Unbiased</h3>
              <p className="text-sm text-slate-500">We don't accept payment for positive reviews.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-sm text-slate-500">Reviews written by real software users.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Quality First</h3>
              <p className="text-sm text-slate-500">We test tools extensively before rating.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
