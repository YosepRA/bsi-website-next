'use client';

import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DictionaryContext from 'components/context/Dictionary.context.tsx';
import JoinUsCard from './JoinUsCard.tsx';

import * as Styled from './styled/JoinUs.styled.ts';

const JoinUs = function JoinUsComponent() {
  const {
    home: {
      joinUs: { intro, partners, ambassadors },
    },
  } = useContext(DictionaryContext);

  return (
    <Styled.JoinUs id="join-us" className="join-us">
      <Container>
        <Row>
          <Col>
            <div className="join-us__intro">
              <h2 className="join-us__intro-title">{intro.title}</h2>

              <div className="join-us__intro-excerpt">
                {intro.excerpt.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="join-us__col">
            <JoinUsCard data={partners} />
          </Col>

          <Col lg={6} className="join-us__col">
            <JoinUsCard data={ambassadors} />
          </Col>
        </Row>
      </Container>
    </Styled.JoinUs>
  );
};

export default JoinUs;
