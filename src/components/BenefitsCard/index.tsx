import ReadMoreButton from "components/controls/ReadMoreButton";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { Wrapper } from "./styled";

import { BenefitsCardProps } from "./types";

const BenefitsCard = ({
  iconUrl,
  iconWidth,
  iconHeight,
  headerText,
  link,
  type,
  children,
}: BenefitsCardProps) => {
  return (
    <Wrapper>
      <Icon
        url={iconUrl}
        width={type === "advanced" ? iconWidth ?? 50 : 36}
        height={type === "advanced" ? iconHeight ?? 50 : 36}
        color="primary"
      />
      <Typography
        variant={type === "advanced" ? "headline4_bold" : "headline5_bold"}
        marginTop={20}
      >
        {headerText}
      </Typography>
      <Typography
        variant={
          type === "advanced" ? "paragraph2_regular" : "paragraph3_regular"
        }
        color="gray"
        marginTop={10}
        marginBottom={link ? 20 : 0}
      >
        {children}
      </Typography>
      {link && <ReadMoreButton />}
    </Wrapper>
  );
};

export default BenefitsCard;
