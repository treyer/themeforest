import Icon from "components/Icon/Icon";
import styled from "styled-components";

export const TextPrimary = styled.span`
  color: ${({ theme }) => theme.footerPrimaryColor};
`;

export const TextPrimaryHeader = styled(TextPrimary)`
  display: block;

  margin-bottom: 15px;
`;

export const TextSecondary = styled.span`
  color: ${({ theme }) => theme.footerSecondaryColor};
`;

export const TextSecondaryContacts = styled(TextSecondary)`
  display: block;

  margin-bottom: 10px;
`;

export const TextAdditional = styled.span`
  color: ${({ theme }) => theme.footerAdditionalColor};
`;

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.footerBgColor};
  padding: 0 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 530px;
  max-width: 1110px;
  min-width: ${({ theme }) => theme.size.mobileM};
  margin: 0 auto;
`;

export const InnerLight = styled(Inner)`
  height: 565px;
`;

export const MainData = styled.div`
  display: flex;
  justify-content: space-between;

  height: 342px;
  padding: 50px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue2};
`;

export const AdditionalData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 88px;
`;

export const UpBlockLight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  height: 284px;
  padding-top: 56px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue3};
`;

export const MiddleBlockLight = styled(UpBlockLight)`
  display: flex;

  height: 177px;
  padding-top: 0;
`;

export const BottomBlockLight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  height: 100%;
  max-width: 285px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 20px;
`;

export const LinksBlockLight = styled.div`
  display: flex;
  justify-content: space-between;

  width: 445px;
  margin-top: 6px;
`;

export const RightBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;

  width: 100%;
  height: 100%;
  margin-top: 10px;
  max-width: 635px;
`;

export const RightBlockColumn = styled.div``;

export const ColumnDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;

  margin-top: 31px;
`;

export const ColumnDataWrapperUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;

  margin: 31px 0 0 0;
  padding: 0;
`;

export const ColumnLight = styled.div`
  width: 60px;
`;

export const ColumnDataWrapperLight = styled(ColumnDataWrapperUl)`
  margin: 10px 0 0 0;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  margin-top: 20px;
`;

export const SocialMediaWrapperLight = styled(SocialMediaWrapper)`
  margin-top: 0;
`;

export const PolicyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 95px;

  max-width: 255px;
`;

export const SocialIconDarkMode = styled(Icon)`
  background-color: ${({ theme }) => theme.footerPrimaryColor};
`;

export const SocialIconLightMode = styled(Icon)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const IconArrow = styled(Icon)`
  margin-left: 7px;

  background-color: ${({ theme }) => theme.footerSecondaryColor};
`;

export const TextWithArrow = styled(TextSecondary)`
  color: ${({ theme }) => theme.footerSecondaryColor};

  &:after {
    content: "→";
    margin-left: 7px;
  }
`;

export const TextWithArrowAdditional = styled(TextWithArrow)`
  color: ${({ theme }) => theme.footerAdditionalColor};
`;
