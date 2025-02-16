import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from 'react';
import produto1 from '../assets/IPhone15Pro.jpeg';
import produto2 from '../assets/6c92c563-6982-4744-bbc1-e38e39cab7f1.jpeg';
import produto3 from '../assets/Watch .jpeg';


const HighlightSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    margin: 1rem 0;
  }

  p {
    font-size: 1rem;
    color: gray;
  }

  button {
    margin-top: 1rem;
    padding: 10px 15px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "O smartphone mais avançado da Apple.",
    image: produto1,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "O equilíbrio perfeito entre potência e portabilidade.",
    image: produto2,
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    description: "A revolução no monitoramento da saúde.",
    image: produto3,
  },
];

const ProductHighlight = () => {
  return (
    <HighlightSection>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={`/produto/${product.id}`}>
            <button>Ver Mais</button>
          </Link>
        </ProductCard>
      ))}
    </HighlightSection>
  );
};

export default ProductHighlight;
