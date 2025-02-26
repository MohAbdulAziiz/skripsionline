'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Spacer = styled.div`
  height: 70px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  transition: color 0.3s;
  &:hover {
    color: #1e90ff;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 90px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin: 0 20px;
  font-size: 18px;
  color: #f1f1f1;
  transition: color 0.3s;
  &:hover {
    color: #1e90ff;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 70px;
  right: 20px;
  width: 90%;
  max-width: 250px;
  background: #333;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  list-style: none;
`;

const MobileNavLink = styled.li`
  padding: 10px 0;
  font-size: 18px;
  color: #f1f1f1;
  border-bottom: 1px solid #444;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: #1e90ff;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Navbar>
        <Logo>LMS</Logo>
        <NavLinks>
          <NavLink><Link href="/">About</Link></NavLink>
          <NavLink><Link href="/skills">Skills</Link></NavLink>
          <NavLink><Link href="/portfolio">Portfolio</Link></NavLink>
          <NavLink><Link href="/services">Services</Link></NavLink>
          <NavLink><Link href="/contact">Contact</Link></NavLink>
          <NavLink><Link href="/challange3">Room</Link></NavLink>
          <NavLink><Link href="/skripsi">Skripsi</Link></NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </Navbar>
      <Spacer />
      <MobileMenu show={isMenuOpen}>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/">About</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/skills">Skills</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/portfolio">Portfolio</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/services">Services</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/contact">Contact</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/challange3">Room</Link></MobileNavLink>
        <MobileNavLink onClick={() => setIsMenuOpen(false)}><Link href="/skripsi">Skripsi</Link></MobileNavLink>
      </MobileMenu>
    </>
  );
}
