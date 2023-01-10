import ButtonSimple from "components/controls/ButtonSimple";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import React, { useState } from "react";
import { ButtonSimpleMode, PriceType } from "types/index";
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

  const selectCard = () => {
    setCardSelectCallback(index);
  };

  const handlePriceTypeChange = (type: PriceType) => () => {
    if (type !== priceType) {
      setPriceType(type);
    }
  };

  return (
    <Wrapper isActive={isActive}>
      <Flex direction="column" align="start">
        <Typography
          variant="headline6_bold"
          color={isActive ? "white" : "black"}
        >
          {name}
        </Typography>
        <Flex>
          <Typography
            variant="headline3_1_extrabold"
            color={isActive ? "white" : "black"}
            element="div"
            width={123}
          >
            {priceType === PriceType.Month ? priceMonth : priceYear}
          </Typography>
          <Flex width={92}>
            <ButtonSimple
              width={41}
              height={32}
              mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
              outlined={priceType === PriceType.Year}
              onClickCallback={handlePriceTypeChange(PriceType.Month)}
            >
              Mo
            </ButtonSimple>

            <ButtonSimple
              width={41}
              height={32}
              mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
              outlined={priceType === PriceType.Month}
              onClickCallback={handlePriceTypeChange(PriceType.Year)}
            >
              Yr
            </ButtonSimple>
          </Flex>
        </Flex>
        <Flex marginTop={40}>
          <ButtonSimple
            width={215}
            height={44}
            mode={isActive ? ButtonSimpleMode.Dark : ButtonSimpleMode.Light}
            onClickCallback={selectCard}
          >
            Choose plan
          </ButtonSimple>
        </Flex>
        <Flex direction="column" marginTop={30} rowGap={16}>
          {services.map((service, index) => (
            <ServiceItem key={index} isCardActive={isActive} text={service} />
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default PriceCard;
