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
      roadmap: { items },
    },
  } = useContext(DictionaryContext);

  return (
    <Styled.RoadmapStyled className="roadmap">
      <Container>
        <Row>
          <Col>
            <h1 className="roadmap__title">Roadmap</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            {items.map(({ titleBox, list }, index) => (
              <Styled.RoadmapYear
                key={titleBox.title}
                className="roadmap__year"
              >
                <Row>
                  <Col lg={{ span: 6, order: (index + 1) % 2 ? 1 : 2 }}>
                    <Styled.RoadmapTitleBox className="roadmap__title-box">
                      <Image
                        src={implementedIcon}
                        alt="Implemented Projects"
                        className="roadmap__title-box__icon"
                      />

                      <h2 className="roadmap__title-box__title">
                        {titleBox.title}
                      </h2>
                    </Styled.RoadmapTitleBox>
                  </Col>

                  <Col lg={{ span: 6, order: (index + 1) % 1 ? 2 : 2 }}>
                    <Styled.RoadmapList className="roadmap__list">
                      {list.map((data) => (
                        <RoadmapItem
                          key={`${titleBox.title}-${data.header.title}`}
                          data={data}
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
