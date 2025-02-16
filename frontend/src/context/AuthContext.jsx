import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Verifica se o usuário existe e a senha está correta
    const validUser = existingUsers.find(user => user.email === email && user.password === password);
    
    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      setUser(validUser);
      navigate("/");
    } else {
      alert("Credenciais inválidas!");
    }
  };
  

  const register = (email, password, name) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Verifica se o email já está cadastrado
    const userExists = existingUsers.find(user => user.email === email);
    if (userExists) {
      alert("Este email já está cadastrado!");
      return;
    }
  
    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  
    setUser(newUser);
    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };
  
  

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
