import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  primary: "#0071e3",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#ffffff",
  primary: "#0071e3",
};

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
