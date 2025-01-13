"use client"

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useCart } from "../../../contexts/cardContext";
import Cart from "../../cart/cart";
import { categories, storeInfo } from "../../../config/navigattion";
import { Product, getProducts } from "../../../services/api";
import AutocompleteDropdown from "../../autoCompleteDropdown/autoCompleteDropdown";
import * as S from "./styles";
import Logo from '../../logo/logo';

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % storeInfo.length);
    }, 5000); // Change info every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredProducts.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, allProducts]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCategoryClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAutocompleteSelect = () => {
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <S.HeaderContainer>
      <S.TopBar>
        <S.TopBarContent>
          <S.StoreInfo>{storeInfo[currentInfoIndex]}</S.StoreInfo>
        </S.TopBarContent>
      </S.TopBar>

      <S.MainHeader>
        <S.MainHeaderContent>
          <S.LogoContainer href="/">
            <Logo primaryColor="var(--primary)" secondaryColor="var(--white)" accentColor="var(--secondary)" />
          </S.LogoContainer>

          <S.SearchContainer>
            <S.SearchInput 
              type="text" 
              placeholder="O que você está procurando?"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <S.SearchButton>
              <Search size={20} />
            </S.SearchButton>
            <AutocompleteDropdown 
              suggestions={suggestions} 
              onSelect={handleAutocompleteSelect} 
            />
          </S.SearchContainer>

          <S.ActionsContainer>
            <S.CartButton onClick={toggleCart}>
              <ShoppingCart size={20} />
              <span>Carrinho</span>
              <S.CartCount>{cart?.length ?? 0}</S.CartCount>
            </S.CartButton>
          </S.ActionsContainer>
        </S.MainHeaderContent>
      </S.MainHeader>

      <S.NavBar>
        <S.NavBarContent>
          {categories.map((category) => (
            <S.NavBarItem
              key={category.href}
              onClick={() => handleCategoryClick(category.href)}
            >
              {category.name}
            </S.NavBarItem>
          ))}
        </S.NavBarContent>
      </S.NavBar>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </S.HeaderContainer>
  );
}

export default Header;

