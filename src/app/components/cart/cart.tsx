"use client"

import React from 'react';
import * as S from './styles';
import { useCart } from '../../contexts/cardContext';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <S.CartOverlay onClick={onClose}>
      <S.CartContainer onClick={(e) => e.stopPropagation()}>
        <S.CartHeader>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          <S.CloseButton onClick={onClose}>
            <X size={24} />
          </S.CloseButton>
        </S.CartHeader>
        {cart.length === 0 ? (
          <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
        ) : (
          <>
            <S.CartItems>
              {cart.map((item) => (
                <S.CartItem key={item.id}>
                  <S.ItemImage src={item.image} alt={item.title} />
                  <S.ItemDetails>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>
                    <S.ItemQuantity>Quantidade: {item.quantity}</S.ItemQuantity>
                  </S.ItemDetails>
                  <S.RemoveButton onClick={() => removeFromCart(item.id)}>
                    <X size={18} />
                  </S.RemoveButton>
                </S.CartItem>
              ))}
            </S.CartItems>
            <S.CartFooter>
              <S.CartTotal>Total: R$ {getCartTotal().toFixed(2)}</S.CartTotal>
              <S.CheckoutButton onClick={() => {
                onClose();
                router.push('/payment');
              }}>
                Finalizar Compra
              </S.CheckoutButton>
              <S.ClearCartButton onClick={clearCart}>Limpar Carrinho</S.ClearCartButton>
            </S.CartFooter>
          </>
        )}
      </S.CartContainer>
    </S.CartOverlay>
  );
};

export default Cart;

