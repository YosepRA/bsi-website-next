import React, { useState, useRef } from 'react';
import Image from 'next/image';

import type { RoadmapItemProps } from 'types/home';

import * as Styled from './styled/Roadmap.styled.ts';

const RoadmapItem = function RoadmapItemComponent({
  data: { header, body },
  color,
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
        open={open}
        color={color}
        className="roadmap__item-toggle"
      >
        <div className="roadmap__item-toggle__icon">
          <div className="roadmap__item-toggle__icon-wrapper">
            <Image
              src={header.iconUrl}
              alt={header.title}
              fill
              className="roadmap__item-toggle__icon-image"
            />
          </div>
        </div>

        <h4 className="roadmap__item-toggle__title">{header.title}</h4>
      </Styled.RoadmapItemToggle>

      <Styled.RoadmapItemBody
        open={open}
        maxHeight={bodyRef.current?.scrollHeight}
        color={color}
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
