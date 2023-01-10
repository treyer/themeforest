import ReadMoreButton from "components/controls/ReadMoreButton";

import Typography from "components/Typography";
import { CardImage, Wrapper } from "./styled";
import { BlogCardProps } from "./types";

const BlogCard = ({ imgUrl, date, header, text }: BlogCardProps) => {
  return (
    <Wrapper>
      <CardImage src={imgUrl} width={350} height={200} />
      <Typography
        variant="paragraph3_regular"
        color="gray"
        element="div"
        marginTop={20}
      >
        {date}
      </Typography>
      <Typography
        variant="headline4_bold"
        element="div"
        height={66}
        marginTop={12}
      >
        {header}
      </Typography>
      <Typography
        variant="paragraph2_regular"
        color="gray"
        element="div"
        marginTop={12}
        marginBottom={20}
      >
        {text}
      </Typography>
      <ReadMoreButton />
    </Wrapper>
  );
};

export default BlogCard;
