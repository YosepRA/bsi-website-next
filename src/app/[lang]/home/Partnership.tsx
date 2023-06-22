'use client';

import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import type { Partners } from 'types/home.d.ts';
import kepa from 'assets/img/kepa.png';
import akurat from 'assets/img/media-akurat.png';
import antara from 'assets/img/media-antara.png';
import bisnis from 'assets/img/media-bisnis.png';
import detik from 'assets/img/media-detik.png';
import indopos from 'assets/img/media-indopos.png';
import iNews from 'assets/img/media-inews.png';
import jawaPos from 'assets/img/media-jawa-pos.png';
import jpnn from 'assets/img/media-jpnn.png';
import kapanLagi from 'assets/img/media-kapanlagi.png';
import koranJakarta from 'assets/img/media-koran-jakarta.png';
import liputan6 from 'assets/img/media-liputan-6.png';
import medcom from 'assets/img/media-medcom.png';
import mediaIndonesia from 'assets/img/media-media-indonesia.png';
import republika from 'assets/img/media-republika.png';
import sindoNews from 'assets/img/media-sindo-news.png';
import suara from 'assets/img/media-suara.png';
import tribun from 'assets/img/media-tribun.png';
import viva from 'assets/img/media-viva.png';
import wartaEkonomi from 'assets/img/media-warta-ekonomi.png';

import * as Styled from './styled/Partnership.styled.ts';

const partnersData: Partners = {
  supported: [
    {
      name: 'KEPA',
      img: kepa,
    },
  ],
  strategic: [
    {
      name: 'One',
      img: kepa,
    },
    {
      name: 'Two',
      img: kepa,
    },
    {
      name: 'Three',
      img: kepa,
    },
  ],
  media: [
    {
      name: 'Suara',
      img: suara,
    },
    {
      name: 'Detik',
      img: detik,
    },
    {
      name: 'Liputan 6',
      img: liputan6,
    },
    {
      name: 'Antara',
      img: antara,
    },
    {
      name: 'Republika',
      img: republika,
    },
    {
      name: 'JPNN',
      img: jpnn,
    },
    {
      name: 'iNews',
      img: iNews,
    },
    {
      name: 'Jawa Pos',
      img: jawaPos,
    },
    {
      name: 'Bisnis',
      img: bisnis,
    },
    {
      name: 'Tribun',
      img: tribun,
    },
    {
      name: 'Media Indonesia',
      img: mediaIndonesia,
    },
    {
      name: 'Medcom',
      img: medcom,
    },
    {
      name: 'KapanLagi',
      img: kapanLagi,
    },
    {
      name: 'Koran Jakarta',
      img: koranJakarta,
    },
    {
      name: 'Indopos',
      img: indopos,
    },
    {
      name: 'Sindo News',
      img: sindoNews,
    },
    {
      name: 'Akurat',
      img: akurat,
    },
    {
      name: 'VIVA',
      img: viva,
    },
    {
      name: 'Warta Ekonomi',
      img: wartaEkonomi,
    },
  ],
};

const Partnership = function PartnershipComponent() {
  return (
    <Styled.Partnership id="partnership" className="partnership">
      <Container>
        <Row className="partnership__row">
          <Col>
            <Styled.PartnershipIntro className="partnership__intro">
              <h2 className="partnership__intro-title">Partners</h2>

              <div className="partnership__intro-excerpt">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quasi provident neque sit laudantium quo quos harum
                  asperiores qui similique.
                </p>
              </div>
            </Styled.PartnershipIntro>
          </Col>
        </Row>

        <Row className="partnership__row">
          <Col>
            <Styled.PartnershipSupported className="partnership__supported">
              <h3 className="partnership__title partnership__supported-title">
                Supported By
              </h3>

              <ul className="partnership__list partnership__supported-list">
                <Row className="partnership__list-row g-3">
                  {partnersData.supported.map(({ name, img }) => (
                    <Col key={name} md={7} lg={4}>
                      <li className="partnership__list-item partnership__supported-list-item">
                        <Image src={img} alt={name} />
                      </li>
                    </Col>
                  ))}
                </Row>
              </ul>
            </Styled.PartnershipSupported>
          </Col>
        </Row>

        <Row className="partnership__row">
          <Col>
            <Styled.PartnershipStrategic className="partnership__strategic">
              <h3 className="partnership__title partnership__strategic-title">
                Strategic Partners
              </h3>

              <ul className="partnership__list partnership__strategic-list">
                <Row className="partnership__list-row g-3">
                  {partnersData.strategic.map(({ name, img }) => (
                    <Col key={name} xs={6} md={4} lg={3}>
                      <li className="partnership__list-item partnership__strategic-list-item">
                        <Image src={img} alt={name} />
                      </li>
                    </Col>
                  ))}
                </Row>
              </ul>
            </Styled.PartnershipStrategic>
          </Col>
        </Row>

        <Row className="partnership__row">
          <Col>
            <Styled.PartnershipMedia className="partnership__media">
              <h3 className="partnership__title partnership__media-title">
                Publication
              </h3>

              <ul className="partnership__list partnership__media-list">
                <Row className="partnership__list-row g-3">
                  {partnersData.media.map(({ name, img }) => (
                    <Col key={name} xs={6} md={4} lg={2}>
                      <li className="partnership__list-item partnership__media-list-item">
                        <Image src={img} alt={name} />
                      </li>
                    </Col>
                  ))}
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
