import Flex from "components/elements/Flex";
import { StyledButton, StyledInput } from "./styled";
import { TextInputWithButtonProps } from "./types";

const TextInputWithButton = ({
  disabled = false,
  isError = false,
}: TextInputWithButtonProps) => {
  return (
    <Flex width={445}>
      <StyledInput
        type="text"
        placeholder="Your email"
        disabled={disabled}
        isError={isError}
      ></StyledInput>
      <StyledButton disabled={disabled}>Send</StyledButton>
    </Flex>
  );
};

export default TextInputWithButton;
