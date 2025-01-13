"use client"

import React from 'react';
import * as S from './styles';

const PrivacyPolicy: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Política de Privacidade</S.Title>
      <S.Content>
        <S.Section>
          <S.SectionTitle>1. Coleta de Informações</S.SectionTitle>
          <S.Paragraph>
            Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail, endereço postal e número de telefone quando você se registra em nossa plataforma, faz uma compra ou interage com nosso serviço ao cliente.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>2. Uso de Informações</S.SectionTitle>
          <S.Paragraph>
            Utilizamos suas informações pessoais para processar pedidos, fornecer serviços, enviar comunicações de marketing (se você optou por recebê-las) e melhorar nossos produtos e serviços.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>3. Proteção de Dados</S.SectionTitle>
          <S.Paragraph>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>4. Seus Direitos</S.SectionTitle>
          <S.Paragraph>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos no final desta política.
          </S.Paragraph>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};

export default PrivacyPolicy;

