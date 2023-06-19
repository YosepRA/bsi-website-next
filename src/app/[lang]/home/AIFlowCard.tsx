import React from 'react';

import DemoImage from 'components/styled/DemoImage.styled.ts';
import * as Styled from './styled/AIFlow.styled.ts';

const AIFlowCard = function AIFlowCardComponent() {
  return (
    <Styled.AIFlowCard className="ai-flow__card">
      <DemoImage width={70} height={70} />

      <h4 className="ai-flow__card-title">Title</h4>

      <p className="ai-flow__card-excerpt">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
        incidunt.
      </p>
    </Styled.AIFlowCard>
  );
};

export default AIFlowCard;
