import Typography from "components/Typography/Typography";
import { HeaderStyle } from "types/types";
import Button from "./components";

type Props = {
  to: string;
  children: string;
};

const MenuButton = ({ to, children }: Props) => {
  return (
    <Button to={to}>
      <Typography headerStyle={HeaderStyle.Headline7_medium}>
        {children}
      </Typography>
    </Button>
  );
};

export default MenuButton;
