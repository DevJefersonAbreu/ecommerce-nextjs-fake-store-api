"use client"

import React, { useState } from 'react';
import * as S from './styles';
import { useCart } from '../../contexts/cardContext';

type PaymentMethod = 'pix' | 'debit' | 'credit';

const PaymentForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const { cart, getCartTotal } = useCart();

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de processamento do pagamento
    console.log('Processando pagamento:', { paymentMethod, total: getCartTotal() });
    alert('Pagamento processado com sucesso!');
  };

  return (
    <S.Container>
      <S.Title>Finalizar Pagamento</S.Title>
      <S.CartSummary>
        <S.SummaryTitle>Resumo do Carrinho</S.SummaryTitle>
        {cart.map((item) => (
          <S.CartItem key={item.id}>
            <S.ItemName>{item.title}</S.ItemName>
            <S.ItemQuantity>x{item.quantity}</S.ItemQuantity>
            <S.ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</S.ItemPrice>
          </S.CartItem>
        ))}
        <S.TotalPrice>Total: R$ {getCartTotal().toFixed(2)}</S.TotalPrice>
      </S.CartSummary>
      <S.Form onSubmit={handleSubmit}>
        <S.PaymentMethods>
          <S.PaymentMethodButton
            type="button"
            selected={paymentMethod === 'pix'}
            onClick={() => handlePaymentMethodChange('pix')}
          >
            PIX
          </S.PaymentMethodButton>
          <S.PaymentMethodButton
            type="button"
            selected={paymentMethod === 'debit'}
            onClick={() => handlePaymentMethodChange('debit')}
          >
            Débito
          </S.PaymentMethodButton>
          <S.PaymentMethodButton
            type="button"
            selected={paymentMethod === 'credit'}
            onClick={() => handlePaymentMethodChange('credit')}
          >
            Crédito
          </S.PaymentMethodButton>
        </S.PaymentMethods>
        {paymentMethod === 'pix' && (
          <S.PixInfo>
            <S.QRCodePlaceholder />
            <S.PixInstructions>
              Escaneie o QR Code acima com o app do seu banco para pagar via PIX.
            </S.PixInstructions>
          </S.PixInfo>
        )}
        {(paymentMethod === 'debit' || paymentMethod === 'credit') && (
          <>
            <S.Input type="text" placeholder="Nome no cartão" required />
            <S.Input type="text" placeholder="Número do cartão" required />
            <S.Row>
              <S.Input type="text" placeholder="MM/AA" required />
              <S.Input type="text" placeholder="CVV" required />
            </S.Row>
          </>
        )}
        <S.SubmitButton type="submit">Finalizar Pagamento</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default PaymentForm;

