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
