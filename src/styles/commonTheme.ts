const primary = "#185CFF"; //blue
const secondary = "#002B4E"; //dark blue
const tertiary = "#F0F9FF"; //light grey
const helperBlue1 = "#194060";
const helperBlue2 = "#607D94";
const helperBlue3 = "#C9DCEC";
const black = "#292D33";
const grey = "#9497A1";
const background = "#F1F6FA";
const redError = "#C14040";

const size = {
  mobileS: "320px",
  mobileM: "360px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

const fontManrope = { "font-family": "Manrope", "font-style": "normal" };

const headers = {
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
};

const fontOpenSans = {
  "font-family": "OpenSans",
  "font-style": "normal",
  "letter-spacing": "-0.015em",
};

const paragraphs = {
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

export default {
  size,
  device,
  headers,
  paragraphs,
  spaces: [0, 4, 8, 16, 32, 64, 70, 84, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 60, 72, 80],
  radiuses: [6, 10, 30],
  colors: {
    primary,
    secondary,
    tertiary,
    helperBlue1,
    helperBlue2,
    helperBlue3,
    black,
    grey,
    background,
    redError,
  },
};
