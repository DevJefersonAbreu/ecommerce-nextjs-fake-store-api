"use client"

import React, { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import { Product, getProducts } from "../../services/api";
import ProductCard from "../../components/productCard/productCard";
import { categories } from "../../config/navigattion";

const translateCategory = (category: string): string => {
  const translations: { [key: string]: string } = {
    "electronics": "Eletrônicos",
    "jewelery": "Joias",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas"
  };
  return translations[category] || category;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const electronicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err); 
        setError('Erro ao carregar produtos. Por favor, tente novamente mais tarde.');
      }
       finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scrollToElectronics = () => {
    electronicsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.Container>
      <S.HeroSection>
        <S.HeroContent>
          <div>
            <S.HeroTitle>Bem-vindo à ecommerce</S.HeroTitle>
            <S.HeroDescription>
              Descubra os melhores produtos com os melhores preços
            </S.HeroDescription>
            <S.HeroButton onClick={scrollToElectronics}>
              Ver Produtos
            </S.HeroButton>
          </div>
          <S.HeroImage src={products[0]?.image || '/placeholder.svg?height=300&width=300'} alt="Produto em Destaque" />
        </S.HeroContent>
      </S.HeroSection>

      <S.ProductsSection id="products">
        {categories.map((category) => (
          <S.CategorySection 
            key={category.apiCategory} 
            id={category.href.slice(1)}
            ref={category.apiCategory === 'electronics' ? electronicsRef : null}
          >
            <S.SectionHeader>
              <S.SectionTitle>{category.name}</S.SectionTitle>
            </S.SectionHeader>

            {loading ? (
              <S.LoadingContainer>
                <S.LoadingSpinner />
                <S.LoadingText>Carregando produtos...</S.LoadingText>
              </S.LoadingContainer>
            ) : error ? (
              <S.ErrorContainer>
                <S.ErrorText>{error}</S.ErrorText>
              </S.ErrorContainer>
            ) : (
              <S.ProductsGrid>
                {products
                  .filter((product) => product.category === category.apiCategory)
                  .map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={{
                        ...product,
                        category: translateCategory(product.category)
                      }} 
                    />
                  ))
                }
              </S.ProductsGrid>
            )}
          </S.CategorySection>
        ))}
      </S.ProductsSection>

      <S.NewsletterSection>
        <S.NewsletterContent>
          <S.NewsletterTitle>Fique por dentro das novidades</S.NewsletterTitle>
          <S.NewsletterDescription>
            Cadastre-se para receber ofertas exclusivas e novidades
          </S.NewsletterDescription>
          <S.NewsletterForm>
            <S.NewsletterInput type="email" placeholder="Seu melhor e-mail" />
            <S.NewsletterButton type="submit" className="btn btn-primary">
              Cadastrar
            </S.NewsletterButton>
          </S.NewsletterForm>
        </S.NewsletterContent>
      </S.NewsletterSection>
    </S.Container>
  );
};

export default HomePage;

