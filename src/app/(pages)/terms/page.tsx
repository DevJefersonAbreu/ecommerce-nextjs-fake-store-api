"use client"

import React from 'react';
import TermsOfUse from '../../components/termsOfUse/termsOfUse';
import * as S from './styles';

const TermsOfUsePage: React.FC = () => {
  return (
    <S.PageContainer>
      <TermsOfUse />
    </S.PageContainer>
  );
};

export default TermsOfUsePage;

