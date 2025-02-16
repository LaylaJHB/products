import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from 'react';
import produto1 from '../assets/IPhone15Pro.jpeg';
import produto2 from '../assets/6c92c563-6982-4744-bbc1-e38e39cab7f1.jpeg';
import produto3 from '../assets/Watch .jpeg';

// Dados estáticos para exemplo
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "O smartphone mais avançado da Apple com design inovador e desempenho incomparável.",
    image: produto1,
    price: "9999.00",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Leve, poderoso e com uma bateria que dura o dia inteiro.",
    image: produto2,
    price: "12999.00",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    description: "Monitoramento de saúde e performance em um design robusto.",
    image: produto3,
    price: "2999.00",
  },
];

const DetailContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 400px;
  border-radius: 10px;
`;

const ProductName = styled.h2`
  margin: 1rem 0;
`;

const ProductDescription = styled.p`
  max-width: 600px;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const AddToCartButton = styled.button`
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

const Message = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');
  const product = products.find(prod => prod.id === parseInt(id));

  if (!product) return <p>Produto não encontrado!</p>;

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage('Produto adicionado ao carrinho!');
    setTimeout(() => {
      setMessage(''); // Remove a mensagem após 3 segundos
    }, 3000);
  };

  return (
    <DetailContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <AddToCartButton onClick={() => handleAddToCart(product)}>
        Adicionar ao Carrinho
      </AddToCartButton>

      {message && <Message>{message}</Message>} {/* Exibe a mensagem se houver */}
    </DetailContainer>
  );
};

export default ProductDetail;
