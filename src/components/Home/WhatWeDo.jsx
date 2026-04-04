import React from 'react';
import { GiFarmer, GiBookCover, GiHealthNormal, GiEarthAmerica, GiFirstAidKit } from 'react-icons/gi';
import { FaFemale } from 'react-icons/fa';
import Card from '../Common/Card';

const WhatWeDo = () => {
  const initiatives = [
    { icon: <GiFarmer />, title: 'Rural Development', description: 'Comprehensive rural development programs for sustainable growth' },
    { icon: <GiBookCover />, title: 'Education & Skill Development', description: 'Quality education and vocational training for youth empowerment' },
    { icon: <GiHealthNormal />, title: 'Healthcare & Wellness', description: 'Affordable healthcare services and wellness programs' },
    { icon: <FaFemale />, title: 'Women Empowerment', description: 'Initiatives for women\'s economic and social independence' },
    { icon: <GiEarthAmerica />, title: 'Environmental Sustainability', description: 'Eco-friendly projects for a greener future' },
    { icon: <GiFirstAidKit />, title: 'Disaster Relief & Social Welfare', description: 'Emergency response and rehabilitation support' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to social development covers multiple sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} icon={item.icon} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;