import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 bg-white p-4 shadow-lg">
    <h1 className="text-xl font-bold">TradePort</h1>
    <div className="hidden space-x-6 md:flex">
      <a href="#" className="text-gray-600 hover:text-black">
        Home
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        Categories
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        Product
      </a>
    </div>
    <div className="flex items-center space-x-4">
      <UserCircleIcon className="h-6 w-6 cursor-pointer text-gray-600" />
      <div className="relative cursor-pointer">
        <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
          2
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
