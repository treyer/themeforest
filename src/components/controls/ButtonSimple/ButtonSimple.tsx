import Typography from "components/Typography/Typography";
import { ButtonSimpleSize, TypographyStyle } from "types/types";
import { Button } from "./components";
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
            ? TypographyStyle.Headline7_semibold
            : TypographyStyle.Headline6_bold
        }
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ButtonSimple;
