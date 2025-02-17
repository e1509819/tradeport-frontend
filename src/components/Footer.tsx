import React from "react";

import { MagnifyingGlassIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section: Logo & Navigation */}
        <div className="flex flex-col items-center justify-between border-b border-gray-700 pb-4 md:flex-row">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold">TradePort</span>
            <span className="text-gray-400">| The New Way for B2B</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex space-x-6 text-sm text-gray-300 md:mt-0">
            <a
              href="#"
              className="flex items-center space-x-1 transition hover:text-white"
            >
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 transition hover:text-white"
            >
              <span>Shop</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 transition hover:text-white"
            >
              <span>Product</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 transition hover:text-white"
            >
              <span>Blog</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 transition hover:text-white"
            >
              <span>Contact Us</span>
            </a>
          </nav>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex items-center justify-between pt-4">
          {/* Copyright & Legal Links */}
          <p className="flex text-sm text-gray-400">
            © 2025 TradePort. All rights reserved.
            <span className="ml-4">
              <a
                href="#"
                className="flex items-center space-x-1 font-medium transition hover:text-white"
              >
                <span>Privacy Policy</span>
              </a>
            </span>
            <a
              href="#"
              className="ml-2 space-x-1 font-medium transition hover:text-white"
            >
              <span>Terms of Use</span>
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="transition hover:text-gray-300">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </a>
            <a href="#" className="transition hover:text-gray-300">
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
