import { StyledA } from "./components";

import { TypographyAProps } from "./types";

const TypographyA = ({ href, children }: TypographyAProps) => {
  return <StyledA href={href}>{children}</StyledA>;
};

export default TypographyA;
