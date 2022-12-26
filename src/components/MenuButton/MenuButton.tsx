import NavButton from "./components";

type Props = {
  to: string;
  children: string;
};

const MenuButton = ({ to, children }: Props) => {
  return <NavButton to={to}>{children}</NavButton>;
};

export default MenuButton;
