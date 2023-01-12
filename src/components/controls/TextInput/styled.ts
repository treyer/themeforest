import styled from "styled-components";

import { TextInputProps } from "./types";

export const StyledLabel = styled.label<Omit<TextInputProps, "placeholder">>`
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

export const StyledInput = styled.input<TextInputProps>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ bordered }) => (bordered ? "54" : "35")}px;
  padding: ${({ bordered }) => `0 25px 0 ${bordered ? "25px" : "0"}`};
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
  ${({ bordered, theme }) =>
    bordered ? `border-radius: ${theme.radiuses[0]}px;` : ""}
  ${({ bordered, theme, disabled, isError }) =>
    `border${bordered ? "" : "-bottom"}: 1px solid ${
      disabled
        ? theme.colors.helperGray1
        : isError
        ? theme.colors.redError
        : theme.colors.gray
    };`}

  &:hover,
  &:focus {
    ${({ bordered, theme, disabled, isError }) =>
      `border${bordered ? "" : "-bottom"}: 1px solid ${
        disabled
          ? theme.colors.helperGray1
          : isError
          ? theme.colors.redError
          : theme.colors.primary
      };`}

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

export const StyledTextarea = styled(StyledInput).attrs({ as: "textarea" })`
  height: 140px;
  padding-top: 15px;
`;
