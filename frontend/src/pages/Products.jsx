import styled from "styled-components";
import { Link } from "react-router-dom";
import produto1 from '../assets/IPhone15Pro.jpeg';
import produto2 from '../assets/6c92c563-6982-4744-bbc1-e38e39cab7f1.jpeg';
import produto3 from '../assets/Watch .jpeg';

// Dados estáticos de exemplo (integrar com API)
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "O smartphone mais avançado da Apple.",
    image: produto1,
    price: "9999.00",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "O equilíbrio perfeito entre potência e portabilidade.",
    image: produto2,
    price: "12999.00",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    description: "A revolução no monitoramento da saúde.",
    image: produto3,
    price: "2999.00",
  },
];

const ProductsContainer = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  margin: 1rem 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProductButton = styled.button`
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
`;

const Products = () => {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R$ {product.price}</ProductPrice>
          <Link to={`/produto/${product.id}`}>
            <ProductButton>Ver Detalhes</ProductButton>
          </Link>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};

export default Products;
