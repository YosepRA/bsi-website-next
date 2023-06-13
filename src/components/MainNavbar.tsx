'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LangSwitch from './LangSwitch.tsx';

const MainNavbar = function MainNavbarComponent() {
  const { lang } = useParams();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={`/${lang}`}>Bali Social Integrated</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`/${lang}`}>Home</Nav.Link>

            <LangSwitch />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
