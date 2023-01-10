import Icon from "components/Icon";
import Typography from "components/Typography";
import { Wrapper } from "./styled";

import { BenefitsCardProps } from "./types";

const BenefitsCard = ({ iconUrl, headerText, children }: BenefitsCardProps) => {
  return (
    <Wrapper>
      <Icon url={iconUrl} width={36} height={36} color="primary" />
      <Typography variant="headline5_bold" marginTop={20}>
        {headerText}
      </Typography>
      <Typography variant="paragraph3_regular" color="gray" marginTop={10}>
        {children}
      </Typography>
    </Wrapper>
  );
};

export default BenefitsCard;
