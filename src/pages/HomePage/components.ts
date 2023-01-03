import styled from "styled-components";

export const TextBlack = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

export const TextGrey = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;

export const TextStressed = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ImageHome = styled.div`
  width: 100%;
  height: 590px;

  background-image: url("assets/photos/img_11.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LearnMoreBtnWrapper = styled.div`
  position: absolute;
  top: -60px;
  right: 635px;
`;
