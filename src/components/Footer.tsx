import React from "react";
import { MagnifyingGlassIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Desktop Layout */}
        <div className="hidden items-center justify-between border-b border-gray-700 pb-4 md:flex">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold">TradePort</span>
            <span className="text-gray-400">| The New Way for B2B</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="transition hover:text-white">
              Home
            </a>
            <a href="#" className="transition hover:text-white">
              Shop
            </a>
            <a href="#" className="transition hover:text-white">
              Product
            </a>
            <a href="#" className="transition hover:text-white">
              Blog
            </a>
            <a href="#" className="transition hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="text-center md:hidden">
          <h2 className="text-2xl font-semibold">TradePort</h2>
          <p className="mt-1 text-sm text-gray-400">The New Way for B2B</p>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-gray-500"></div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-3 text-sm text-gray-300">
            <a href="#" className="block transition hover:text-white">
              Home
            </a>
            <a href="#" className="block transition hover:text-white">
              Shop
            </a>
            <a href="#" className="block transition hover:text-white">
              Product
            </a>
            <a href="#" className="block transition hover:text-white">
              Blog
            </a>
            <a href="#" className="block transition hover:text-white">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Social Media Icons - Always Visible */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 transition hover:text-white">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 transition hover:text-white">
            <EnvelopeIcon className="h-6 w-6" />
          </a>
        </div>

        {/* Privacy & Copyright */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <div className="flex justify-center space-x-4">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="transition hover:text-white">
              Terms of Use
            </a>
          </div>
          <p className="mt-3">&copy; 2025 TradePort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
