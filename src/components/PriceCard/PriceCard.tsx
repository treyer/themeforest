import ButtonSimple from "components/controls/ButtonSimple/ButtonSimple";
import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";
import { Wrapper } from "./components";
import ServiceItem from "./ServiceItem";
import { PriceCardProps } from "./types";

const PriceCard = ({
  name,
  services,
  isActive = false,
  priceMonth,
  priceYear,
}: PriceCardProps) => {
  return (
    <Wrapper isActive={isActive}>
      <Flex direction={FlexDirection.Column} align={FlexAlign.Start}>
        <Typography
          textStyle={TextStyle.Headline6_bold}
          color={isActive ? TextColor.White : TextColor.Black}
        >
          {name}
        </Typography>
        <Flex>
          <Typography
            textStyle={TextStyle.Headline3_1_extrabold}
            color={isActive ? TextColor.White : TextColor.Black}
            textElement={TextElement.Div}
            width={123}
          >
            {priceMonth}
          </Typography>
          <Flex width={92}>
            <ButtonSimple width={41} height={32}>
              Mo
            </ButtonSimple>
            <ButtonSimple width={41} height={32} outlined>
              Yr
            </ButtonSimple>
          </Flex>
        </Flex>
        <Flex marginTop={40}>
          <ButtonSimple width={215} height={44}>
            Choose plan
          </ButtonSimple>
        </Flex>
        <Flex direction={FlexDirection.Column} marginTop={30} rowGap={16}>
          {services.map((service, index) => (
            <ServiceItem key={index} isCardActive={isActive} text={service} />
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default PriceCard;
