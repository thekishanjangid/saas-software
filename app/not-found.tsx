import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-slate-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        Could not find the requested resource. It might have been moved or deleted.
      </p>
      <Link 
        href="/"
        className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
