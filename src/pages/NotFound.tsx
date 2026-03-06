import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
