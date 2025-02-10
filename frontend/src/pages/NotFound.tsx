import React from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation

const NotFound: React.FC = () => {
  const navigate = useNavigate(); // React Router hook to navigate programmatically

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* 404 Error Title */}
        <p className="text-9xl font-semibold text-xploreSGDark">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Button to navigate back home */}
          <button
            onClick={() => navigate("/")} // Navigate to the home page
            className="rounded-md bg-xploreSG px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-xploreSGLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-xploreSGDark"
          >
            Go back home
          </button>

          {/* Contact support (replace with real link) */}
          <a href="/contact" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
