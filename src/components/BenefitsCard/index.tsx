import Icon from "components/Icon";
import Typography from "components/Typography";
import { IconColor, TextColor, TextStyle } from "types/index";
import { Wrapper } from "./styled";
import { BenefitsCardProps } from "./types";

const BenefitsCard = ({ iconUrl, headerText, children }: BenefitsCardProps) => {
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
        color={TextColor.Gray}
        marginTop={10}
      >
        {children}
      </Typography>
    </Wrapper>
  );
};

export default BenefitsCard;
