import Typography from "components/Typography/Typography";
import { TypographyStyle } from "types/types";
import { SecondaryText, StyledNavLink, Wrapper } from "./components";

type Props = {
  to: string;
  children: string;
};

const FooterLink = ({ to, children }: Props) => {
  return (
    <Wrapper>
      <StyledNavLink to={to}>
        <Typography textStyle={TypographyStyle.Paragraph3_regular}>
          <SecondaryText className="link-text">{children}</SecondaryText>
        </Typography>
      </StyledNavLink>
    </Wrapper>
  );
};

export default FooterLink;
