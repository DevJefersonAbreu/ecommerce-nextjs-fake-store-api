import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  width: 100%;
  background: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TopBar = styled.div`
  background: var(--primary);
  padding: 0.5rem 0;
`;

export const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StoreInfo = styled.p`
  color: var(--white);
  font-size: 0.875rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const MainHeader = styled.div`
  background: var(--white);
  padding: 1rem 0;
`;

export const MainHeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 600px;
  position: relative;

  @media (max-width: 768px) {
    order: 1;
    flex-basis: 100%;
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 30px;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  }
`;

export const SearchButton = styled.button`
  background: var(--primary);
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background: var(--primary-dark);
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CartButton = styled.button`
  background: var(--secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f57c00;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    background: none;
    color: var(--text);

    &:hover {
      background: none;
      transform: none;
      box-shadow: none;
    }

    span {
      display: none;
    }
  }
`;

export const CartCount = styled.span`
  background: var(--primary);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  margin-left: 0.5rem;

  @media (max-width: 480px) {
    background: var(--secondary);
    color: var(--text);
  }
`;

export const NavBar = styled.nav`
  background: var(--white);
  border-top: 1px solid var(--border);
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const NavBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
`;

export const NavBarItem = styled.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 0;
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary);

    &:after {
      width: 100%;
    }
  }
`;

