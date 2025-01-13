import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Category = styled.span`
  text-transform: uppercase;
  color: #666;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2f9e44;
`;

export const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const Rating = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const AddToCartButton = styled.button`
  background: #2f9e44;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2b8a3e;
  }
`;

export const CancelButton = styled.button`
  background: #e03131;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c92a2a;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #e03131;
`;

