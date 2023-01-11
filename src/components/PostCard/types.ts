type PostCardType = "middle" | "small";

export type PostCardProps = {
  type?: PostCardType;
  imgUrl: string;
  date: string;
  header: string;
  text?: string;
};

export type WrapperProps = {
  maxWidth: number;
  height: number;
};
