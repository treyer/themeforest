import Logo from "components/Logo/Logo";
import Typography from "components/Typography/Typography";
import { LogoSize, TypographyStyle } from "types/types";
import {
  AdditionalData,
  ColumnDataWrapper,
  DescriptionWrapper,
  TextSecondary,
  TextPrimary,
  Inner,
  LeftBlock,
  MainData,
  RightBlock,
  SocialMediaWrapper,
  Wrapper,
  ColumnDataWrapperUl,
  PolicyBlock,
  TextAdditional,
  SocialIconDarkMode,
} from "./components";
import { SOCIAL_NETWORK_LIST } from "constants/common";
import FooterLink from "components/controls/FooterLink/FooterLink";

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <MainData>
          <LeftBlock>
            <Logo type={LogoSize.Large} />
            <DescriptionWrapper>
              <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                <TextSecondary>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </TextSecondary>
              </Typography>
            </DescriptionWrapper>
            <SocialMediaWrapper>
              {SOCIAL_NETWORK_LIST.map((el) => (
                <SocialIconDarkMode
                  key={el.id}
                  url={el.url}
                  width={24}
                  height={24}
                  color={"inherit"}
                />
              ))}
            </SocialMediaWrapper>
          </LeftBlock>
          <RightBlock>
            <div>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>Quick Link</TextPrimary>
              </Typography>
              <nav>
                <ColumnDataWrapperUl>
                  <FooterLink to="/">Home</FooterLink>
                  <FooterLink to="/solutions">Solutions</FooterLink>
                  <FooterLink to="/blog">Blog</FooterLink>
                  <FooterLink to="/contacts">Contacts</FooterLink>
                  <FooterLink to="/team">Our Team</FooterLink>
                  <FooterLink to="/about">About Us</FooterLink>
                  <FooterLink to="/services">Services</FooterLink>
                  <FooterLink to="/faqs">FAQ</FooterLink>
                </ColumnDataWrapperUl>
              </nav>
            </div>
            <div>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>Service</TextPrimary>
              </Typography>
              <nav>
                <ColumnDataWrapperUl>
                  <FooterLink to="/pages">Pages</FooterLink>
                  <FooterLink to="/elements">Elements</FooterLink>
                  <FooterLink to="/faqs">FAQ</FooterLink>
                  <FooterLink to="/pricing">Pricing</FooterLink>
                  <FooterLink to="/map">Site map</FooterLink>
                </ColumnDataWrapperUl>
              </nav>
            </div>
            <div>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>Contact Info</TextPrimary>
              </Typography>
              <ColumnDataWrapper>
                <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                  <TextSecondary>ensome@co.us</TextSecondary>
                </Typography>
                <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                  <TextSecondary> +1 601-201-5580</TextSecondary>
                </Typography>
                <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                  <TextSecondary>
                    1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                  </TextSecondary>
                </Typography>
              </ColumnDataWrapper>
            </div>
          </RightBlock>
        </MainData>
        <AdditionalData>
          <div>
            <Typography textStyle={TypographyStyle.Paragraph3_regular}>
              <TextAdditional>Ensome© 2022 All Rights Reserved</TextAdditional>
            </Typography>
          </div>
          <PolicyBlock>
            <Typography textStyle={TypographyStyle.Paragraph3_regular}>
              <TextAdditional>Privacy policy</TextAdditional>
            </Typography>
            <Typography textStyle={TypographyStyle.Paragraph3_regular}>
              <TextAdditional>Terms of us</TextAdditional>
            </Typography>
          </PolicyBlock>
        </AdditionalData>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
