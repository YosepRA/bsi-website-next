'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Styled from './styled/Partnership.styled.ts';

const Partnership = function PartnershipComponent() {
  return (
    <Styled.Partnership className="partnership">
      <Container>
        <Row>
          <Col>
            <Styled.PartnershipSupported>
              <h3 className="partnership__title partnership__supported-title">
                Supported By
              </h3>

              <ul className="partnership__list partnership__supported-list">
                <Row className="partnership__list-row">
                  <Col lg={4}>
                    <li className="partnership__list-item partnership__supported-list-item">
                      One
                    </li>
                  </Col>
                </Row>
              </ul>
            </Styled.PartnershipSupported>
          </Col>
        </Row>

        <Row>
          <Col>
            <Styled.PartnershipStrategic>
              <h3 className="partnership__title partnership__strategic-title">
                Strategic Partners
              </h3>

              <ul className="partnership__list partnership__strategic-list">
                <Row className="partnership__list-row">
                  <Col lg={3}>
                    <li className="partnership__list-item partnership__strategic-list-item">
                      One
                    </li>
                  </Col>
                  <Col lg={3}>
                    <li className="partnership__list-item partnership__strategic-list-item">
                      Two
                    </li>
                  </Col>
                  <Col lg={3}>
                    <li className="partnership__list-item partnership__strategic-list-item">
                      Three
                    </li>
                  </Col>
                  <Col lg={3}>
                    <li className="partnership__list-item partnership__strategic-list-item">
                      Four
                    </li>
                  </Col>
                </Row>
              </ul>
            </Styled.PartnershipStrategic>
          </Col>
        </Row>

        <Row>
          <Col>
            <Styled.PartnershipMedia>
              <h3 className="partnership__title partnership__media-title">
                Media
              </h3>

              <ul className="partnership__list partnership__media-list">
                <Row className="partnership__list-row">
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      One
                    </li>
                  </Col>
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      Two
                    </li>
                  </Col>
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      Three
                    </li>
                  </Col>
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      Four
                    </li>
                  </Col>
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      Five
                    </li>
                  </Col>
                  <Col lg={2}>
                    <li className="partnership__list-item partnership__media-list-item">
                      Six
                    </li>
                  </Col>
                </Row>
              </ul>
            </Styled.PartnershipMedia>
          </Col>
        </Row>
      </Container>
    </Styled.Partnership>
  );
};

export default Partnership;
