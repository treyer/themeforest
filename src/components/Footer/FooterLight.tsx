import FooterLink from "components/controls/FooterLink/FooterLink";
import Flex from "components/elements/Flex/Flex";
import Logo from "components/Logo/Logo";
import Typography from "components/Typography/Typography";
import { SOCIAL_NETWORK_LIST } from "constants/common";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  LogoSize,
  TypographyStyle,
} from "types/types";
import {
  BottomBlockLight,
  ColumnDataWrapperLight,
  ColumnLight,
  InnerLight,
  LinksBlockLight,
  MiddleBlockLight,
  SocialIconLightMode,
  TextAdditional,
  TextPrimary,
  TextPrimaryHeader,
  TextSecondaryContacts,
  TextWithArrow,
  TextWithArrowAdditional,
  UpBlockLight,
  Wrapper,
} from "./components";

const FooterLight = () => {
  return (
    <Wrapper>
      <InnerLight>
        <UpBlockLight>
          <Logo type={LogoSize.Large} />
          <LinksBlockLight>
            <ColumnLight>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>About</TextPrimary>
              </Typography>
              <nav>
                <ColumnDataWrapperLight>
                  <FooterLink to="/">Home</FooterLink>
                  <FooterLink to="/about">About Us</FooterLink>
                  <FooterLink to="/services">Services</FooterLink>
                  <FooterLink to="/solutions">Solutions</FooterLink>
                </ColumnDataWrapperLight>
              </nav>
            </ColumnLight>
            <div>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>Information</TextPrimary>
              </Typography>
              <nav>
                <ColumnDataWrapperLight>
                  <FooterLink to="/contacts">Contacts</FooterLink>
                  <FooterLink to="/team">Our team</FooterLink>
                  <FooterLink to="/blog">Blog</FooterLink>
                  <FooterLink to="/faqs">FAQ</FooterLink>
                </ColumnDataWrapperLight>
              </nav>
            </div>
            <ColumnLight>
              <Typography textStyle={TypographyStyle.Headline6_bold}>
                <TextPrimary>Service</TextPrimary>
              </Typography>
              <nav>
                <ColumnDataWrapperLight>
                  <FooterLink to="/pages">Pages</FooterLink>
                  <FooterLink to="/elements">Elements</FooterLink>
                  <FooterLink to="/map">Site map</FooterLink>
                  <FooterLink to="/pricing">Pricing</FooterLink>
                  <FooterLink to="/faqs">FAQ</FooterLink>
                </ColumnDataWrapperLight>
              </nav>
            </ColumnLight>
          </LinksBlockLight>
        </UpBlockLight>
        <MiddleBlockLight>
          <Flex
            direction={FlexDirection.Column}
            justify={FlexJustify.Start}
            align={FlexAlign.Left}
            width={480}
            marginTop={40}
          >
            <Typography textStyle={TypographyStyle.Headline6_bold}>
              <TextPrimaryHeader>Contacts</TextPrimaryHeader>
            </Typography>
            <Flex>
              <Flex direction={FlexDirection.Column} align={FlexAlign.Left}>
                <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                  <TextSecondaryContacts>+1 601-201-5580</TextSecondaryContacts>
                </Typography>
                <Typography textStyle={TypographyStyle.Headline7_semibold}>
                  <TextWithArrow>ensome@info.co.us</TextWithArrow>
                </Typography>
              </Flex>
              <Flex direction={FlexDirection.Column} align={FlexAlign.Left}>
                <Typography textStyle={TypographyStyle.Paragraph3_regular}>
                  <TextSecondaryContacts>
                    1642&nbsp;Washington&nbsp;Avenue,&nbsp;Jackson,&nbsp;MS,&nbsp;39201
                  </TextSecondaryContacts>
                </Typography>
                <Typography textStyle={TypographyStyle.Headline7_semibold}>
                  <TextWithArrow>Driving directions</TextWithArrow>
                </Typography>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={FlexDirection.Column}
            justify={FlexJustify.Start}
            align={FlexAlign.Left}
            width={225}
            marginTop={40}
            marginRight={30}
          >
            <Typography textStyle={TypographyStyle.Headline6_bold}>
              <TextPrimaryHeader>Social</TextPrimaryHeader>
            </Typography>
            <Flex width={200}>
              {SOCIAL_NETWORK_LIST.map((el) => (
                <SocialIconLightMode
                  key={el.id}
                  url={el.url}
                  width={24}
                  height={24}
                  color={"inherit"}
                />
              ))}
            </Flex>
          </Flex>
        </MiddleBlockLight>
        <BottomBlockLight>
          <Flex width={293}>
            <Typography textStyle={TypographyStyle.Headline7_semibold}>
              <TextWithArrowAdditional>Privacy policy</TextWithArrowAdditional>
            </Typography>
            <Typography textStyle={TypographyStyle.Headline7_semibold}>
              <TextWithArrowAdditional>Terms of us</TextWithArrowAdditional>
            </Typography>
          </Flex>
          <Flex justify={FlexJustify.End} marginRight={25}>
            <Typography textStyle={TypographyStyle.Paragraph3_regular}>
              <TextAdditional>
                © 2022 Ensome. All Rights Reserved.
              </TextAdditional>
            </Typography>
          </Flex>
        </BottomBlockLight>
      </InnerLight>
    </Wrapper>
  );
};

export default FooterLight;
