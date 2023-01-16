import { useSelector } from "react-redux";

import Icon from "components/Icon";
import { ICON_URLS } from "constants/iconPaths";
import { ButtonWrapper } from "./styled";
import { ButtonVideoProps } from "./types";
import { RootState } from "store/index";
import { selectTheme } from "store/selectors/selectors";
import { Theme } from "types/index";
import Typography from "components/Typography";

const ButtonVideo = ({ clickCallback, children }: ButtonVideoProps) => {
  const theme = useSelector((state: RootState) => selectTheme(state));

  return (
    <ButtonWrapper onClick={clickCallback}>
      <Icon
        className="button-icon"
        url={ICON_URLS.IconPlayCircle}
        width={24}
        height={24}
        color={theme === Theme.Light ? "white" : "secondary"}
      />
      <Typography
        className="button-text"
        variant="headline7_semibold"
        color={theme === Theme.Light ? "white" : "secondary"}
      >
        {children}
      </Typography>
    </ButtonWrapper>
  );
};

export default ButtonVideo;
