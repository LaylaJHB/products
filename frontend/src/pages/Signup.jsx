import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Signup = () => {
  const { register } = useContext(AuthContext); // Pega a função register do contexto
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Estado para exibir mensagens

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    register(email, password, name); // Chama a função register com o nome
    setMessage("Cadastro realizado com sucesso!");
  };

  return (
    <FormContainer>
      <h2>Cadastro</h2>
      {message && <p style={{ color: "green" }}>{message}</p>} {/* Mensagem de feedback */}
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <Button type="submit">Cadastrar</Button>
      </Form>
      <p>
        Já tem uma conta? <Link to="/login">Faça Login</Link>
      </p>
    </FormContainer>
  );
};

export default Signup;
