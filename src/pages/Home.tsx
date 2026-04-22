import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustBarSection from "../components/TrustBarSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Home;
