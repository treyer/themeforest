import { StyledImage } from "./styled";
import { ImageProps } from "./types";

const Image = ({
  src,
  width,
  height,
  alt,
  marginTop = null,
  marginBottom = null,
  marginRight = null,
  marginLeft = null,
}: ImageProps) => {
  return (
    <StyledImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
    />
  );
};

export default Image;
