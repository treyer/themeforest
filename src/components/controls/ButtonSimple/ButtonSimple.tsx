import Typography from "components/Typography/Typography";
import { Button } from "./components";
import { ButtonSimpleSize, TextColor, TextStyle } from "types/types";
import { ButtonSimpleProps } from "./types";

const ButtonSimple = ({
  size = ButtonSimpleSize.Small,
  disabled = false,
  children,
}: ButtonSimpleProps) => {
  return (
    <Button size={size} disabled={disabled}>
      <Typography
        textStyle={
          size === ButtonSimpleSize.Small
            ? TextStyle.Headline7_semibold
            : TextStyle.Headline6_bold
        }
        color={TextColor.White}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonSimple;
