import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.surface};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.surface};
    padding: 1rem;
    gap: 1rem;
  }
`; 