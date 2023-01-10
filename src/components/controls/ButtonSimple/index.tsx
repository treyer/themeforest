import Typography from "components/Typography";
import { Button, ButtonOutlined } from "./styled";
import { ButtonSimpleMode, ButtonSimpleSize } from "types/index";
import { ButtonSimpleProps } from "./types";

const BUTTON_SIZES = {
  big: { width: 190, height: 54 },
  small: { width: 137, height: 44 },
};

const ButtonSimple = ({
  size = ButtonSimpleSize.Small,
  disabled = false,
  outlined = false,
  mode = ButtonSimpleMode.Light,
  width = null,
  height = null,
  children,
}: ButtonSimpleProps) => {
  const finalWidth = width
    ? width
    : BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].width;
  const finalHeight = height
    ? height
    : BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].height;

  if (!outlined) {
    return (
      <Button
        disabled={disabled}
        width={finalWidth}
        height={finalHeight}
        mode={mode}
      >
        <Typography
          variant={
            size === ButtonSimpleSize.Small
              ? "headline7_semibold"
              : "headline6_bold"
          }
          color={mode === ButtonSimpleMode.Light ? "white" : "primary"}
        >
          {children}
        </Typography>
      </Button>
    );
  }
  if (outlined) {
    return (
      <ButtonOutlined width={finalWidth} height={finalHeight} mode={mode}>
        <Typography
          variant={
            size === ButtonSimpleSize.Small
              ? "headline7_semibold"
              : "headline6_bold"
          }
          color={mode === ButtonSimpleMode.Light ? "primary" : "white"}
        >
          {children}
        </Typography>
      </ButtonOutlined>
    );
  }
  return null;
};

export default ButtonSimple;
