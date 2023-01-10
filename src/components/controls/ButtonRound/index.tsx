import Typography from "components/Typography";
import { ButtonRoundSize } from "types/index";
import { Button } from "./styled";
import { ButtonRoundProps } from "./types";

const ButtonRound = ({
  size = ButtonRoundSize.Small,
  disabled = false,
  children,
}: ButtonRoundProps) => {
  return (
    <Button size={size} disabled={disabled}>
      <Typography
        variant={
          size === ButtonRoundSize.Small
            ? "headline8_semibold"
            : "headline7_semibold"
        }
        color="white"
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonRound;
