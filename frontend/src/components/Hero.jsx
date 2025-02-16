import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Hero = () => {
  const handleClick = () => {
    console.log('Botão clicado!'); // Ação adicional
    // Pode adicionar mais lógica aqui, antes da navegação
  };

  return (
    <HeroSection>
      <h1>Descubra o Futuro da Tecnologia</h1>
      <p>Produtos inovadores com design impecável. O melhor da tecnologia, na sua casa.</p>
      <Link to="/produtos">
      <Button>Explorar Produtos</Button>
      </Link>
    </HeroSection>
  );
};

export default Hero;
