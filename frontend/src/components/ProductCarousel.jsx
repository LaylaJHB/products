import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import produto1 from '../assets/IPhone15Pro.jpeg';
import produto4 from '../assets/50310.jpg';
import produto3 from '../assets/Watch .jpeg';

const products = [
  { id: 1, name: produto1, image: produto1 },
  { id: 2, name: produto4, image: produto4 },
  { id: 3, name: "Produto 3", image: "https://via.placeholder.com/300" },
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
