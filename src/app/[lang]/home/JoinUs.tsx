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
            <div className="join-us__intro">
              <h2 className="join-us__intro-title">Join Us</h2>

              <div className="join-us__intro-excerpt">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus placeat maxime voluptatibus earum quam veniam quas
                  iste dicta harum est!
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="join-us__col">
            <JoinUsCard />
          </Col>

          <Col lg={6} className="join-us__col">
            <JoinUsCard />
          </Col>
        </Row>
      </Container>
    </Styled.JoinUs>
  );
};

export default JoinUs;
