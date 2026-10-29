'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-border rounded-2xl p-8 text-center bg-card shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Critical Application Error</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A critical error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Reload application
          </button>
        </div>
      </body>
    </html>
  );
}
