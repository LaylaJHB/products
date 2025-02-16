import styled from "styled-components";

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
    image: "/images/iphone.jpg",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "O equilíbrio perfeito entre potência e portabilidade.",
    image: "/images/macbook.jpg",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    description: "A revolução no monitoramento da saúde.",
    image: "/images/watch.jpg",
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
          <button>Ver Mais</button>
        </ProductCard>
      ))}
    </HighlightSection>
  );
};

export default ProductHighlight;
