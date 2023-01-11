import { StyledText, Wrapper } from "./styled";
import { TagProps } from "./types";

const Tag = ({ active, disabled, children }: TagProps) => {
  return (
    <Wrapper
      justify="center"
      paddingTop={3}
      paddingBottom={3}
      paddingLeft={11}
      paddingRight={11}
      active={active}
      disabled={disabled}
    >
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
