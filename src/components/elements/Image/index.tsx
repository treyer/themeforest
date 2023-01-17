import { StyledImage, Wrapper } from "./styled";
import { ImageProps } from "./types";

const Image = ({ ...props }: ImageProps) => {
  return (
    <Wrapper {...props}>
      <StyledImage {...props} />
    </Wrapper>
  );
};

export default Image;
