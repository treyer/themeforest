export enum LogoSize {
  Large,
  Small,
}

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum ButtonSize {
  ExtraBig = "extraBig",
  Big = "big",
  Standard = "standard",
  Little = "little",
}

export enum ButtonType {
  Square = "square",
  Round = "round",
}

export enum SectionType {
  Wide = "wide",
  Narrow = "narrow",
}

export enum ButtonSimpleSize {
  Big = "big",
  Small = "small",
  Tap = "tap",
}

export enum ButtonRoundSize {
  Big = "big",
  Small = "small",
}

export enum TextAlign {
  Start = "start",
  End = "end",
  Center = "center",
  Justify = "justify",
}

export enum TestimonialCardVariant {
  ImgOutside = "outside",
  ImgInside = "inside",
}

export enum ButtonSimpleMode {
  Light = "light",
  Dark = "dark",
}

export enum PriceType {
  Month = "month",
  Year = "year",
}

export type SliderHandle = {
  forward: () => void;
  backward: () => void;
};

export enum DirectionControlType {
  Desktop = "desktop",
  Mobile = "mobile",
}

export enum Direction {
  Left = "left",
  Right = "right",
}

export interface Employee {
  id: number;
  imgUrl: string;
  name: string;
  position: string;
}

export interface Post {
  id: number;
  imgUrl: string;
  date: string;
  header: string;
  text: string;
  author: string;
  views: number;
  tags: TagType[];
  socialLinks: SocialLink[];
}

export interface TagType {
  id: number;
  text: string;
}

export interface SocialLink {
  id: number;
  iconUrl: string;
  link: string;
}
