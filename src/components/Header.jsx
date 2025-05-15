import React, { useState } from "react";
import styled from "styled-components";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#contact", label: "Contact" },
];

const Navbar = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 191, 255, 0.1);
`;

const Brand = styled.h1`
  color: #00bfff;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: default;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkStyled = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #00bfff;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #00bfff;
    width: 0;
    transition: width 0.3s ease;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  background: none;
  border: none;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #222;
  padding: 1.2rem;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);

  a {
    color: #fff;
    font-size: 1.1rem;
    text-decoration: none;

    &:hover {
      color: #00bfff;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar>
      <Brand>My Portfolio</Brand>

      <NavLinks>
        {navItems.map(({ href, label }) => (
          <LinkStyled key={href} href={href}>
            {label}
          </LinkStyled>
        ))}
      </NavLinks>

      <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? "✖" : "☰"}
      </Hamburger>

      <MobileMenu open={menuOpen}>
        {navItems.map(({ href, label }) => (
          <LinkStyled key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </LinkStyled>
        ))}
      </MobileMenu>
    </Navbar>
  );
};

export default Header;
