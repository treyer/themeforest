import styled from "styled-components";

type Props = {
  dimensions: {
    width: string;
    height: string;
  };
};

const LogoImage = styled.img<Props>`
  width: ${(props) => props.dimensions.width};
  height: ${(props) => props.dimensions.height};
`;

export default LogoImage;
