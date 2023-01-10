import ButtonSimple from "components/controls/ButtonSimple";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import React, { useState } from "react";
import {
  ButtonSimpleMode,
  FlexAlign,
  FlexDirection,
  PriceType,
  TextColor,
  TextElement,
  TextStyle,
} from "types/index";
import { Wrapper } from "./styled";
import ServiceItem from "./ServiceItem";
import { PriceCardProps } from "./types";

const PriceCard = ({
  index,
  name,
  services,
  isActive = false,
  priceMonth,
  priceYear,
  setCardSelectCallback,
}: PriceCardProps) => {
  const [priceType, setPriceType] = useState(PriceType.Month);

  const handlePriceTypeChange = (event: React.SyntheticEvent<EventTarget>) => {
    event.stopPropagation();
    if (!(event.currentTarget instanceof HTMLDivElement)) {
      return;
    }
    const type = event.currentTarget.dataset["type"];
    if (type && type !== priceType) {
      if (type === PriceType.Month) setPriceType(PriceType.Month);
      if (type === PriceType.Year) setPriceType(PriceType.Year);
    }
  };

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
            {priceType === PriceType.Month ? priceMonth : priceYear}
          </Typography>
          <Flex width={92}>
            <div data-type={PriceType.Month} onClick={handlePriceTypeChange}>
              <ButtonSimple
                width={41}
                height={32}
                mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
                outlined={priceType === PriceType.Year}
              >
                Mo
              </ButtonSimple>
            </div>
            <div data-type={PriceType.Year} onClick={handlePriceTypeChange}>
              <ButtonSimple
                width={41}
                height={32}
                mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
                outlined={priceType === PriceType.Month}
              >
                Yr
              </ButtonSimple>
            </div>
          </Flex>
        </Flex>
        <Flex marginTop={40}>
          <div onClick={() => setCardSelectCallback(index)}>
            <ButtonSimple
              width={215}
              height={44}
              mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
            >
              Choose plan
            </ButtonSimple>
          </div>
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
