export type PriceCardProps = {
  name: string;
  services: string[];
  isActive?: boolean;
  priceMonth: string;
  priceYear: string;
};

export type ServiceItemProps = {
  isCardActive: boolean;
  text: string;
};
