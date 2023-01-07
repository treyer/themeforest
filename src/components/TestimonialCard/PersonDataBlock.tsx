import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  TextColor,
  TextStyle,
} from "types/types";
import { PersonDataBlockProps } from "./types";

const PersonDataBlock = ({
  personName,
  personPosition,
}: PersonDataBlockProps) => {
  return (
    <Flex
      direction={FlexDirection.Column}
      rowGap={4}
      justify={FlexJustify.Center}
      align={FlexAlign.Start}
    >
      <Typography textStyle={TextStyle.Headline6_bold} color={TextColor.Black}>
        {personName}
      </Typography>
      <Typography textStyle={TextStyle.Headline7_medium} color={TextColor.Grey}>
        {personPosition}
      </Typography>
    </Flex>
  );
};

export default PersonDataBlock;
