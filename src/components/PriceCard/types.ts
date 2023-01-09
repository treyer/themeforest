export type PriceCardProps = {
  index: number;
  name: string;
  services: string[];
  isActive?: boolean;
  priceMonth: string;
  priceYear: string;
  setCardSelectCallback: (index: number) => void;
};

export type ServiceItemProps = {
  isCardActive: boolean;
  text: string;
};
