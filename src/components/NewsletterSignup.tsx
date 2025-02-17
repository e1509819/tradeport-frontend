import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NewsletterSignup: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-12">
      <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-lg p-4 shadow-lg md:flex-row">
        {/* Left Image */}
        <div className="hidden w-1/4 md:block">
          <img
            src="/img/sofa.jpg"
            alt="Furniture Left"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Join Our Newsletter
          </h2>
          <p className="mt-2 text-gray-600">
            Sign up for deals, new products, and promotions
          </p>

          {/* Input Field */}
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center border-b border-gray-400">
            <EnvelopeIcon className="h-5 w-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-2 placeholder-gray-500 outline-none"
            />
            <button className="font-semibold text-gray-900 transition hover:text-gray-700">
              Signup
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden w-1/4 md:block">
          <img
            src="/img/bedroom.jpg"
            alt="Cozy Blanket"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
