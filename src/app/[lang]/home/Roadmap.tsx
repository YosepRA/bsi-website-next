'use client';

import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                  <Col xs={{ order: (index + 1) % 2 ? 1 : 2 }} lg={6}>
                    <Styled.RoadmapTitleBox className="roadmap__title-box">
                      <h2>{titleBox.title}</h2>
                    </Styled.RoadmapTitleBox>
                  </Col>

                  <Col xs={{ order: (index + 1) % 2 ? 2 : 1 }} lg={6}>
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
