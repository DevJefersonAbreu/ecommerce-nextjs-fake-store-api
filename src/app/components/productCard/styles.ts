import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--white);
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background: var(--background-secondary);
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: var(--text);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

export const Currency = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-secondary);
`;

export const Amount = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
`;

export const Cents = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-secondary);
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

export const Stars = styled.div`
  color: var(--rating);
  display: flex;
  align-items: center;
`;

export const Badge = styled.span`
  background-color: var(--secondary);
  color: var(--text);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--secondary);
  color: var(--white);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #f57c00;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--danger);
  color: var(--white);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #d32f2f;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

