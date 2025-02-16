import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const RegisterContainer = styled.div`
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

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentando cadastrar:", { email, password });
    register(email, password);
  };

  return (
    <RegisterContainer>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Cadastrar</Button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
