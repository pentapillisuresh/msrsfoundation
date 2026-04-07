import React from 'react';
import { GiFarmer, GiBookCover, GiHealthNormal, GiEarthAmerica, GiFirstAidKit } from 'react-icons/gi';
import { FaFemale } from 'react-icons/fa';

const WhatWeDo = () => {
  const initiatives = [
    { 
      icon: <GiFarmer className="text-4xl text-secondary" />, 
      title: 'Rural Development', 
      description: 'Comprehensive rural development programs for sustainable growth',
      number: '01'
    },
    { 
      icon: <GiBookCover className="text-4xl text-secondary" />, 
      title: 'Education & Skill Development', 
      description: 'Quality education and vocational training for youth empowerment',
      number: '02'
    },
    { 
      icon: <GiHealthNormal className="text-4xl text-secondary" />, 
      title: 'Healthcare & Wellness', 
      description: 'Affordable healthcare services and wellness programs',
      number: '03'
    },
    { 
      icon: <FaFemale className="text-4xl text-secondary" />, 
      title: 'Women Empowerment', 
      description: 'Initiatives for women\'s economic and social independence',
      number: '04'
    },
    { 
      icon: <GiEarthAmerica className="text-4xl text-secondary" />, 
      title: 'Environmental Sustainability', 
      description: 'Eco-friendly projects for a greener future',
      number: '05'
    },
    { 
      icon: <GiFirstAidKit className="text-4xl text-secondary" />, 
      title: 'Disaster Relief & Social Welfare', 
      description: 'Emergency response and rehabilitation support',
      number: '06'
    },
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to social development covers multiple sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 text-center card-hover shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex justify-center w-full">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-300">
                  {item.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;