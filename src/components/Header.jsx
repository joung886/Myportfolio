import React, { useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "architecture", label: "Architecture" },
  { href: "contact", label: "Contact" },
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

const LinkStyled = styled.span`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    color: #00bfff;
  }

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
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar>
      <Brand>My Portfolio</Brand>

      <NavLinks>
        {navItems.map(({ href, label }) => (
          <ScrollLink
            key={href}
            to={href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            <LinkStyled>{label}</LinkStyled>
          </ScrollLink>
        ))}
      </NavLinks>

      <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? "✖" : "☰"}
      </Hamburger>

      <MobileMenu open={menuOpen}>
        {navItems.map(({ href, label }) => (
          <ScrollLink
            key={href}
            to={href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenuOpen(false)}
            activeClass="active"
          >
            <LinkStyled>{label}</LinkStyled>
          </ScrollLink>
        ))}
      </MobileMenu>
    </Navbar>
  );
};

export default Header;
