import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </ToggleButton>
  );
};

export default ThemeToggle;
