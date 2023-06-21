'use client';

import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BSILogoVerticalText from 'assets/img/bsi-logo-vertical-text.svg';
import EcosystemCard from './EcosystemCard.tsx';

import * as Styled from './styled/Ecosystem.styled.ts';

const Ecosystem = function EcosystemComponent() {
  return (
    <Styled.EcosystemStyled id="ecosystem" className="ecosystem">
      <Container>
        <Row className="ecosystem__row">
          <Col lg={6}>
            <Styled.EcosystemBSI className="ecosystem-bsi">
              <Image
                src={BSILogoVerticalText}
                alt="Bali Social Integrated"
                className="ecosystem-bsi__logo"
              />

              <p className="ecosystem-bsi__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quibusdam omnis, at aut tenetur temporibus. Iure sint modi
                laudantium? Officiis.
              </p>
            </Styled.EcosystemBSI>
          </Col>

          <Col lg={6}>
            <Styled.EcosystemMembers className="ecosystem-members">
              <EcosystemCard />
              <EcosystemCard />
              <EcosystemCard />
            </Styled.EcosystemMembers>
          </Col>
        </Row>
      </Container>
    </Styled.EcosystemStyled>
  );
};

export default Ecosystem;
