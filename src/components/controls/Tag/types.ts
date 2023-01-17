export type TagProps = {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  clickCallback?: (text: string) => void | undefined;
  children: string;
};

export type WrapperProps = {
  active: boolean | undefined;
  disabled: boolean | undefined;
};

export type StyledTextProps = {
  active: boolean | undefined;
  disabled: boolean | undefined;
};
