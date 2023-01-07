import { TextInputType } from "types/types";

export type TextInputProps = {
  type: TextInputType;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  isError?: boolean;
};
