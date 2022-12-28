import Typography from "components/Typography/Typography";
import { ButtonSize, ButtonType, TypographyStyle } from "types/types";
import {
  RoundButton,
  SquareButton,
  SquareButtonInner,
  SquareButtonIcon,
  SquareButtonIconWrapper,
} from "./components";

type Props = {
  size?: ButtonSize;
  type?: ButtonType;
  iconUrl?: string | null;
  filled?: boolean;
  disabled?: boolean;
  children: string;
};

const BUTTON_SIZES = {
  extraBig: { width: 218, height: 54 },
  big: { width: 190, height: 54 },
  standard: { width: 168, height: 44.5 },
  little: { width: 137, height: 44 },
};

const ICON_SIZES = {
  standard: { width: 24, height: 24 },
  extraBig: { width: 31.5, height: 31.5 },
};

const BUTTON_TEXT_STYLE = {
  extraBig: TypographyStyle.Headline6_bold,
  big: TypographyStyle.Headline6_bold,
  standard: TypographyStyle.Headline7_semibold,
  little: TypographyStyle.Headline7_semibold,
};

const Button = ({
  size = ButtonSize.Standard,
  type = ButtonType.Square,
  iconUrl = null,
  filled = false,
  disabled = false,
  children,
}: Props) => {
  if (type === ButtonType.Square) {
    return (
      <SquareButton
        size={BUTTON_SIZES[size]}
        filled={filled}
        disabled={disabled}
      >
        <SquareButtonInner>
          {(size === ButtonSize.Standard || size === ButtonSize.ExtraBig) &&
            iconUrl && (
              <SquareButtonIconWrapper
                width={ICON_SIZES[size].width}
                height={ICON_SIZES[size].height}
              >
                <SquareButtonIcon
                  className="icon"
                  url={iconUrl}
                  width={ICON_SIZES[size].width}
                  height={ICON_SIZES[size].height}
                />
              </SquareButtonIconWrapper>
            )}
          <Typography textStyle={BUTTON_TEXT_STYLE[size]}>
            {children}
          </Typography>
        </SquareButtonInner>
      </SquareButton>
    );
  }
  //TODO: round Button
  return (
    <RoundButton>
      <Typography textStyle={TypographyStyle.Headline6_bold}>
        {children}
      </Typography>
    </RoundButton>
  );
};

export default Button;
