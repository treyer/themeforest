import { TestimonialCardVariant } from "types/index";

export type TestimonialCardProps = {
  imgUrl: string;
  personName: string;
  personPosition: string;
  children: string;
  cardVariant?: TestimonialCardVariant;
};

export type PersonDataBlockProps = {
  personName: string;
  personPosition: string;
};
