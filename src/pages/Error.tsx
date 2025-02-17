import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="mt-2 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
