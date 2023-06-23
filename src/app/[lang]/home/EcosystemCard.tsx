import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import type { EcosystemCardProps } from 'types/home.d.ts';

import * as Styled from './styled/Ecosystem.styled.ts';

const EcosystemCard = function EcosystemCardComponent({
  data,
}: EcosystemCardProps) {
  return (
    <Styled.EcosystemCard className="ecosystem-card">
      <Row className="ecosystem-card__row">
        <div className="ecosystem-card__icon">
          {data.logoUrl.length > 1 ? (
            <div className="ecosystem-card__icon-wrapper">
              <Image
                src={data.logoUrl}
                alt={data.title}
                className="ecosystem-card__icon-image"
                fill
              />
            </div>
          ) : (
            <h2>{data.title}</h2>
          )}
        </div>

        <Col xs={12}>
          <div className="ecosystem-card__info">
            <h4 className="ecosystem-card__info-title">{data.title}</h4>

            <div className="ecosystem-card__info-excerpt">
              {data.excerpt.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Styled.EcosystemCard>
  );
};

export default EcosystemCard;
