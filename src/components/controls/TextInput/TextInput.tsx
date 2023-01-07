import { useId } from "react";

import Flex from "components/elements/Flex/Flex";
import { FlexAlign, FlexDirection, TextInputType } from "types/types";
import {
  StyledInputLabeled,
  StyledInputSimple,
  StyledLabel,
} from "./components";
import { TextInputProps } from "./types";

const TextInput = ({
  type = TextInputType.Simple,
  placeholder,
  label = "",
  disabled = false,
  isError = false,
}: TextInputProps) => {
  const id = useId();

  if (type === TextInputType.Simple) {
    return (
      <StyledInputSimple
        disabled={disabled}
        isError={isError}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <Flex
        direction={FlexDirection.Column}
        align={FlexAlign.Start}
        width={345}
      >
        <StyledLabel htmlFor={id} disabled={disabled} isError={isError}>
          {label}
        </StyledLabel>
        <StyledInputLabeled
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          isError={isError}
        ></StyledInputLabeled>
      </Flex>
    );
  }
};

export default TextInput;
