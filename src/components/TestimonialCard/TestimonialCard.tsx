import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";
import { PersonImg, Wrapper } from "./components";
import { TestimonialCardProps } from "./types";

const TestimonialCard = ({
  imgUrl,
  personName,
  personPosition,
  children,
}: TestimonialCardProps) => {
  return (
    <Wrapper>
      <Flex columnGap={25}>
        <PersonImg src={imgUrl} />
        <Flex
          direction={FlexDirection.Column}
          rowGap={4}
          justify={FlexJustify.Center}
          align={FlexAlign.Start}
        >
          <Typography
            textStyle={TextStyle.Headline6_bold}
            color={TextColor.Black}
          >
            {personName}
          </Typography>
          <Typography
            textStyle={TextStyle.Headline7_medium}
            color={TextColor.Grey}
          >
            {personPosition}
          </Typography>
        </Flex>
      </Flex>
      <Typography
        textStyle={TextStyle.Paragraph2_regular}
        color={TextColor.Grey}
        textElement={TextElement.Div}
        marginTop={25}
      >
        {children}
      </Typography>
    </Wrapper>
  );
};

export default TestimonialCard;
