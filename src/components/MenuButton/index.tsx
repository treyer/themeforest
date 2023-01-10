import { useState } from "react";
import { withTheme } from "styled-components";

import Typography from "components/Typography";
import { Theme } from "types/index";
import { Button, ButtonSimple, ButtonSubmenu } from "./styled";

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

  const handleButtonSubmenuClick = () => {
    setIsSubmenuOpened((prev) => !prev);
  };

  return (
    <>
      {to !== null && (
        <Button to={to}>
          <Typography variant="headline7_medium" color="black">
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
          <Typography variant="headline7_medium" color="black">
            {children}
          </Typography>
        </ButtonSubmenu>
      )}
      {to === null && !isSubmenu && (
        <ButtonSimple>
          <Typography variant="headline7_medium" color="black">
            {children}
          </Typography>
        </ButtonSimple>
      )}
    </>
  );
};

export default withTheme(MenuButton);
