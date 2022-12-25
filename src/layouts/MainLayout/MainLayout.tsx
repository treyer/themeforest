import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import commonTheme from "styles/commonTheme";
import darkTheme from "styles/darkTheme";
import lightTheme from "styles/lightTheme";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import ThemeContext from "context/ThemeContext";

const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider
        theme={
          theme === "light"
            ? { ...commonTheme, ...lightTheme }
            : { ...commonTheme, ...darkTheme }
        }
      >
        <Header />
        <main>Main</main>
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
