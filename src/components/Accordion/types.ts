type AccordionType = "simple" | "advanced";

export interface AccordionProps {
  title: string;
  content: string;
  type?: AccordionType;
}

export interface HeaderWrapperProps {
  opened: boolean;
  type: AccordionType | undefined;
}

export interface ContentWrapperProps {
  type: AccordionType | undefined;
}
