import { StaticImageData } from 'next/image';

export interface LangItemData {
  shortText: string;
  longText: string;
  flagUrl: StaticImageData;
}

export interface LangSwitchTitleProps {
  data: LangItemData;
}
