import React from 'react';
import Hero from '../components/Home/Hero';
import KeyHighlights from '../components/Home/KeyHighlights';
import WhatWeDo from '../components/Home/WhatWeDo';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import EventsInitiatives from '../components/Events/EventsInitiatives';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyHighlights />
      <WhatWeDo />
      <WhyChooseUs />
      <EventsInitiatives />
      <Testimonials />
    </div>
  );
};

export default Home;