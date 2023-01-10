export type BreadcrumbsLinkType = {
  name: string;
  url: string;
  isActive: boolean;
};

type FlexJustify = "start" | "center" | "end" | "space-between";

export type BreadcrumbsProps = {
  links: BreadcrumbsLinkType[];
  position?: FlexJustify | undefined;
};
