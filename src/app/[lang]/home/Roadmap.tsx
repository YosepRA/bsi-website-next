'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import type { RoadmapData } from 'types/home';
import * as Styled from './styled/Roadmap.styled.ts';
import RoadmapItem from './RoadmapItem.tsx';

const fakeRoadmapData: RoadmapData = {
  '2023': [
    {
      title: 'Q1 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q2 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q3 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q4 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
  ],
  '2024': [
    {
      title: 'Q1 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q2 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q3 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q4 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
  ],
  '2025': [
    {
      title: 'Q1 - Masterplan 2025',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q2 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q3 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
    {
      title: 'Q4 - Masterplan',
      list: [
        'Create a masterplan',
        'Execute masterplan',
        'Evaluate masterplan',
      ],
    },
  ],
};

const Roadmap = function RoadmapComponent() {
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
            {Object.keys(fakeRoadmapData).map((year, index) => (
              <Styled.RoadmapYear key={year} className="roadmap__year">
                <Row>
                  <Col xs={{ order: (index + 1) % 2 ? 1 : 2 }} lg={6}>
                    <Styled.RoadmapIntro className="roadmap__intro">
                      <h2>{year}</h2>
                    </Styled.RoadmapIntro>
                  </Col>

                  <Col xs={{ order: (index + 1) % 2 ? 2 : 1 }} lg={6}>
                    <Styled.RoadmapList className="roadmap__list">
                      {fakeRoadmapData[year as keyof RoadmapData].map(
                        (data) => (
                          <RoadmapItem key={data.title} data={data} />
                        ),
                      )}
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
