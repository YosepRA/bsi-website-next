import React from 'react';

import DemoImage from 'components/styled/DemoImage.styled.ts';
import * as Styled from './styled/AIFlow.styled.ts';

const AIFlowCard = function AIFlowCardComponent() {
  return (
    <Styled.AIFlowCard className="ai-flow__card">
      <div className="ai-flow__card-icon">
        <h2>Title</h2>
      </div>

      <div className="ai-flow__card-body">
        <h4 className="ai-flow__card-title">LOREM IPSUM DOLOR SIT AMET</h4>

        <div className="ai-flow__card-excerpt">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            incidunt.
          </p>
        </div>
      </div>
    </Styled.AIFlowCard>
  );
};

export default AIFlowCard;
