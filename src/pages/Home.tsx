import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const images = ["/img/sofa.jpg", "/img/bedroom.jpg"];

  return (
    <div className="mx-auto max-w-7xl">
      <ImageSlider images={images} />
      <ImageSlider images={images} />
    </div>
  );
};

export default Home;
