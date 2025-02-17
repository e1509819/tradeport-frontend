import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  return (
    <div id="image" className="relative w-full">
      <div className="carousel">
        <div className="carousel-body h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === current ? "" : "hidden"}`}
            >
              <div className="flex h-full justify-center">
                <img
                  src={image}
                  className="size-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Previous Slide */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg"
      >
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </button>
      {/* Next Slide */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg"
      >
        <ChevronRightIcon className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default ImageSlider;
