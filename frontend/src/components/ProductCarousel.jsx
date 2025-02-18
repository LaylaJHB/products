import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import produto4 from '../assets/IPhone15Pro.jpeg';
import produto5 from '../assets/50310.jpg';
import produto6 from '../assets/view-computer-monitor-display-with-desk.jpg';

const products = [
  { id: 4, name: produto4, image: produto4 },
  { id: 5, name: produto5, image: produto5 },
  { id: 6, name: produto6, image: produto6 },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <h2>Novidades</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </ProductCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: center;
`;

const ProductCard = styled.div`
  padding: 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;

export default ProductCarousel;
