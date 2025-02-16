import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles"; // Certifique-se de importar isso

const themes = {
  light: {
    background: "#ffffff",
    text: "#000000",
    primary: "#0071e3",
  },
  dark: {
    background: "#1e1e1e",
    text: "#ffffff",
    primary: "#0071e3",
  },
};

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const theme = themes[themeName]; // Agora, evitamos recriar objetos no useState

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
