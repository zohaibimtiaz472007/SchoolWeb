import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import TestimonialsSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import ContactUsSection from '../components/ContactUs';

const Home = () => (
  <div>
    <HeroSection/>
    <FeaturesSection/>
    <TestimonialsSection/>
    <CallToAction/>
    <ContactUsSection/>
  </div>
);

export default Home;
