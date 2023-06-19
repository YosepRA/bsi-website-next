'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DemoImage from 'components/styled/DemoImage.styled.ts';
import * as Styled from './styled/Banner.styled.ts';

const Banner = function BannerComponent() {
  return (
    <Styled.Banner className="banner">
      <Container>
        <Row className="banner__row">
          <Col lg={6}>
            <Styled.BannerInfo className="banner__info">
              <h1>
                Bali
                <br />
                Social
                <br />
                Integrated
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                vitae quidem blanditiis labore, porro fuga. Ipsam in officia
                saepe cumque sapiente quibusdam aut sunt! Earum beatae eaque ut
                dicta atque?
              </p>
            </Styled.BannerInfo>
          </Col>

          <Col lg={6}>
            <Styled.BannerImage className="banner__image">
              <DemoImage width={300} height={300} center />
            </Styled.BannerImage>
          </Col>
        </Row>
      </Container>
    </Styled.Banner>
  );
};

export default Banner;
