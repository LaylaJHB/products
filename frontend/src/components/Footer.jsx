import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #333;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #e0e0e0; /* Linha de separação */
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const LinkTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333; /* Cor forte para o título */
`;

const Link = styled.a`
  color: #777; /* Cor suave para os links */
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;

  &:hover {
    color: #555; /* Cor mais escura ao passar o mouse */
  }
`;

const FooterBottom = styled.div`
  font-size: 12px;
  text-align: center;
  color: #777; /* Cor suave para o texto de copyright */
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <LinksColumn>
          <LinkTitle>Loja</LinkTitle>
          <Link href="#">Mac</Link>
          <Link href="#">iPad</Link>
          <Link href="#">iPhone</Link>
          <Link href="#">Watch</Link>
          <Link href="#">Carrinho</Link>
        </LinksColumn>

        <LinksColumn>
          <LinkTitle>Suporte</LinkTitle>
          <Link href="#">Suporte técnico</Link>
          <Link href="#">Garantia</Link>
          <Link href="#">MyStoreCare</Link>
          <Link href="#">Troca e devolução</Link>
        </LinksColumn>

        <LinksColumn>
          <LinkTitle>Sobre</LinkTitle>
          <Link href="#">My Store</Link>
          <Link href="#">Empresa</Link>
          <Link href="#">Carreiras</Link>
          <Link href="#">Responsabilidade ambiental</Link>
        </LinksColumn>
      </FooterLinks>

      <FooterBottom>
        &copy; 2025 MyStore Inc. Todos os direitos reservados.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
