import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Certifique-se de importar corretamente
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import AccountPage from "./pages/AccountPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <ThemeProviderWrapper>
      <CartProvider>
        
          <Router>
          <AuthProvider> {/* Envolvendo dentro do Router */}
            <GlobalStyle />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/conta" element={<AccountPage />} />
              <Route path="/pedidos" element={<OrdersPage />} />
            </Routes>
            </AuthProvider>
          </Router>
       
      </CartProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
