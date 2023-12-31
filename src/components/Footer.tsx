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
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import BSILogoHorizontalText from 'assets/img/bsi-logo-horizontal-text.svg';
import slowMist from 'assets/img/slowmist.svg';
import digifinex from 'assets/img/digifinex-white.png';
import coinsbit from 'assets/img/coinsbit-white.png';
import coinmarketcap from 'assets/img/cmc-white.png';
import coingecko from 'assets/img/coingecko-white.png';
import DictionaryContext from 'components/context/Dictionary.context.tsx';

import * as Styled from './styled/Footer.styled.ts';

const Footer = function FooterComponent() {
  const {
    footer: { info, navigation, media, socialMedia, smartContract },
  } = useContext(DictionaryContext);

  return (
    <Styled.Footer className="page-footer">
      <Container>
        <Row className="page-footer__row page-footer__row--one">
          <Col md={7} lg={5}>
            <div className="page-footer__info">
              <Image
                src={BSILogoHorizontalText}
                alt="Bali Social Integrated"
                className="page-footer__info-logo"
              />

              <div className="page-footer__info-excerpt">
                {info.excerpt.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <p className="page-footer__info-contact">
                {info.contact}: <b>info@enbsi.com</b>
              </p>
            </div>
          </Col>

          <Col md={4} lg={3}>
            <div className="page-footer__navigation">
              <h2 className="page-footer__navigation-title">
                {navigation.title}
              </h2>

              <ul className="page-footer__navigation-list">
                <li className="page-footer__navigation-list-item">
                  <a href="#ecosystem">{navigation.menu.aboutUs}</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#download-bsi">{navigation.menu.wallet}</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#partnership">{navigation.menu.partners}</a>
                </li>
                <li className="page-footer__navigation-list-item">
                  <a href="#join-us">{navigation.menu.joinUs}</a>
                </li>
                <li className="page-footer__navigation-list-item page-footer__navigation-list-item--whitepaper">
                  <a href="#">
                    {navigation.menu.whitepaper}{' '}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="page-footer__media">
              <Row>
                <Col md={6} lg={12}>
                  <div className="page-footer__media__audit">
                    <h2 className="page-footer__media-title page-footer__media__audit-title">
                      Audited By
                    </h2>

                    <Image
                      src={slowMist}
                      alt="SlowMist"
                      className="page-footer__media__audit-logo"
                    />
                  </div>
                </Col>

                <Col md={6} lg={12}>
                  <div className="page-footer__media__listing">
                    <h2 className="page-footer__media-title page-footer__media__listing-title">
                      Listed on
                    </h2>

                    <ul className="page-footer__media__listing-list">
                      <Row className="g-3">
                        <Col xs={6}>
                          <a
                            href="https://www.digifinex.com/en-ww/trade/USDT/BSI"
                            className="page-footer__media__listing-list-item"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={digifinex} alt="Digifinex" />
                          </a>
                        </Col>
                        <Col xs={6}>
                          <a
                            href="https://coinsbit.io/trade/BSI_USDT"
                            className="page-footer__media__listing-list-item"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={coinsbit} alt="Coinsbit" />
                          </a>
                        </Col>
                        <Col xs={6}>
                          <a
                            href="https://coinmarketcap.com/currencies/bali-social-integrated"
                            className="page-footer__media__listing-list-item"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={coinmarketcap} alt="CoinMarketCap" />
                          </a>
                        </Col>
                        <Col xs={6}>
                          <a
                            href="https://www.coingecko.com/en/coins/bali-social-integrated"
                            className="page-footer__media__listing-list-item"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={coingecko} alt="CoinGecko" />
                          </a>
                        </Col>
                      </Row>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="page-footer__row page-footer__row--two">
          <Col md={6}>
            <div className="page-footer__social-media">
              <h2 className="page-footer__social-media__title">Follow Us</h2>

              <ul className="page-footer__social-media__list">
                <li className="page-footer__social-media__list-item">
                  <a href="https://t.me/CFBSI" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://instagram.com/bsitoken"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://balisocialintegrated.medium.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faMedium} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://www.youtube.com/channel/UCIS_7jaW8z-rzq-FXawOTMQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://twitter.com/bsitoken_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://www.facebook.com/people/Bsi-Token/pfbid02Wf17qGcRn9i9LJqPucybBvgSHCEcKiRGLd4gHX8uqNEb5Nj1ZrGPJngTWrFZge29l/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="page-footer__social-media__list-item">
                  <a
                    href="https://www.tiktok.com/@cfbsi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={5} lg={3}>
            <div className="page-footer__smart-contract">
              <p className="page-footer__smart-contract__text">
                Please check our
                <br />
                <a
                  href="https://etherscan.io/token/0xeb50455805ebf8396d9177bbc4a371a376d00ecc"
                  className="page-footer__smart-contract__link"
                  target="_blank"
                  rel="noreferrer"
                >
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
