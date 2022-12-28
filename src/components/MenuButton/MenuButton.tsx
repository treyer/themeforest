import { useContext, useState } from "react";

import Typography from "components/Typography/Typography";
import { TypographyStyle } from "types/types";
import { Button, ButtonSimple, ButtonSubmenu } from "./components";
import ThemeContext from "context/ThemeContext";

type Props = {
  to: string | null;
  children: string;
  isSubmenu?: boolean;
};

const MenuButton = ({ to, children, isSubmenu }: Props) => {
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const theme = useContext(ThemeContext);

  const handleButtonSubmenuClick = () => {
    setIsSubmenuOpened((prev) => !prev);
  };

  return (
    <>
      {to !== null && (
        <Button to={to}>
          <Typography textStyle={TypographyStyle.Headline7_medium}>
            {children}
          </Typography>
        </Button>
      )}
      {to === null && isSubmenu && (
        <ButtonSubmenu
          isSubmenuOpened={isSubmenuOpened}
          currentTheme={theme}
          onClick={handleButtonSubmenuClick}
        >
          <Typography textStyle={TypographyStyle.Headline7_medium}>
            {children}
          </Typography>
        </ButtonSubmenu>
      )}
      {to === null && !isSubmenu && (
        <ButtonSimple>
          <Typography textStyle={TypographyStyle.Headline7_medium}>
            {children}
          </Typography>
        </ButtonSimple>
      )}
    </>
  );
};

export default MenuButton;
