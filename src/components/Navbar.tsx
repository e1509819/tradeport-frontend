import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // For React Router
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Product", path: "/product" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 bg-white p-4 shadow-lg">
      {/* Logo */}
      <h1 className="text-xl font-bold">TradePort</h1>

      {/* Desktop Navigation */}
      <div className="hidden space-x-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-gray-600 hover:text-black ${
              location.pathname === link.path
                ? "border-b-2 border-black font-bold text-black"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <UserCircleIcon className="h-6 w-6 cursor-pointer text-gray-600" />
        <div className="relative cursor-pointer">
          <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
          <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
            2
          </span>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-600 hover:text-black ${
                  location.pathname === link.path
                    ? "border-b-2 border-black font-bold text-black"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
