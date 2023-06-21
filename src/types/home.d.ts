import { StaticImageData } from 'next/image';

import { RoadmapItemList } from './dictionary.d.ts';

export interface HomeProps {
  params: {
    lang: string;
  };
}

export interface RoadmapItemProps {
  data: RoadmapItemList;
}

export interface RoadmapItemBodyProp {
  open: boolean;
  maxHeight: number | undefined;
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
