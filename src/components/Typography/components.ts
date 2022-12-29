import styled from "styled-components";
import { typographyStyles } from "styles/typography";

import { TypographyStyle } from "types/types";

type Props = {
  textStyle: TypographyStyle;
  color: string | undefined;
};

const StyledText = styled.span<Props>`
  ${({ textStyle }) =>
    Object.entries(typographyStyles[textStyle]).map(
      (el) => `${el[0]}: ${el[1]};`,
    )}

  ${({ color }) => (color ? `color: ${color}` : "")};
`;

export default StyledText;
