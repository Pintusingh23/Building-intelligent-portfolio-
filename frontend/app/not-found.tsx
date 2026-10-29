import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
        <p className="text-sm text-muted-foreground mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
