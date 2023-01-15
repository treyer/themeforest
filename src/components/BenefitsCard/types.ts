type CardType = "simple" | "advanced";

export interface BenefitsCardProps {
  iconUrl: string;
  iconWidth?: number | undefined;
  iconHeight?: number | undefined;
  headerText: string;
  children: string;
  link?: string | undefined;
  type?: CardType | undefined;
}
