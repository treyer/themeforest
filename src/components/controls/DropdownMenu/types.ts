export type ButtonData = {
  id: number;
  link: string;
  description: string;
};

export type DropDownMenuProps = {
  description: string;
  buttonsList: ButtonData[];
};

export type DropdownProps = {
  buttonsList: ButtonData[];
  onClickCallback: () => void;
};
