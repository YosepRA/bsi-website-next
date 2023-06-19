export interface HomeProps {
  params: {
    lang: string;
  };
}

export interface RoadmapDataItem {
  title: string;
  list: string[];
}

export interface RoadmapData {
  '2023': RoadmapDataItem[];
  '2024': RoadmapDataItem[];
  '2025': RoadmapDataItem[];
}

export interface RoadmapItemProps {
  data: RoadmapDataItem;
}

export interface RoadmapItemBodyProp {
  open: boolean;
  maxHeight: number | undefined;
}
