// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>MyStore</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Cadastro</Link>
      </NavLinks>
      <ThemeToggle />
    </Nav>
  );
};

export default Navbar;
