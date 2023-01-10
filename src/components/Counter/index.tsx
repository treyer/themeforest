import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection, TextColor, TextStyle } from "types/index";
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
        color={TextColor.Gray}
      >
        {description}
      </Typography>
    </Flex>
  );
};

export default Counter;
