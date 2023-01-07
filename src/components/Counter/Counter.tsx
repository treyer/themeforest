import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import { FlexAlign, FlexDirection, TextColor, TextStyle } from "types/types";
import { CounterProps } from "./types";

const Counter = ({
  count,
  description,
  width,
  align = FlexAlign.Start,
}: CounterProps) => {
  return (
    <Flex
      direction={FlexDirection.Column}
      columnGap={10}
      align={align}
      width={width}
    >
      <Typography
        textStyle={TextStyle.Paragraph0_bold}
        color={TextColor.Primary}
      >
        {count}
      </Typography>
      <Typography
        textStyle={TextStyle.Paragraph2_regular}
        color={TextColor.Grey}
      >
        {description}
      </Typography>
    </Flex>
  );
};

export default Counter;
