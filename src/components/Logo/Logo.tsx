import { useContext } from "react";

import LogoImage from "./components";
import ThemeContext from "context/ThemeContext";
import { LogoSize } from "types/types";

type Props = {
  type: LogoSize;
};

const dimensionsLarge = { width: "141px", height: "46px" };
const dimensionsSmall = { width: "92px", height: "30px" };

const Logo = ({ type }: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <LogoImage
      dimensions={type === LogoSize.Large ? dimensionsLarge : dimensionsSmall}
      src={`../../assets/svg/${
        themeContext === "light" ? "logo_blue.svg" : "logo_white.svg"
      }`}
    />
  );
};

export default Logo;
