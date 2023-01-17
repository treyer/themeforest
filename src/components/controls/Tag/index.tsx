import { StyledText, Wrapper } from "./styled";
import { TagProps } from "./types";

const Tag = ({ active, disabled, children, clickCallback }: TagProps) => {
  const callback = (text: string) => () => {
    if (clickCallback) {
      clickCallback(text);
    }
  };

  return (
    <Wrapper active={active} disabled={disabled} onClick={callback(children)}>
      <StyledText variant="headline7_bold" active={active} disabled={disabled}>
        {children}
      </StyledText>
    </Wrapper>
  );
};

Tag.defaultProps = {
  active: false,
  disabled: false,
};

export default Tag;
