'use client';

import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BSILogoHorizontalText from 'assets/img/bsi-logo-horizonal-text.png';

import * as Styled from './styled/Footer.styled.ts';

const Footer = function FooterComponent() {
  return (
    <Styled.Footer className="page-footer">
      <Container>
        <Row className="page-footer__row page-footer__row--one">
          <Col lg={5}>
            <div className="page-footer__info">
              <Image
                src={BSILogoHorizontalText}
                alt="Bali Social Integrated"
                className="page-footer__info-logo"
              />

              <p className="page-footer__info-excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse
                cum ex totam consequuntur sunt perspiciatis animi nisi, dicta
                aliquid!
              </p>

              <p className="page-footer__info-contact">
                Contact us: <b>info@enbsi.com</b>
              </p>
            </div>
          </Col>

          <Col lg={3}>
            <div className="page-footer__navigation">
              <h2 className="page-footer__navigation-title">
                More Information
              </h2>

              <ul className="page-footer__navigation-list">
                <li className="page-footer__navigation-list-item">
                  <a href="#">About Us</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#">Wallet</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#">Partners</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#">Join Us</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#">Whitepaper</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="page-footer__media">
              <div className="page-footer__media__audit">
                <h2 className="page-footer__media-title page-footer__media__audit-title">
                  Audited By
                </h2>

                <div className="page-footer__media__audit-box">
                  SlowMist logo
                </div>
              </div>

              <div className="page-footer__media__listing">
                <h2 className="page-footer__media-title page-footer__media__listing-title">
                  Listed on
                </h2>

                <ul className="page-footer__media__listing-list">
                  <Row className="g-3">
                    <Col lg={6}>
                      <div className="page-footer__media__listing-list-item">
                        One
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="page-footer__media__listing-list-item">
                        Two
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="page-footer__media__listing-list-item">
                        Three
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="page-footer__media__listing-list-item">
                        Four
                      </div>
                    </Col>
                  </Row>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="page-footer__row page-footer__row--two">
          <Col lg={6}>
            <div className="page-footer__social-media">
              <h2 className="page-footer__social-media__title">Follow Us</h2>

              <ul className="page-footer__social-media__list">
                <li className="page-footer__social-media__list-item">
                  <a href="#">Telegram</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">Instagram</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">Medium</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">YouTube</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">Twitter</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">Facebook</a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a href="#">TikTok</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3}>
            <div className="page-footer__smart-contract">
              <p className="page-footer__smart-contract__text">
                Please check our
                <br />
                <a href="#" className="page-footer__smart-contract__link">
                  Official Smart Contract (ERC-20)
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Styled.FooterCopyright className="page-footer__copyright">
        <p className="page-footer__copyright-text">
          &copy; 2023 Bali Social Integrated Foundation. All rights reserved.
        </p>
      </Styled.FooterCopyright>
    </Styled.Footer>
  );
};

export default Footer;
