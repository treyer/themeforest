import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection, FlexJustify } from "types/index";
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
      <Typography variant="headline6_bold">{personName}</Typography>
      <Typography variant="headline7_medium" color="gray">
        {personPosition}
      </Typography>
    </Flex>
  );
};

export default PersonDataBlock;
