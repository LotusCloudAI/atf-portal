import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ABOUT */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            American Telugu Federation
          </h3>
          <p className="text-sm text-gray-400">
            Building culture, community, and connections across generations.
          </p>

          {/* FOLLOW US – ADDED FOR YOUTUBE VERIFICATION */}
          <div className="mt-4">
            <p className="text-white font-semibold text-sm mb-1">
              Follow Us
            </p>
            <a
              href="https://www.youtube.com/@AmericanTeluguFederation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-sm"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/membership" className="hover:text-white">Membership</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/media" className="hover:text-white">Media</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 className="text-white font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/policies/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/policies/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/policies/refund" className="hover:text-white">Refund Policy</Link></li>
            <li><Link to="/policies/delivery" className="hover:text-white">Delivery Policy</Link></li>
            <li><Link to="/policies/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/policies/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} American Telugu Federation. All rights reserved.
      </div>
    </footer>
  );
}
