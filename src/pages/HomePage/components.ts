import styled from "styled-components";

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

export const ImageSolutions = styled(ImageHome)`
  height: 740px;

  background-image: url("assets/photos/02_img_10.jpg");
`;

export const LearnMoreBtnWrapper = styled.div`
  position: absolute;
  top: -60px;
  right: 635px;
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;

  width: 235px;
  height: 60px;
`;
