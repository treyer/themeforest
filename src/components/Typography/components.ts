import styled from "styled-components";
import { headerStyles, paragraphStyles } from "styles/typography";

import { HeaderStyle, ParagraphStyle } from "types/types";

type Props = {
  headerStyle?: HeaderStyle;
  paragraphStyle?: ParagraphStyle;
};

const StyledText = styled.span<Props>`
  ${({ headerStyle }) =>
    headerStyle
      ? Object.entries(headerStyles[headerStyle]).map(
          (el) => `${el[0]}: ${el[1]};`,
        )
      : ""}
  ${({ paragraphStyle }) =>
    paragraphStyle
      ? Object.entries(paragraphStyles[paragraphStyle]).map(
          (el) => `${el[0]}: ${el[1]};`,
        )
      : ""}
`;

export default StyledText;
