import ReadMoreButton from "components/controls/ReadMoreButton/ReadMoreButton";

import Typography from "components/Typography/Typography";
import { TextColor, TextElement, TextStyle } from "types/types";
import { Wrapper } from "./components";
import { BlogCardProps } from "./types";

const BlogCard = ({ imgUrl, date, header, text }: BlogCardProps) => {
  return (
    <Wrapper>
      <img src={imgUrl} width={350} height={200} />
      <Typography
        textStyle={TextStyle.Paragraph3_regular}
        color={TextColor.Grey}
        textElement={TextElement.Div}
        marginTop={20}
      >
        {date}
      </Typography>
      <Typography
        textStyle={TextStyle.Headline4_bold}
        color={TextColor.Black}
        textElement={TextElement.Div}
        height={66}
        marginTop={12}
      >
        {header}
      </Typography>
      <Typography
        textStyle={TextStyle.Paragraph2_regular}
        color={TextColor.Grey}
        textElement={TextElement.Div}
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
