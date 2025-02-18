import React from "react";
import styled from "styled-components";
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const AccountContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const UserInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;

  p {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const AccountPage = () => {
  const user = {
    name: "Layla Souza",
    email: "layla@email.com",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123 - São Paulo, SP"
  };

  return (
    <AccountContainer>
      <h2>Minha Conta</h2>
      <UserInfo>
        <p><FaUser /> {user.name}</p>
        <p><FaEnvelope /> {user.email}</p>
        <p><FaPhone /> {user.phone}</p>
        <p><FaMapMarkerAlt /> {user.address}</p>
      </UserInfo>
    </AccountContainer>
  );
};

export default AccountPage;
