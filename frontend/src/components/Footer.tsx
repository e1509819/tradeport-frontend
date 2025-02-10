import React from "react";
import { socialMediaLinks, footerLinks } from "../data/footerContent";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black dark:bg-xploreSGDark dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo and description */}
          <div className="space-y-4">
            {/* <img
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Explore Singapore"
              className="h-8 w-auto"
            /> */}
            <h2 className="font-bold text-blue-600 text-lg">TradePort</h2>
            <p className="text-sm font-extralight text-gray-600 dark:text-gray-400">
              Discover the best trading opportunities and make informed decisions
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4">
              {socialMediaLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Explore Singapore. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
