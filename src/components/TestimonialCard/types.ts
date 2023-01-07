import { TestimonialCardVariant } from "types/types";

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
