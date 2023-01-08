import OverviewSection from "pages/common-sections/OverviewSection";
import BlogSection from "./sections/BlogSection";
import ContactUsSection from "../common-sections/ContactUsSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "../common-sections/TestimonialsSection";
import TitleSection from "./sections/TitleSection";
import FeaturesSection from "./sections/FeaturesSection";
import LearnMoreSection from "./sections/LearnMoreSection";
import BenefitsSection from "./sections/BenefitsSection";

const HomePage = () => {
  return (
    <>
      <TitleSection />
      <LearnMoreSection />
      <FeaturesSection />
      <OverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactUsSection />
    </>
  );
};

export default HomePage;
