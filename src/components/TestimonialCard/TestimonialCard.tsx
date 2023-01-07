import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import {
  FlexDirection,
  TestimonialCardVariant,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";
import { PersonImg, Wrapper } from "./components";
import PersonDataBlock from "./PersonDataBlock";
import { TestimonialCardProps } from "./types";

const TestimonialCard = ({
  imgUrl,
  personName,
  personPosition,
  cardVariant = TestimonialCardVariant.ImgInside,
  children,
}: TestimonialCardProps) => {
  return (
    <Wrapper>
      <Flex
        rowGap={cardVariant === TestimonialCardVariant.ImgOutside ? 35 : 25}
        direction={FlexDirection.Column}
      >
        <Flex columnGap={25}>
          <PersonImg src={imgUrl} />
          {cardVariant === TestimonialCardVariant.ImgInside ? (
            <PersonDataBlock
              personName={personName}
              personPosition={personPosition}
            />
          ) : (
            <></>
          )}
        </Flex>
        <Typography
          textStyle={TextStyle.Paragraph2_regular}
          color={TextColor.Grey}
          textElement={TextElement.Div}
        >
          {children}
        </Typography>
        {cardVariant === TestimonialCardVariant.ImgOutside ? (
          <PersonDataBlock
            personName={personName}
            personPosition={personPosition}
          />
        ) : (
          <></>
        )}
      </Flex>
    </Wrapper>
  );
};

export default TestimonialCard;
