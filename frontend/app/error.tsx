'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
          <AlertCircle className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          An unexpected error occurred. You can retry or head back to the home page.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={() => reset()} variant="default" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/" className="gap-2 flex items-center">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
