import { Link } from "react-router-dom";

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-[70vh] bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Back to Home */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-[#1E3A8A] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1E3A8A]">
          {title}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          {children}
        </div>

      </div>
    </div>
  );
}