'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JoinUsCard from './JoinUsCard.tsx';

import * as Styled from './styled/JoinUs.styled.ts';

const JoinUs = function JoinUsComponent() {
  return (
    <Styled.JoinUs id="join-us" className="join-us">
      <Container>
        <Row>
          <Col>
            <h2 className="join-us__title">Join Us</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <JoinUsCard />
          </Col>

          <Col lg={6}>
            <JoinUsCard />
          </Col>
        </Row>
      </Container>
    </Styled.JoinUs>
  );
};

export default JoinUs;
