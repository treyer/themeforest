import { MenuButtonProps } from "./types";
import { StyledText, Wrapper } from "./styled";

const MenuButton = ({ link, disabled, children }: MenuButtonProps) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) event.preventDefault();
  };

  return (
    <Wrapper to={link} onClick={handleButtonClick}>
      <StyledText>{children}</StyledText>
    </Wrapper>
  );
};

MenuButton.defaultProps = {
  disabled: false,
};

export default MenuButton;
