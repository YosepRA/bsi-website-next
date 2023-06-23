import { StaticImageData } from 'next/image';

import {
  RoadmapItemList,
  EcosystemCompany,
  AIFlowItem,
  JoinUsItem,
} from './dictionary.d.ts';

export interface HomeProps {
  params: {
    lang: string;
  };
}

export interface EcosystemCardProps {
  data: EcosystemCompany;
}

export interface AIFlowCardProps {
  data: AIFlowItem;
}

export interface RoadmapTitleBoxProps {
  color: string;
}

export interface RoadmapItemProps {
  data: RoadmapItemList;
  color: string;
}

export interface RoadmapItemToggleProps {
  open: boolean;
  color: string;
}

export interface RoadmapItemBodyProps {
  open: boolean;
  maxHeight: number | undefined;
  color: string;
}

export interface PartnerItem {
  name: string;
  img: StaticImageData;
}

export interface Partners {
  supported: PartnerItem[];
  strategic: PartnerItem[];
  media: PartnerItem[];
}

export interface JoinUsCardProps {
  data: JoinUsItem;
}

export interface JoinUsCardStyledProps {
  color: string;
}
