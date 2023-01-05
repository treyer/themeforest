export type BreadcrumbsLinkType = {
  name: string;
  url: string;
  isActive: boolean;
};

export type BreadcrumbsProps = {
  links: BreadcrumbsLinkType[];
};
