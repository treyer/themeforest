import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection } from "types/index";
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
      <Typography variant="paragraph0_bold" color="primary">
        {count}
      </Typography>
      <Typography variant="paragraph2_regular" color="gray">
        {description}
      </Typography>
    </Flex>
  );
};

export default Counter;
