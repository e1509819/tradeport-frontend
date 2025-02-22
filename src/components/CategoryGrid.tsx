import React from "react";

interface CategoryProps {
  image: string;
  title: string;
}

const categories: CategoryProps[] = [
  {
    image: "/img/sofa.jpg",
    title: "Living Room",
  },
  {
    image: "/img/bedroom.jpg",
    title: "Bedroom",
  },
  {
    image: "/img/kitchen.jpg",
    title: "Kitchen",
  },
  {
    image: "/img/bathroom.jpg",
    title: "Bathroom",
  },
  {
    image: "/img/outdoor.jpg",
    title: "Outdoor",
  },
  {
    image: "/img/office.jpg",
    title: "Office",
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Shop by Category
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 md:grid-cols-3 md:px-0">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.title}
              className="h-48 w-full object-cover transition duration-500 group-hover:brightness-75 md:h-64"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-all duration-500 group-hover:bg-opacity-50">
              <h3 className="text-lg font-semibold text-white md:text-2xl">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
