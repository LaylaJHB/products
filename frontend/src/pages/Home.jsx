import Hero from "../components/Hero";
import ProductHighlight from "../components/ProductHighlight";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <ProductHighlight />

      <Footer />
    </>
  );
};

export default Home;
