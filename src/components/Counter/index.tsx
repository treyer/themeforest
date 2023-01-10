import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { CounterProps } from "./types";

const Counter = ({ count, description, ...rest }: CounterProps) => {
  return (
    <Flex direction="column" columnGap={10} {...rest}>
      <Typography variant="paragraph0_bold" color="primary">
        {count}
      </Typography>
      <Typography variant="paragraph2_regular" color="gray">
        {description}
      </Typography>
    </Flex>
  );
};

Counter.defaultProps = {
  align: "start",
};

export default Counter;
