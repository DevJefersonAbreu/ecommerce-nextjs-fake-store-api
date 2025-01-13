"use client"

import React from 'react';
import PaymentForm from '../../components/paymentForm/paymentForm';
import * as S from './styles';

const PaymentPage: React.FC = () => {
  return (
    <S.PageContainer>
      <PaymentForm />
    </S.PageContainer>
  );
};

export default PaymentPage;

