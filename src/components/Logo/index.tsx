import { useSelector } from "react-redux";

import LogoImage from "./styled";
import { LogoSize, Theme } from "types/index";
import { RootState } from "store/index";
import { selectTheme } from "store/selectors/selectors";

type Props = {
  type: LogoSize;
};

const dimensionsLarge = { width: "141px", height: "46px" };
const dimensionsSmall = { width: "92px", height: "30px" };

const Logo = ({ type }: Props) => {
  const theme = useSelector((state: RootState) => selectTheme(state));

  return (
    <LogoImage
      dimensions={type === LogoSize.Large ? dimensionsLarge : dimensionsSmall}
      src={`../../assets/svg/${
        theme === Theme.Light ? "logo_blue.svg" : "logo_white.svg"
      }`}
    />
  );
};

export default Logo;
