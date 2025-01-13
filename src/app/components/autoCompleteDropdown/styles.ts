import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1001;
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--background-secondary);
  }
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 1rem;
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProductTitle = styled.p`
  font-size: 0.875rem;
  color: var(--text);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0;
`;

