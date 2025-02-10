import React from 'react';
import { useNavigate } from 'react-router-dom';

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

// Define the products array with type safety
const products: Product[] = [
    { id: 1, name: 'Basic Tee', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Front of men's Basic Tee in black.", price: '$35', color: 'Black' },
    { id: 2, name: 'Basic Hoodie', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "Front of men's Basic Hoodie in gray.", price: '$60', color: 'Gray' },
    { id: 3, name: 'Casual Pants', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg', imageAlt: "Casual pants in khaki color.", price: '$50', color: 'Khaki' },
    { id: 4, name: 'Sports Cap', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg', imageAlt: "Sports cap in navy blue.", price: '$25', color: 'Navy' },
    { id: 5, name: 'Leather Belt', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg', imageAlt: "Leather belt in black.", price: '$45', color: 'Black' },
    { id: 6, name: 'Formal Shirt', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Formal shirt in white.", price: '$55', color: 'White' },
    { id: 7, name: 'Sneakers', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "White sneakers with gray trim.", price: '$70', color: 'White' },
    { id: 8, name: 'Denim Jacket', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Denim jacket with a rugged look.", price: '$85', color: 'Blue' },
    { id: 9, name: 'Wool Scarf', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Warm wool scarf in maroon.", price: '$30', color: 'Maroon' },
    { id: 10, name: 'Running Shoes', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg', imageAlt: "Running shoes in red and black.", price: '$90', color: 'Red' },
    { id: 11, name: 'Chinos', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg', imageAlt: "Chinos in beige.", price: '$40', color: 'Beige' },
    { id: 12, name: 'V-Neck Sweater', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "V-neck sweater in navy blue.", price: '$65', color: 'Navy' },
    { id: 13, name: 'Classic Watch', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Classic leather-strap watch.", price: '$120', color: 'Brown' },
    { id: 14, name: 'Casual Shorts', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Casual shorts in olive green.", price: '$30', color: 'Olive' },
    { id: 15, name: 'Graphic T-Shirt', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "T-shirt with graphic print.", price: '$25', color: 'White' },
    { id: 16, name: 'Running Shorts', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "Running shorts in gray.", price: '$35', color: 'Gray' },
    { id: 17, name: 'Formal Pants', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "Formal pants in charcoal.", price: '$50', color: 'Charcoal' },
    { id: 18, name: 'Slim Fit Jeans', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "Slim fit jeans in dark blue.", price: '$60', color: 'Dark Blue' },
    { id: 19, name: 'Pullover Hoodie', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg', imageAlt: "Pullover hoodie in black.", price: '$65', color: 'Black' },
    { id: 20, name: 'Canvas Shoes', href: '#', imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg', imageAlt: "Classic canvas shoes in white.", price: '$40', color: 'White' }
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
