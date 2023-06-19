import React, { useState, useRef } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import type { RoadmapItemProps } from 'types/home';
import DemoImage from 'components/styled/DemoImage.styled.ts';

import * as Styled from './styled/Roadmap.styled.ts';

const RoadmapItem = function RoadmapItemComponent({ data }: RoadmapItemProps) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Styled.RoadmapItem className="roadmap__item">
      <h3>
        <Styled.RoadmapItemToggle
          type="button"
          onClick={handleToggle}
          className="roadmap__item-toggle"
        >
          <DemoImage width={50} height={50} />

          <h4 className="roadmap__item-toggle__title">{data.title}</h4>
        </Styled.RoadmapItemToggle>
      </h3>

      <Styled.RoadmapItemBody
        open={open}
        maxHeight={bodyRef.current?.scrollHeight}
        ref={bodyRef}
      >
        {data.list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Styled.RoadmapItemBody>
    </Styled.RoadmapItem>
  );
};

export default RoadmapItem;
