import { ThemeProviderWrapper } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductHighlight from './components/ProductHighlight';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProviderWrapper>
      <CartProvider>
        <GlobalStyle />
        <Router>
          <Navbar />
          
          <Routes>
          
          <Route path="/" element={<Home />} /> {/* Página inicial */}
            <Route path="/produtos" element={<Products />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
      
          </Routes>
        
        </Router>
    
      </CartProvider>
  
    </ThemeProviderWrapper>
    
  );
}

export default App;
