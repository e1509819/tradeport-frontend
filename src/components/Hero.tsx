const Hero: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between px-6 py-12 md:flex-row">
      {/* Left Side: Main Heading */}
      <div className="text-4xl font-bold leading-tight text-gray-900 md:text-7xl">
        Simply Unique
        <span className="px-8 italic text-gray-500">/</span>
        <br />
        <div className="pt-6">
          Simply Better<span className="text-gray-500">.</span>
        </div>
      </div>

      {/* Right Side: Description */}
      <div className="mt-10 max-w-sm text-center text-lg leading-relaxed text-gray-600 md:ml-8 md:mt-0 md:text-right">
        <span className="font-bold text-gray-900">TradePort</span> is a B2B
        store based in Singapore. Est since 2025.
      </div>
    </section>
  );
};

export default Hero;
