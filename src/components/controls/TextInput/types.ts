import { TextInputType } from "types/index";

export type TextInputProps = {
  type: TextInputType;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  isError?: boolean;
};
