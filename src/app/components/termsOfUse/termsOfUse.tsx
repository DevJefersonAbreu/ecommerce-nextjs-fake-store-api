import React from 'react';
import * as S from './styles';

const TermsOfUse: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Termos de Uso</S.Title>
      <S.Content>
        <S.Section>
          <S.SectionTitle>1. Aceitação dos Termos</S.SectionTitle>
          <S.Paragraph>
            Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>2. Uso do Site</S.SectionTitle>
          <S.Paragraph>
            Você concorda em usar este site apenas para fins legais e de uma maneira que não infrinja os direitos de, restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>3. Propriedade Intelectual</S.SectionTitle>
          <S.Paragraph>
            Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, imagens, bem como a compilação destes, é de propriedade da nossa empresa ou de nossos fornecedores e protegido por leis de direitos autorais.
          </S.Paragraph>
        </S.Section>
        <S.Section>
          <S.SectionTitle>4. Limitação de Responsabilidade</S.SectionTitle>
          <S.Paragraph>
            Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais, especiais ou exemplares resultantes do uso ou da incapacidade de usar este site.
          </S.Paragraph>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};

export default TermsOfUse;

