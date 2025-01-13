"use client";
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Product, getProductById } from "../../../services/api";
import { useParams } from "next/navigation";
import { useCart } from "../../../contexts/cardContext";

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productId = Number(params.id);
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product.id);
    }
  };

  if (loading) {
    return (
      <S.Container>
        <S.LoadingText>Carregando produto...</S.LoadingText>
      </S.Container>
    );
  }

  if (!product) {
    return (
      <S.Container>
        <S.ErrorText>Produto não encontrado</S.ErrorText>
      </S.Container>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const productInCart = isInCart(product.id);

  return (
    <S.Container>
      <S.ProductContainer>
        <S.ImageContainer>
          <S.ProductImage src={product.image} alt={product.title} />
        </S.ImageContainer>
        <S.ProductInfo>
          <S.Category>{product.category}</S.Category>
          <S.Title>{product.title}</S.Title>
          <S.Price>{formatPrice(product.price)}</S.Price>
          <S.Description>{product.description}</S.Description>
          <S.Rating>
            Avaliação: {product.rating.rate} ({product.rating.count} avaliações)
          </S.Rating>
          {productInCart ? (
            <S.CancelButton onClick={handleRemoveFromCart}>Cancelar</S.CancelButton>
          ) : (
            <S.AddToCartButton onClick={handleAddToCart}>Adicionar ao Carrinho</S.AddToCartButton>
          )}
        </S.ProductInfo>
      </S.ProductContainer>
    </S.Container>
  );
};

export default ProductDetails;

