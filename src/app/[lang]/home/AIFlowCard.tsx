import React from 'react';
import Image from 'next/image';

import type { AIFlowCardProps } from 'types/home.d.ts';

import * as Styled from './styled/AIFlow.styled.ts';

const AIFlowCard = function AIFlowCardComponent({ data }: AIFlowCardProps) {
  return (
    <Styled.AIFlowCard className="ai-flow__card">
      <div className="ai-flow__card-icon">
        {data.iconUrl.length > 1 ? (
          <div className="ai-flow__card-icon__wrapper">
            <Image
              src={data.iconUrl}
              alt={data.title}
              className="ai-flow__card-icon__image"
              fill
            />
          </div>
        ) : (
          <h2>{data.title}</h2>
        )}
      </div>

      <div className="ai-flow__card-body">
        <h4 className="ai-flow__card-title">{data.title}</h4>

        <div className="ai-flow__card-excerpt">
          {data.excerpt.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Styled.AIFlowCard>
  );
};

export default AIFlowCard;
