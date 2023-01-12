import { useId } from "react";

import Flex from "components/elements/Flex";
import { StyledInput, StyledLabel, StyledTextarea } from "./styled";
import { TextInputProps } from "./types";

const TextInput = ({
  type,
  placeholder,
  label,
  disabled,
  isError,
  bordered,
  element,
}: TextInputProps) => {
  const id = useId();

  return (
    <Flex direction="column" align="start">
      {type === "labeled" && (
        <StyledLabel htmlFor={id} disabled={disabled} isError={isError}>
          {label}
        </StyledLabel>
      )}
      {element === "input" && (
        <StyledInput
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          isError={isError}
          bordered={bordered}
        />
      )}
      {element === "textarea" && (
        <StyledTextarea
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          isError={isError}
          bordered={bordered}
        />
      )}
    </Flex>
  );
};

TextInput.defaultProps = {
  type: "labeled",
  label: "",
  disabled: false,
  isError: false,
  bordered: false,
  element: "input",
};

export default TextInput;
