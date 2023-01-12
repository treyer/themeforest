type TextInputType = "simple" | "labeled";

type TextInputElement = "input" | "textarea";

export type TextInputProps = {
  placeholder: string;
  type?: TextInputType;
  label?: string | undefined;
  disabled?: boolean | undefined;
  isError?: boolean | undefined;
  bordered?: boolean | undefined;
  element?: TextInputElement | undefined;
};
