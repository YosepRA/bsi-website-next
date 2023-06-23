import React from 'react';
import Image from 'next/image';

import type { JoinUsCardProps } from 'types/home.d.ts';
import Button from 'components/styled/Button.styled.ts';

import * as Styled from './styled/JoinUs.styled.ts';

const JoinUsCard = function JoinUsCardComponent({ data }: JoinUsCardProps) {
  return (
    <Styled.JoinUsCard color={data.color} className="join-us__card">
      <div className="join-us__card-meta">
        <div className="join-us__card-icon">
          <div className="join-us__card-icon__wrapper">
            <Image
              src={data.iconUrl}
              fill
              alt="Partners"
              className="join-us__card-icon__image"
            />
          </div>
        </div>

        <h3 className="join-us__card-title">{data.title}</h3>
      </div>

      <div className="join-us__card-body">
        {data.excerpt.map((paragraph, index) => (
          <p className="join-us__card-excerpt" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="join-us__card-footer">
        <Button color={data.color} className="join-us__card-footer__button">
          {data.button}
        </Button>
      </div>
    </Styled.JoinUsCard>
  );
};

export default JoinUsCard;
