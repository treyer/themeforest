import Typography from "components/Typography/Typography";
import { ButtonRoundSize, TextColor, TextStyle } from "types/types";
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
            ? TextStyle.Headline8_semibold
            : TextStyle.Headline7_semibold
        }
        color={TextColor.White}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonRound;
