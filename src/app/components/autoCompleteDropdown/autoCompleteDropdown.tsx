"use client"

import React from 'react';
import Link from 'next/link';
import { Product } from '../../services/api';
import * as S from './styles';

interface AutocompleteDropdownProps {
  suggestions: Product[];
  onSelect: () => void;
}

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) return null;

  return (
    <S.DropdownContainer>
      {suggestions.map((product) => (
        <Link href={`/produto/${product.id}`} key={product.id} onClick={onSelect}>
          <S.SuggestionItem>
            <S.ProductImage src={product.image} alt={product.title} />
            <S.ProductInfo>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
            </S.ProductInfo>
          </S.SuggestionItem>
        </Link>
      ))}
    </S.DropdownContainer>
  );
};

export default AutocompleteDropdown;

