'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Styled from './styled/AIFlow.styled.ts';
import AIFlowCard from './AIFlowCard.tsx';

const AIFlow = function AIFlowComponent() {
  return (
    <Styled.AIFlow className="ai-flow">
      <Container>
        <Row>
          <Col lg={4} className="ai-flow__col">
            <AIFlowCard />
          </Col>

          <Col lg={4} className="ai-flow__col">
            <AIFlowCard />
          </Col>

          <Col lg={4} className="ai-flow__col">
            <AIFlowCard />
          </Col>
        </Row>
      </Container>
    </Styled.AIFlow>
  );
};

export default AIFlow;
