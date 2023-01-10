import { ICON_URLS } from "constants/iconPaths";
import { Direction, DirectionControlType } from "types/index";
import { StyledIcon } from "./styled";
import { DirectionControlProps } from "./types";

const IconDimensions = {
  desktop: { width: 12, height: 21 },
  mobile: { width: 9, height: 17 },
};

const DirectionControl = ({
  direction,
  type = DirectionControlType.Desktop,
  disabled = false,
}: DirectionControlProps) => {
  return (
    <StyledIcon
      className="icon-control"
      url={
        direction === Direction.Left
          ? ICON_URLS.ArrowLeft
          : ICON_URLS.ArrowRight
      }
      width={IconDimensions[type].width}
      height={IconDimensions[type].height}
      color={disabled ? "helperBlue3" : "secondary"}
      disabled={disabled}
    />
  );
};

export default DirectionControl;
