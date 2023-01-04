import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { IconColor, TextColor, TextStyle } from "types/types";
import { Wrapper } from "./components";

type Props = {
  iconUrl: string;
  headerText: string;
  children: string;
};

const BenefitsCard = ({ iconUrl, headerText, children }: Props) => {
  return (
    <Wrapper>
      <Icon url={iconUrl} width={36} height={36} color={IconColor.Primary} />
      <Typography
        textStyle={TextStyle.Headline5_bold}
        color={TextColor.Black}
        marginTop={20}
      >
        {headerText}
      </Typography>
      <Typography
        textStyle={TextStyle.Paragraph3_regular}
        color={TextColor.Grey}
        marginTop={10}
      >
        {children}
      </Typography>
    </Wrapper>
  );
};

export default BenefitsCard;
