import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import ProgressSection from './components/ProgressSection/ProgressSection';
import ServicesAccordion from './components/ServicesAccordion/ServicesAccordion';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProgressSection />
        <ServicesAccordion />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
