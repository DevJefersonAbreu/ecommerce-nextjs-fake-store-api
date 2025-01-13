"use client"

import React from 'react';
import PrivacyPolicy from '../../components/privacyPolicy/privacyPolicy';
import * as S from './styles';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <S.PageContainer>
      <PrivacyPolicy />
    </S.PageContainer>
  );
};

export default PrivacyPolicyPage;

