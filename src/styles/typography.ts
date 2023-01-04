interface Styles {
  [key: string]: string | number;
}

interface TypographyStyles {
  [key: string]: Styles;
}

const fontManrope = { "font-family": "Manrope", "font-style": "normal" };

const fontOpenSans = {
  "font-family": "OpenSans",
  "font-style": "normal",
  "letter-spacing": "-0.015em",
};

export const typographyStyles: TypographyStyles = {
  headline0_extrabold: {
    ...fontManrope,
    "font-weight": 800,
    "font-size": "57px",
    "line-height": "66px",
    "letter-spacing": "-0.015em",
  },
  headline1_extrabold: {
    ...fontManrope,
    "font-weight": 800,
    "font-size": "46px",
    "line-height": "60px",
    "letter-spacing": "-0.015em",
  },
  headline2_extrabold: {
    ...fontManrope,
    "font-weight": 800,
    "font-size": "38px",
    "line-height": "56px",
    "letter-spacing": "-0.015em",
  },
  headline3_extrabold: {
    ...fontManrope,
    "font-weight": 800,
    "font-size": "30px",
    "line-height": "40px",
    "letter-spacing": "-0.015em",
  },
  headline3_1_extrabold: {
    ...fontManrope,
    "font-weight": 800,
    "font-size": "26px",
    "line-height": "40px",
    "letter-spacing": "-0.015em",
  },
  headline4_bold: {
    ...fontManrope,
    "font-weight": 700,
    "font-size": "22px",
    "line-height": "33px",
    "letter-spacing": "-0.015em",
  },
  headline5_bold: {
    ...fontManrope,
    "font-weight": 700,
    "font-size": "20px",
    "line-height": "30px",
    "letter-spacing": "-0.015em",
  },
  headline6_bold: {
    ...fontManrope,
    "font-weight": 700,
    "font-size": "16px",
    "line-height": "24px",
    "letter-spacing": "-0.015em",
  },
  headline7_semibold: {
    ...fontManrope,
    "font-weight": 600,
    "font-size": "14px",
    "line-height": "24px",
    "letter-spacing": "-0.01em",
  },
  headline7_medium: {
    ...fontManrope,
    "font-weight": 500,
    "font-size": "14px",
    "line-height": "24px",
    "letter-spacing": "-0.01em",
  },
  headline8_semibold: {
    ...fontOpenSans,
    "font-weight": 600,
    "font-size": "12px",
    "line-height": "24px",
  },
  paragraph0_bold: {
    ...fontOpenSans,
    "font-weight": 800,
    "font-size": "50px",
    "line-height": "70px",
    "letter-spacing": "-0.025em",
  },
  paragraph1_regular: {
    ...fontOpenSans,
    "font-weight": 400,
    "font-size": "20px",
    "line-height": "33px",
  },
  paragraph2_regular: {
    ...fontOpenSans,
    "font-weight": 400,
    "font-size": "16px",
    "line-height": "28px",
  },
  paragraph2_bold: {
    ...fontOpenSans,
    "font-weight": 700,
    "font-size": "16px",
    "line-height": "28px",
  },
  paragraph3_regular: {
    ...fontOpenSans,
    "font-weight": 400,
    "font-size": "14px",
    "line-height": "24px",
  },
  paragraph3_semibold: {
    ...fontOpenSans,
    "font-weight": 600,
    "font-size": "14px",
    "line-height": "24px",
  },
};
