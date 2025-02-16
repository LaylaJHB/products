import { ThemeProviderWrapper } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <Home />
    </ThemeProviderWrapper>
  );
}

export default App;
