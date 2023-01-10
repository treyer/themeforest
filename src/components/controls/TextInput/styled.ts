import styled from "styled-components";
import { TextInputProps } from "./types";

type StyledLabelProps = {
  disabled: boolean;
  isError: boolean;
};

type StyledInputLabeled = {
  disabled: boolean;
  isError: boolean;
};

export const StyledInputSimple = styled.input<Omit<TextInputProps, "type">>``;

export const StyledLabel = styled.label<StyledLabelProps>`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  color: ${({ theme, disabled, isError }) =>
    disabled
      ? theme.colors.helperGray1
      : isError
      ? theme.colors.redError
      : theme.colors.gray};
`;

export const StyledInputLabeled = styled.input<StyledInputLabeled>`
  box-sizing: border-box;

  width: 345px;
  height: 35px;
  padding: 0 20px 0 0;

  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme, disabled, isError }) =>
    disabled
      ? theme.colors.helperGray1
      : isError
      ? theme.colors.redError
      : theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-bottom: 1px solid
    ${({ theme, disabled, isError }) =>
      disabled
        ? theme.colors.helperGray1
        : isError
        ? theme.colors.redError
        : theme.colors.gray};

  &:hover,
  &:focus {
    border-bottom: 1px solid
      ${({ theme, disabled, isError }) =>
        disabled
          ? theme.colors.helperGray1
          : isError
          ? theme.colors.redError
          : theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme, disabled, isError }) =>
      disabled
        ? theme.colors.helperGray1
        : isError
        ? theme.colors.redError
        : theme.colors.black};
  }

  &:hover::placeholder {
    color: ${({ theme, disabled, isError }) =>
      disabled
        ? theme.colors.helperGray1
        : isError
        ? theme.colors.redError
        : theme.colors.gray};
  }
`;
