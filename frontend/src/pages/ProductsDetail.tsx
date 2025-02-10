import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define the Product type
interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}
const ProductsDetail: React.FC = () => {
const location = useLocation();
  const navigate = useNavigate();

  // Access the product passed via state
  const product = location.state?.product as Product;

  // Redirect back to products page if product is not found
  if (!product) {
    navigate('/products');
    return null;
  }

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <button
          className="mb-4 text-blue-500 hover:underline"
          onClick={() => navigate('/products')}
        >
          &larr; Back to Products
        </button>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-2">Price: {product.price}</p>
            <p className="text-md text-gray-600 mb-4">Color: {product.color}</p>
            <p className="text-gray-600">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>

            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => console.log('API call to be implemented')}
            >
              Proceed with Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail