// import styled from "styled-components";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background: ${({ theme }) => theme.primary};
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Integre com o seu backend (Firebase, API Node, etc.)
//     console.log("Login:", { email, password });
//   };

//   return (
//     <FormContainer>
//       <h2>Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <Input 
//           type="password" 
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button type="submit">Entrar</Button>
//       </Form>
//       <p>
//         Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
//       </p>
//     </FormContainer>
//   );
// };

// export default Login;

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Entrar</Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
