type FlexJustify = "start" | "center" | "end" | "space-between";

type Mode = "light" | "dark";

export type BreadcrumbsLinkType = {
  name: string;
  url: string;
  isActive: boolean;
};

export type BreadcrumbsLinkProps = {
  link: BreadcrumbsLinkType;
  mode: Mode;
};

export type BreadcrumbsProps = {
  links: BreadcrumbsLinkType[];
  position?: FlexJustify | undefined;
  mode?: Mode | undefined;
};
