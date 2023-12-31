'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import implementedIcon from 'assets/img/icon-roadmap-implemented.svg';
import DictionaryContext from 'components/context/Dictionary.context.tsx';
import RoadmapItem from './RoadmapItem.tsx';

import * as Styled from './styled/Roadmap.styled.ts';

const Roadmap = function RoadmapComponent() {
  const {
    home: {
      roadmap: { intro, items },
    },
  } = useContext(DictionaryContext);

  return (
    <Styled.RoadmapStyled className="roadmap">
      <Container>
        <Row>
          <Col>
            <div className="roadmap__intro">
              <h1 className="roadmap__intro-title">{intro.title}</h1>

              <div className="roadmap__intro-excerpt">
                {intro.excerpt.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {items.map(({ titleBox, list, color }, index) => (
              <Styled.RoadmapYear
                key={titleBox.title}
                className="roadmap__year"
              >
                <Row className="roadmap__year-row">
                  <Col lg={{ span: 5, order: (index + 1) % 2 ? 1 : 2 }}>
                    <Styled.RoadmapTitleBox
                      color={color}
                      className="roadmap__title-box"
                    >
                      <div className="roadmap__title-box__icon-container">
                        <Image
                          src={titleBox.iconUrl}
                          fill
                          alt="Implemented Projects"
                          className="roadmap__title-box__icon"
                        />
                      </div>

                      <h2 className="roadmap__title-box__title">
                        {titleBox.title}
                      </h2>
                    </Styled.RoadmapTitleBox>
                  </Col>

                  <Col lg={{ span: 5, order: (index + 1) % 1 ? 1 : 2 }}>
                    <Styled.RoadmapList className="roadmap__list">
                      {list.map((data) => (
                        <RoadmapItem
                          key={`${titleBox.title}-${data.header.title}`}
                          data={data}
                          color={color}
                        />
                      ))}
                    </Styled.RoadmapList>
                  </Col>
                </Row>
              </Styled.RoadmapYear>
            ))}
          </Col>
        </Row>
      </Container>
    </Styled.RoadmapStyled>
  );
};

export default Roadmap;
