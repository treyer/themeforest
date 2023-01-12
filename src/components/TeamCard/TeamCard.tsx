import Image from "components/elements/Image";
import Typography from "components/Typography";
import { ImageWrapper, InfoWrapper } from "./styled";
import { TeamCardProps } from "./types";

const IMG_DIMENSIONS = {
  standard: { width: 350, height: 500 },
};

const TeamCard = ({
  type,
  imgUrl,
  name,
  position,
  verticalOffset,
}: TeamCardProps) => {
  return (
    <ImageWrapper
      width={IMG_DIMENSIONS[type ? type : "standard"].width}
      verticalOffset={verticalOffset}
    >
      <Image
        src={imgUrl}
        width={IMG_DIMENSIONS[type ? type : "standard"].width}
        height={IMG_DIMENSIONS[type ? type : "standard"].height}
        alt={name}
      />
      <InfoWrapper>
        <Typography variant="headline5_bold" color="white">
          {name}
        </Typography>
        <Typography variant="paragraph2_regular" color="white">
          {position}
        </Typography>
      </InfoWrapper>
    </ImageWrapper>
  );
};

TeamCard.defaultProps = {
  verticalOffset: 0,
};

export default TeamCard;
