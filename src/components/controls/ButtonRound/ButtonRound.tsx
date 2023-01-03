import Typography from "components/Typography/Typography";
import { ButtonRoundSize, TypographyStyle } from "types/types";
import { Button } from "./components";
import { ButtonRoundProps } from "./types";

const ButtonRound = ({
  size = ButtonRoundSize.Small,
  disabled = false,
  children,
}: ButtonRoundProps) => {
  return (
    <Button size={size} disabled={disabled}>
      <Typography
        textStyle={
          size === ButtonRoundSize.Small
            ? TypographyStyle.Headline8_semibold
            : TypographyStyle.Headline7_semibold
        }
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonRound;
