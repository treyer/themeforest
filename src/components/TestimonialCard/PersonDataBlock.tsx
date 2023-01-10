import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { PersonDataBlockProps } from "./types";

const PersonDataBlock = ({
  personName,
  personPosition,
}: PersonDataBlockProps) => {
  return (
    <Flex direction="column" rowGap={4} justify="center" align="start">
      <Typography variant="headline6_bold">{personName}</Typography>
      <Typography variant="headline7_medium" color="gray">
        {personPosition}
      </Typography>
    </Flex>
  );
};

export default PersonDataBlock;
