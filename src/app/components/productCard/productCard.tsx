"use client"

import React from "react";
import * as S from "./styles";
import { Product } from "../../services/api";
import Link from "next/link";
import { Star, StarHalf } from 'lucide-react';
import { useCart } from "../../contexts/cardContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  const formatPrice = (price: number) => {
    const [integerPart, decimalPart] = price.toFixed(2).split('.');
    return {
      currency: 'R$',
      amount: integerPart,
      cents: decimalPart
    };
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} fill="currentColor" size={14} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="currentColor" size={14} />);
    }

    return stars;
  };

  const { currency, amount, cents } = formatPrice(product.price);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <S.Container>
      <Link href={`/produto/${product.id}`} style={{ textDecoration: 'none' }}>
        <S.ImageContainer>
          <S.ProductImage src={product.image} alt={product.title} />
          {product.rating.rate >= 4.5 && (
            <S.Badge>Mais Vendido</S.Badge>
          )}
        </S.ImageContainer>
        <S.Content>
          <S.Title>{product.title}</S.Title>
          <S.Price>
            <S.Currency>{currency}</S.Currency>
            <S.Amount>{amount}</S.Amount>
            <S.Cents>{cents}</S.Cents>
          </S.Price>
          <S.Rating>
            <S.Stars>
              {renderStars(product.rating.rate)}
            </S.Stars>
            {product.rating.count} avaliações
          </S.Rating>
        </S.Content>
      </Link>
      {isInCart ? (
        <S.CancelButton onClick={handleRemoveFromCart}>
          Remover do Carrinho
        </S.CancelButton>
      ) : (
        <S.AddToCartButton onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </S.AddToCartButton>
      )}
    </S.Container>
  );
};

export default ProductCard;

