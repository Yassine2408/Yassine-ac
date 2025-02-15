import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu
} from './styles';

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">YAE</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? '☀️' : '🌙'}
        </ThemeToggle>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar; 