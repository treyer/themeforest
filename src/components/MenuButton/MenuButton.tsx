import { useState } from "react";
import { withTheme } from "styled-components";

import Typography from "components/Typography/Typography";
import { Theme, TypographyStyle } from "types/types";
import { Button, ButtonSimple, ButtonSubmenu } from "./components";

type Props = {
  to: string | null;
  children: string;
  isSubmenu?: boolean;
  theme: {
    fontColorMenuButton: string;
    currentTheme: Theme;
  };
};

const MenuButton = ({ to, children, isSubmenu, theme }: Props) => {
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  // const currentTheme = useContext(ThemeContext);

  const handleButtonSubmenuClick = () => {
    setIsSubmenuOpened((prev) => !prev);
  };

  return (
    <>
      {to !== null && (
        <Button to={to}>
          <Typography
            textStyle={TypographyStyle.Headline7_medium}
            color={theme.fontColorMenuButton}
          >
            {children}
          </Typography>
        </Button>
      )}
      {to === null && isSubmenu && (
        <ButtonSubmenu
          isSubmenuOpened={isSubmenuOpened}
          currentTheme={theme.currentTheme}
          onClick={handleButtonSubmenuClick}
        >
          <Typography
            textStyle={TypographyStyle.Headline7_medium}
            color={theme.fontColorMenuButton}
          >
            {children}
          </Typography>
        </ButtonSubmenu>
      )}
      {to === null && !isSubmenu && (
        <ButtonSimple>
          <Typography
            textStyle={TypographyStyle.Headline7_medium}
            color={theme.fontColorMenuButton}
          >
            {children}
          </Typography>
        </ButtonSimple>
      )}
    </>
  );
};

export default withTheme(MenuButton);
