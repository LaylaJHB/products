import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  color: ${({ success }) => (success ? "green" : "red")};
  background: ${({ success }) => (success ? "#d4edda" : "#f8d7da")};
`;

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", success: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLoggedIn = login(email, password);

    if (isLoggedIn) {
      setMessage({ text: "✅ Login realizado com sucesso!", success: true });

      // Aguarda 2 segundos antes de redirecionar
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setMessage({ text: "❌ Credenciais inválidas!", success: false });

      setTimeout(() => {
        setMessage({ text: "", success: false });
      }, 3000);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>

      {message.text && <Message success={message.success}>{message.text}</Message>}
    </LoginContainer>
  );
};

export default Login;
