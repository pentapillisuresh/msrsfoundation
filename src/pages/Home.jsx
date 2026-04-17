import React from 'react';
import Hero from '../components/Home/Hero';
import KeyHighlights from '../components/Home/KeyHighlights';
import WhatWeDo from '../components/Home/WhatWeDo';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import EventsInitiatives from '../components/Home/EventsInitiatives';
import Testimonials from '../components/Testimonials/Testimonials';
import SustainableGoals from '../components/Home/SustainableGoals';
import Services from "../components/Home/Services"
import About from "../components/Home/About"

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <SustainableGoals/>
      <Services/>
      <KeyHighlights />
      <WhatWeDo />
      <WhyChooseUs />
      <EventsInitiatives />
      <Testimonials />
    </div>
  );
};

export default Home;