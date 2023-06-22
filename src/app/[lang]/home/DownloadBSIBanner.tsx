'use client';

import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BSIWalletMockup from 'assets/img/BSI-Wallet-Mockup.png';
import AppleStoreBadge from 'assets/img/apple-store-badge.svg';
import GoogleStoreBadge from 'assets/img/google-play-badge.png';

import * as Styled from './styled/DownloadBSI.styled.ts';

const DownloadBSIBanner = function DownloadBSIBannerComponent() {
  return (
    <Styled.DownloadBSI id="download-bsi" className="download-bsi">
      <Container>
        <Row className="download-bsi__row">
          <Col lg={6}>
            <Image
              src={BSIWalletMockup}
              alt="BSI Wallet"
              className="download-bsi__image"
            />
          </Col>

          <Col lg={6}>
            <Styled.DownloadBSIInfo className="download-bsi__info">
              <h2 className="download-bsi__info-title">BSI Wallet</h2>

              <p className="download-bsi__info-excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ex dolore voluptatem ratione laudantium rerum consectetur eaque
                asperiores sint sapiente?
              </p>

              <div className="download-bsi__info__download">
                <p className="download-bsi__info__download-title">
                  Download now on
                </p>

                <div className="download-bsi__info__download-list">
                  <a
                    href="https://apps.apple.com/app/id1606327952"
                    target="_blank"
                    rel="noreferrer"
                    className="download-bsi__info__download-item"
                  >
                    <Image
                      src={AppleStoreBadge}
                      alt="Download BSI Wallet on App Store"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=io.bsin.wallet"
                    target="_blank"
                    rel="noreferrer"
                    className="download-bsi__info__download-item"
                  >
                    <Image
                      src={GoogleStoreBadge}
                      alt="Download BSI Wallet on Google Play Store"
                    />
                  </a>
                </div>
              </div>
            </Styled.DownloadBSIInfo>
          </Col>
        </Row>
      </Container>
    </Styled.DownloadBSI>
  );
};

export default DownloadBSIBanner;
