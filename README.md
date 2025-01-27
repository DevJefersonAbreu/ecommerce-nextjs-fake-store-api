# E-commerce com Next.js, Styled Components e TypeScript

Este é um projeto de e-commerce desenvolvido com **Next.js**, **TypeScript** e **Styled Components**, integrando-se à [Fake Store API](https://fakestoreapi.com/) para exibir produtos de maneira dinâmica e funcional.

## Funcionalidades

- **Catálogo de Produtos**: Exibição de produtos com informações como imagem, título, preço e descrição.
- **Carrinho de Compras**: Adicione e remova produtos do carrinho para simular uma experiência real de compra.
- **Detalhes do Produto**: Visualize informações detalhadas sobre cada item ao clicar em um produto.
- **Responsividade**: Layout otimizado para diferentes dispositivos, incluindo desktop, tablet e mobile.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org): Framework React para desenvolvimento web moderno e eficiente.
- [TypeScript](https://www.typescriptlang.org): Superset de JavaScript com tipagem estática para maior segurança e previsibilidade.
- [Styled Components](https://styled-components.com): Biblioteca para estilização dinâmica e modular.
- [Fake Store API](https://fakestoreapi.com): API pública para integração de dados simulados de loja virtual.

## Demonstração

Acesse a aplicação ao vivo: [E-commerce com Fake Store API](https://ecommerce-nextjs-fake-store-api.vercel.app)

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ecommerce-nextjs-fake-store.git


Acesse o diretório do projeto:

bash
Copiar
Editar
cd ecommerce-nextjs-fake-store
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
Abra http://localhost:3000 no navegador para visualizar o projeto.

Estrutura do Projeto
pages/: Páginas principais da aplicação, como o catálogo de produtos, detalhes do produto e carrinho.
components/: Componentes reutilizáveis, como cabeçalhos, rodapés e cards de produtos.
styles/: Configurações de estilização utilizando Styled Components.
services/api.ts: Configuração para consumo da Fake Store API.
Integração com a API
Os dados dos produtos são consumidos diretamente da Fake Store API, permitindo a exibição de informações reais e atualizadas dinamicamente.

Licença
Este projeto está licenciado sob os termos da MIT License.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
