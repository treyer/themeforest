import Typography from "components/Typography";
import { SecondaryText, StyledNavLink, Wrapper } from "./styled";

type Props = {
  to: string;
  children: string;
};

const FooterLink = ({ to, children }: Props) => {
  return (
    <Wrapper>
      <StyledNavLink to={to}>
        <Typography variant="paragraph3_regular">
          <SecondaryText className="link-text">{children}</SecondaryText>
        </Typography>
      </StyledNavLink>
    </Wrapper>
  );
};

export default FooterLink;
