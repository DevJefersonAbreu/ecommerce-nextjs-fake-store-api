import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: var(--white);
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary);
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: var(--white);
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: var(--secondary);
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
`;

export const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

