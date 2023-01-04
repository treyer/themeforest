const primary = "#185CFF"; //blue
const secondary = "#002B4E"; //dark blue
const tertiary = "#F0F9FF"; //light grey
const helperBlue1 = "#194060";
const helperBlue2 = "#607D94";
const helperBlue3 = "#C9DCEC";
const helperBlue4 = "#467dff";
const black = "#292D33";
const white = "#ffffff";
const grey = "#9497A1";
const background = "#F1F6FA";
const redError = "#C14040";

const shadows = [
  "0px 12px 30px rgba(24, 92, 255, 0.18)",
  "0px 12px 30px 17px rgba(24, 92, 255, 0.04)",
];

const size = {
  mobileS: "320px",
  mobileM: "360px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1110px",
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

export default {
  size,
  device,
  spaces: [0, 4, 8, 16, 32, 64, 70, 84, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 60, 72, 80],
  radiuses: [6, 10, 30],
  shadows,
  colors: {
    primary,
    secondary,
    tertiary,
    helperBlue1,
    helperBlue2,
    helperBlue3,
    helperBlue4,
    black,
    white,
    grey,
    background,
    redError,
  },
};
