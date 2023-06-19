'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import BSILogoHorizontalText from 'assets/img/bsi-logo-horizonal-text.png';
import LangSwitch from './LangSwitch.tsx';

import * as Styled from './styled/MainNavbar.styled.ts';

const MainNavbar = function MainNavbarComponent() {
  const { lang } = useParams();

  return (
    <Styled.MainNavbar bg="light" expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href={`/${lang}`} className="main-navbar__brand">
          <Image
            src={BSILogoHorizontalText}
            alt="Bali Social Integrated"
            className="main-navbar__brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          className="main-navbar__toggle"
        />

        <Navbar.Collapse id="main-navbar" className="main-navbar__collapse">
          <Nav className="main-navbar__nav">
            <Nav.Link href="#" className="main-navbar__nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#" className="main-navbar__nav-link">
              Wallet
            </Nav.Link>
            <Nav.Link href="#" className="main-navbar__nav-link">
              Partners
            </Nav.Link>
            <Nav.Link href="#" className="main-navbar__nav-link">
              Join Us
            </Nav.Link>
            <Nav.Link
              href="#"
              className="main-navbar__nav-link main-navbar__nav-link--whitepaper"
            >
              Whitepaper
            </Nav.Link>

            <LangSwitch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Styled.MainNavbar>
  );
};

export default MainNavbar;
