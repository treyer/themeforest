export enum LogoSize {
  Large,
  Small,
}

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface TypographyStyles {
  "font-family": string;
  "font-style": string;
  "font-weight": string;
  "font-size": string;
  "line-height": string;
  "letter-spacing": string;
}

export enum HeaderStyle {
  Headline1_extrabold = "headline1_extrabold",
  Headline2_extrabold = "headline2_extrabold",
  Headline3_extrabold = "headline3_extrabold",
  Headline4_bold = "headline4_bold",
  Headline5_bold = "headline5_bold",
  Headline6_bold = "headline6_bold",
  Headline7_semibold = "headline7_semibold",
  Headline7_medium = "headline7_medium",
}

export enum ParagraphStyle {
  Paragraph1_regular = "paragraph1_regular",
  Paragraph2_regular = "paragraph2_regular",
  Paragraph2_bold = "paragraph2_bold",
  Paragraph3_regular = "paragraph3_regular",
  Paragraph3_semibold = "paragraph3_semibold",
}
