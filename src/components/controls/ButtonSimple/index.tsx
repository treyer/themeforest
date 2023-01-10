import Typography from "components/Typography";
import { Button, ButtonOutlined } from "./styled";
import { ButtonSimpleMode, ButtonSimpleSize } from "types/index";
import { ButtonSimpleProps } from "./types";

const BUTTON_SIZES = {
  big: { width: 190, height: 54 },
  small: { width: 137, height: 44 },
};

const ButtonSimple = ({
  size,
  disabled,
  outlined,
  mode,
  width,
  height,
  children,
  onClickCallback,
}: ButtonSimpleProps) => {
  const finalWidth = width
    ? width
    : BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].width;
  const finalHeight = height
    ? height
    : BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].height;

  return (
    <>
      {outlined ? (
        <ButtonOutlined
          width={finalWidth}
          height={finalHeight}
          mode={mode}
          onClick={onClickCallback}
        >
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
      ) : (
        <Button
          disabled={disabled}
          width={finalWidth}
          height={finalHeight}
          mode={mode}
          onClick={onClickCallback}
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
      )}
    </>
  );
};

ButtonSimple.defaultProps = {
  size: ButtonSimpleSize.Small,
  disabled: false,
  outlined: false,
  mode: ButtonSimpleMode.Light,
};

export default ButtonSimple;
