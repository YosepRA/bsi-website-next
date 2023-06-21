import React, { useState, useRef } from 'react';

import type { RoadmapItemProps } from 'types/home';
import DemoImage from 'components/styled/DemoImage.styled.ts';

import * as Styled from './styled/Roadmap.styled.ts';

const RoadmapItem = function RoadmapItemComponent({
  data: { header, body },
}: RoadmapItemProps) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Styled.RoadmapItem className="roadmap__item">
      <Styled.RoadmapItemToggle
        type="button"
        onClick={handleToggle}
        className="roadmap__item-toggle"
      >
        <span className="roadmap__item-toggle__icon">Icon</span>

        <h4 className="roadmap__item-toggle__title">{header.title}</h4>
      </Styled.RoadmapItemToggle>

      <Styled.RoadmapItemBody
        open={open}
        maxHeight={bodyRef.current?.scrollHeight}
        ref={bodyRef}
      >
        {body.list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Styled.RoadmapItemBody>
    </Styled.RoadmapItem>
  );
};

export default RoadmapItem;
