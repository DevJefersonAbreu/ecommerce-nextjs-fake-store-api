import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CartSummary = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--background-secondary);
  border-radius: 8px;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ItemName = styled.span`
  flex: 1;
`;

export const ItemQuantity = styled.span`
  margin: 0 1rem;
`;

export const ItemPrice = styled.span`
  font-weight: bold;
`;

export const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  color: var(--primary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PaymentMethodButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid ${props => props.selected ? 'var(--primary)' : 'var(--border)'};
  background-color: ${props => props.selected ? 'var(--primary)' : 'var(--white)'};
  color: ${props => props.selected ? 'var(--white)' : 'var(--text)'};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.selected ? 'var(--primary-dark)' : 'var(--background-secondary)'};
  }
`;

export const PixInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const QRCodePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-secondary);
  border: 2px solid var(--border);
`;

export const PixInstructions = styled.p`
  text-align: center;
  color: var(--text-secondary);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

