import React from "react";
import styled from "styled-components";
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Container>
      <h2>Entre em Contato</h2>
      <ContactInfo>
        <InfoItem>
          <FaMapMarkerAlt />
          <p>Rua Exemplo, 123 - São Paulo, SP</p>
        </InfoItem>
        <InfoItem>
          <FaPhone />
          <p>(11) 98765-4321</p>
        </InfoItem>
        <InfoItem>
          <FaWhatsapp />
          <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
            Fale no WhatsApp
          </a>
        </InfoItem>
        <InfoItem>
          <FaEnvelope />
          <p>contato@lojadoexemplo.com</p>
        </InfoItem>
      </ContactInfo>

      <SocialMedia>
        <h3>Siga-nos nas redes sociais</h3>
        <IconsContainer>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </IconsContainer>
      </SocialMedia>

      <MapContainer>
        <h3>Onde Estamos</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.901043618998!2d-46.6369781843744!3d-23.548903267703704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5854c4fbbfb5%3A0x42bdbb2b4aabda91!2sAvenida%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633020955000!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>
    </Container>
  );
};

// 🔹 ESTILIZAÇÃO COM STYLED-COMPONENTS
const Container = styled.div`
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

  h2 {
    color: #333;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  svg {
    color: #0071e3;
  }

  a {
    color: #0071e3;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled.div`
  margin-top: 30px;
  text-align: center;

  h3 {
    margin-bottom: 15px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    font-size: 30px;
    color: #0071e3;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #005bb5;
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 30px;
  text-align: center;

  iframe {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: none;
  }
`;

export default ContactPage;
