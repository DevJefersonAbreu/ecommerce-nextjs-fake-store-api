import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

export const CartContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
`;

export const EmptyCart = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: var(--text-secondary);
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 1rem;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  color: var(--primary);
`;

export const ItemQuantity = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

export const CartFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartTotal = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: right;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

export const ClearCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--background-secondary);
  color: var(--text);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--border);
  }
`;

