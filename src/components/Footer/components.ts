import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
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

export const TextPrimary = styled.span`
  color: ${({ theme }) => theme.footerPrimaryColor};
`;

export const TextSecondary = styled.span`
  color: ${({ theme }) => theme.footerSecondaryColor};
`;

export const TextAdditional = styled.span`
  color: ${({ theme }) => theme.footerAdditionalColor};
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

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  margin-top: 20px;
`;

export const PolicyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 95px;

  max-width: 255px;
`;
