import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import commonTheme from "styles/commonTheme";
import darkTheme from "styles/darkTheme";
import lightTheme from "styles/lightTheme";
import Footer from "components/Footer/Footer";
import FooterLight from "components/Footer/FooterLight";
import Header from "components/Header/Header";
import ThemeContext from "context/ThemeContext";
import Loader from "components/Loader/Loader";
import { Theme } from "types/types";
import { MainWrapper } from "./components";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));
const BlogPage = lazy(() => import("pages/BlogPage/BlogPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const FAQsPage = lazy(() => import("pages/FAQsPage/FAQsPage"));
const ServicesPage = lazy(() => import("pages/ServicesPage/ServicesPage"));
const TeamPage = lazy(() => import("pages/TeamPage/TeamPage"));

const MainLayout = () => {
  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider
        theme={
          theme === Theme.Light
            ? { ...commonTheme, ...lightTheme }
            : { ...commonTheme, ...darkTheme }
        }
      >
        <Header />
        <MainWrapper>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </Suspense>
        </MainWrapper>
        {theme === Theme.Dark && <Footer />}
        {theme === Theme.Light && <FooterLight />}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
