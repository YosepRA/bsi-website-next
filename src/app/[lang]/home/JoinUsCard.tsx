import React from 'react';
import Image from 'next/image';

import joinUsPartnersIcon from 'assets/img/join-us-partners.svg';
import DemoImage from 'components/styled/DemoImage.styled.ts';
import Button from 'components/styled/Button.styled.ts';

import * as Styled from './styled/JoinUs.styled.ts';

const JoinUsCard = function JoinUsCardComponent() {
  return (
    <Styled.JoinUsCard className="join-us__card">
      <div className="join-us__card-meta">
        <div className="join-us__card-icon">
          <Image src={joinUsPartnersIcon} alt="Partners" />
        </div>

        <h3 className="join-us__card-title">Title</h3>
      </div>

      <div className="join-us__card-body">
        <p className="join-us__card-excerpt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          dolores similique vero id dignissimos fugit quibusdam repudiandae
          impedit eligendi cum.
        </p>
        <p className="join-us__card-excerpt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          accusantium?
        </p>
      </div>

      <div className="join-us__card-footer">
        <Button color="secondary" className="join-us__card-footer__button">
          Button
        </Button>
      </div>
    </Styled.JoinUsCard>
  );
};

export default JoinUsCard;
