import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [current]);

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  return (
    <div
      id="image-slider"
      className="relative mx-auto w-full max-w-7xl shadow-lg md:mt-10"
    >
      {/* Slider Container */}
      <div className="relative h-96 w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                className="h-96 w-full rounded-b-xl object-cover transition-opacity duration-700 ease-in-out"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-900 hover:text-white"
      >
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-900 hover:text-white"
      >
        <ChevronRightIcon className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "w-4 bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
