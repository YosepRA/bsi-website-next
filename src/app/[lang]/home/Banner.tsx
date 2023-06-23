'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faInstagramSquare,
  faMedium,
  faYoutube,
  faTwitter,
  faFacebook,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

import bannerGraphic from 'assets/img/banner-graphic.png';
import DictionaryContext from 'components/context/Dictionary.context.tsx';

import * as Styled from './styled/Banner.styled.ts';

const Banner = function BannerComponent() {
  const {
    home: {
      banner: { excerpt },
    },
  } = useContext(DictionaryContext);

  return (
    <Styled.Banner className="banner">
      <Container>
        <Row className="banner__row">
          <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
            <Styled.BannerInfo className="banner__info">
              <h1 className="banner__info-title banner__info-title--mobile">
                Bali Social Integrated
              </h1>
              <h1 className="banner__info-title banner__info-title--desktop">
                Bali
                <br />
                Social
                <br />
                Integrated
              </h1>

              <div className="banner__info-excerpt">
                {excerpt.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="banner__info-social-media">
                <Row className="banner__info-social-media__row gy-2 gy-md-0 gx-md-4 gx-lg-0">
                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://t.me/CFBSI"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </Col>

                  <Col
                    xs={4}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://instagram.com/bsitoken"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                  </Col>

                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://balisocialintegrated.medium.com"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faMedium} />
                    </a>
                  </Col>

                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://www.youtube.com/channel/UCIS_7jaW8z-rzq-FXawOTMQ"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </Col>

                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://twitter.com/bsitoken_"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Col>

                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://www.facebook.com/people/Bsi-Token/pfbid02Wf17qGcRn9i9LJqPucybBvgSHCEcKiRGLd4gHX8uqNEb5Nj1ZrGPJngTWrFZge29l/"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Col>

                  <Col
                    xs={3}
                    md="auto"
                    className="banner__info-social-media__column"
                  >
                    <a
                      href="https://www.tiktok.com/@cfbsi"
                      className="banner__info-social-media__item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </Col>
                </Row>
              </div>
            </Styled.BannerInfo>
          </Col>

          <Col xs={{ order: 1 }} lg={{ span: 6, order: 2 }}>
            <Styled.BannerImage className="banner__image">
              <Image src={bannerGraphic} alt="Bali Social Integrated banner" />
            </Styled.BannerImage>
          </Col>
        </Row>
      </Container>
    </Styled.Banner>
  );
};

export default Banner;
