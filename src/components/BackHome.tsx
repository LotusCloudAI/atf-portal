import { Link } from "react-router-dom";

export default function BackHome() {
  return (
    <div className="w-full bg-gray-100 py-3 px-6 border-b border-gray-300">
      <Link
        to="/"
        className="text-blue-700 font-semibold hover:underline text-sm"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
