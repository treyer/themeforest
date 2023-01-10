import { FlexJustify } from "types/index";

export type BreadcrumbsLinkType = {
  name: string;
  url: string;
  isActive: boolean;
};

export type BreadcrumbsProps = {
  links: BreadcrumbsLinkType[];
  position?: FlexJustify;
};
