type FlexAlign = "start" | "center" | "end";

export type CounterProps = {
  count: string;
  description: string;
  width: number;
  align?: FlexAlign;
};
