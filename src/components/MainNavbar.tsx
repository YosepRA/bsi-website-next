'use client';

import React, { useContext } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import BSILogoHorizontalText from 'assets/img/bsi-logo-horizonal-text.png';

import DictionaryContext from 'components/context/Dictionary.context.tsx';
import LangSwitch from './LangSwitch.tsx';

import * as Styled from './styled/MainNavbar.styled.ts';

const MainNavbar = function MainNavbarComponent() {
  const { lang } = useParams();
  const {
    mainNavbar: {
      menu: { aboutUs, wallet, partners, joinUs, whitepaper },
    },
  } = useContext(DictionaryContext);

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
            <Nav.Link href="#ecosystem" className="main-navbar__nav-link">
              {aboutUs}
            </Nav.Link>
            <Nav.Link href="#download-bsi" className="main-navbar__nav-link">
              {wallet}
            </Nav.Link>
            <Nav.Link href="#partnership" className="main-navbar__nav-link">
              {partners}
            </Nav.Link>
            <Nav.Link href="#join-us" className="main-navbar__nav-link">
              {joinUs}
            </Nav.Link>
            <Nav.Link
              href="#"
              className="main-navbar__nav-link main-navbar__nav-link--whitepaper"
            >
              {whitepaper}
            </Nav.Link>

            <LangSwitch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Styled.MainNavbar>
  );
};

export default MainNavbar;
