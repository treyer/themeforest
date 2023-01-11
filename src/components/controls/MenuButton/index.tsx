import { MenuButtonProps } from "./types";
import { StyledText, Wrapper } from "./styled";

const MenuButton = ({ link, children }: MenuButtonProps) => {
  return (
    <Wrapper to={link}>
      <StyledText>{children}</StyledText>
    </Wrapper>
  );
};

MenuButton.defaultProps = {
  isSubmenu: false,
};

export default MenuButton;
