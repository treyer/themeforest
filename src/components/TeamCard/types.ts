type TeamCardType = "standard";

export interface TeamCardProps {
  type?: TeamCardType | undefined;
  imgUrl: string;
  name: string;
  position: string;
  verticalOffset?: number | undefined;
  callback?: any;
}

export interface ImageWrapperProps {
  width: number;
  verticalOffset: number | undefined;
}
