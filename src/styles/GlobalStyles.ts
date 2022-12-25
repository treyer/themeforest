import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-ExtraBold.ttf") format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-Bold.ttf") format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-SemiBold.ttf") format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-Regular.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-Medium.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-Light.ttf") format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    url("./assets/fonts/Manrope/Manrope-ExtraLight.ttf") format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf") format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf") format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-Bold.ttf") format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-BoldItalic.ttf") format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf") format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf") format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-Regular.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-Italic.ttf") format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-Medium.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-MediumItalic.ttf") format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-Light.ttf") format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    url("./assets/fonts/OpenSans/OpenSans-LightItalic.ttf") format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  body {
    margin: 0;
    font-family: "Manrope", "OpenSans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


`;

export default GlobalStyles;
