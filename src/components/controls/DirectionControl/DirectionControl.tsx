import { ICON_URLS } from "constants/iconPaths";
import { Direction, DirectionControlType, IconColor } from "types/types";
import { StyledIcon } from "./components";
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
      color={disabled ? IconColor.HelperBlue3 : IconColor.Secondary}
      disabled={disabled}
    />
  );
};

export default DirectionControl;
