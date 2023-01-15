import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import Header from "components/Header";
import Loader from "components/Loader";
import { MainWrapper } from "./styled";
import FooterDark from "components/Footer/FooterDark";
import FooterLight from "components/Footer/FooterLight";

import { Theme } from "types/index";
import commonTheme from "styles/commonTheme";
import darkTheme from "styles/darkTheme";
import lightTheme from "styles/lightTheme";
import { selectTheme } from "store/selectors/selectors";
import { RootState } from "store/index";

const HomePage = lazy(() => import("pages/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const BlogPage = lazy(() => import("pages/BlogPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));
const FAQsPage = lazy(() => import("pages/FAQsPage"));
const ServicesPage = lazy(() => import("pages/ServicesPage"));
const TeamPage = lazy(() => import("pages/TeamPage"));
const SolutionsPage = lazy(() => import("pages/SolutionsPage"));

const MainLayout = () => {
  const theme = useSelector((state: RootState) => selectTheme(state));

  return (
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
            <Route path="/solutions" element={<SolutionsPage />} />
          </Routes>
        </Suspense>
      </MainWrapper>
      {theme === Theme.Dark ? <FooterDark /> : <FooterLight />}
    </ThemeProvider>
  );
};

export default MainLayout;
