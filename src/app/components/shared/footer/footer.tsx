"use client"
import * as S from "./styles";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../logo/logo';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Use setTimeout to allow the scroll to complete before changing the route
    setTimeout(() => {
      window.location.href = e.currentTarget.href;
    }, 500);
  };

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <Logo primaryColor="var(--white)" secondaryColor="var(--primary)" accentColor="var(--secondary)" />
          <S.FooterText>
            Sua loja online de confiança para encontrar os melhores produtos com preços imbatíveis.
          </S.FooterText>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterTitle>Links Rápidos</S.FooterTitle>
          <S.LinkList>
            <Link href="/politica-privacidade" passHref legacyBehavior>
              <S.StyledLink onClick={scrollToTop}>Política de Privacidade</S.StyledLink>
            </Link>
            <Link href="/termos" passHref legacyBehavior>
              <S.StyledLink onClick={scrollToTop}>Termos de Uso</S.StyledLink>
            </Link>
          </S.LinkList>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterTitle>Siga-nos</S.FooterTitle>
          <S.SocialLinks>
            <S.SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </S.SocialLink>
            <S.SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </S.SocialLink>
            <S.SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </S.SocialLink>
            <S.SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </S.SocialLink>
          </S.SocialLinks>
        </S.FooterSection>
      </S.FooterContent>

      <S.FooterBottom>
        <S.CopyrightText>
          © {currentYear} ecommerce. Todos os direitos reservados.
        </S.CopyrightText>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;

