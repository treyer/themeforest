import ReadMoreButton from "components/controls/ReadMoreButton";
import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Typography from "components/Typography";
import { Wrapper } from "./styled";
import { PostCardProps } from "./types";

const CARD_DIMENSIONS = {
  middle: { maxWidth: 635, height: 185 },
  small: { maxWidth: 445, height: 126 },
};

const IMG_DIMENSIONS = {
  middle: { width: 215, height: 171 },
  small: { width: 190, height: 114 },
};

const PostCard = ({ type, imgUrl, date, header, text }: PostCardProps) => {
  return (
    <Wrapper
      maxWidth={CARD_DIMENSIONS[type ? type : "middle"].maxWidth}
      height={CARD_DIMENSIONS[type ? type : "middle"].height}
    >
      <Image
        src={imgUrl}
        width={IMG_DIMENSIONS[type ? type : "middle"].width}
        height={IMG_DIMENSIONS[type ? type : "middle"].height}
        alt={header}
      />
      <Flex direction="column" align="start">
        <Typography variant="paragraph3_regular" color="gray">
          {date}
        </Typography>
        <Typography
          variant="headline6_bold"
          marginTop={15}
          marginBottom={type === "small" ? 15 : 0}
        >
          {header}
        </Typography>
        {type === "middle" && (
          <Typography variant="paragraph2_regular" marginTop={10} color="gray">
            {text}
          </Typography>
        )}
        {type === "small" && <ReadMoreButton />}
      </Flex>
    </Wrapper>
  );
};

PostCard.defaultProps = { type: "middle" };

export default PostCard;
