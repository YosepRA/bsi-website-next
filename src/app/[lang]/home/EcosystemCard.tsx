import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DemoImage from 'components/styled/DemoImage.styled.ts';
import * as Styled from './styled/Ecosystem.styled.ts';

const EcosystemCard = function EcosystemCardComponent() {
  return (
    <Styled.EcosystemCard className="ecosystem-card">
      <Row className="ecosystem-card__row">
        <div className="ecosystem-card__icon">
          <h2>Logo</h2>
        </div>

        <Col xs={12}>
          <div className="ecosystem-card__info">
            <h4 className="ecosystem-card__info-title">Title</h4>
            <p className="ecosystem-card__info-excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque illum nihil dicta architecto. Similique, atque.
            </p>
          </div>
        </Col>
      </Row>
    </Styled.EcosystemCard>
  );
};

export default EcosystemCard;
