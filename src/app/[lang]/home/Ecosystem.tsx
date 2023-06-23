'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BSILogoVerticalText from 'assets/img/bsi-logo-vertical-text.svg';
import DictionaryContext from 'components/context/Dictionary.context.tsx';
import EcosystemCard from './EcosystemCard.tsx';

import * as Styled from './styled/Ecosystem.styled.ts';

const Ecosystem = function EcosystemComponent() {
  const {
    home: {
      ecosystem: { intro, companies },
    },
  } = useContext(DictionaryContext);

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

              <div className="ecosystem-bsi__excerpt">
                {intro.excerpt.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Styled.EcosystemBSI>
          </Col>

          <Col lg={6}>
            <Styled.EcosystemMembers className="ecosystem-members">
              {companies.map((data) => (
                <EcosystemCard key={data.title} data={data} />
              ))}
            </Styled.EcosystemMembers>
          </Col>
        </Row>
      </Container>
    </Styled.EcosystemStyled>
  );
};

export default Ecosystem;
