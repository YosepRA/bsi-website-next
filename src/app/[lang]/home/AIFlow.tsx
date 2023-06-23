'use client';

import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DictionaryContext from 'components/context/Dictionary.context.tsx';
import AIFlowCard from './AIFlowCard.tsx';

import * as Styled from './styled/AIFlow.styled.ts';

const AIFlow = function AIFlowComponent() {
  const {
    home: {
      aiFlow: { items },
    },
  } = useContext(DictionaryContext);

  return (
    <Styled.AIFlow className="ai-flow">
      <Container>
        <Row>
          {items.map((data) => (
            <Col md={4} className="ai-flow__col">
              <AIFlowCard key={data.title} data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </Styled.AIFlow>
  );
};

export default AIFlow;
