import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 6rem 0;
  margin-bottom: 4rem;
  color: var(--white);
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const HeroButton = styled.button`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  background-color: var(--secondary);
  color: var(--text);
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f57c00;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 50vh;
  object-fit: contain;
  margin: 0 auto;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1));
`;

export const CategorySection = styled.section`
  padding: 4rem 0;
`;

export const CategoryList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

interface CategoryItemProps {
  active: boolean;
}

export const CategoryItem = styled.button<CategoryItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: ${props => props.active ? 'var(--primary)' : 'var(--white)'};
  color: ${props => props.active ? 'var(--white)' : 'var(--text)'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductsSection = styled.section`
  padding: 4rem 0;
`;

export const SectionHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text);
`;

export const ViewAllLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;

export const ProductsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid var(--background-secondary);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: var(--text-secondary);
  font-size: 1.125rem;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

export const ErrorText = styled.p`
  color: var(--danger);
  font-size: 1.25rem;
`;

export const NewsletterSection = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 6rem 0;
  margin-top: 4rem;
  color: var(--white);
`;

export const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

export const NewsletterTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const NewsletterDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-size: 1.125rem;
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

export const NewsletterButton = styled.button`
  padding: 0.75rem 2rem;
  white-space: nowrap;
  background-color: var(--secondary);
  color: var(--text);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f57c00;
  }
`;

