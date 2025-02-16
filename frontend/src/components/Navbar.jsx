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

const Navbar = () => {
  return (
    <Nav>
      <h1>MyStore</h1>
      <ThemeToggle />
    </Nav>
  );
};

export default Navbar;
