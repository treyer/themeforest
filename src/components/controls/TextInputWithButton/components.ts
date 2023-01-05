import styled from "styled-components";

type StyledInputProps = {
  disabled: boolean;
  isError: boolean;
};

type StyledButtonProps = {
  disabled: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;

  width: 320px;
  height: 54px;
  padding: 15px 25px;

  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme, disabled, isError }) =>
    disabled
      ? theme.colors.grey
      : isError
      ? theme.colors.redError
      : theme.colors.black};
  background-color: ${({ theme, disabled, isError }) =>
    disabled
      ? theme.colors.lightGrey
      : isError
      ? theme.colors.lightRed
      : theme.colors.helperBlue3};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.radiuses[0]}px;
  border-bottom-left-radius: ${({ theme }) => theme.radiuses[0]}px;

  &::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.black};
  }

  &:hover::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;

  width: 125px;
  height: 54px;

  font-family: "Manrope";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-top-right-radius: ${({ theme }) => theme.radiuses[0]}px;
  border-bottom-right-radius: ${({ theme }) => theme.radiuses[0]}px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
  }

  &:active {
    opacity: 1;
  }
`;
