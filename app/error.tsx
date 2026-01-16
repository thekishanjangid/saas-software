'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 mb-6 max-w-md">
        We apologize for the inconvenience. An unexpected error occurred.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Try again
      </button>
      {process.env.NODE_ENV === 'development' && (
        <pre className="mt-8 p-4 bg-red-50 text-red-600 text-sm text-left rounded-lg overflow-auto max-w-2xl border border-red-100">
          {error.message}
          {error.digest && <div>Digest: {error.digest}</div>}
        </pre>
      )}
    </div>
  );
}
