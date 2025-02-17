import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import CategoryGrid from "../components/CategoryGrid";
import FeaturesSection from "../components/FeaturesSection";
import NewsletterSignup from "../components/NewsLetterSignup";

const Home = () => {
  const images = [
    "/img/sofa.jpg",
    "/img/bedroom.jpg",
    "/img/office.jpg",
    "/img/kitchen.jpg",
    "/img/bathroom.jpg",
    "/img/outdoor.jpg",
  ];

  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <ImageSlider images={images} />
      <Hero />
      <CategoryGrid />
      <FeaturesSection />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
