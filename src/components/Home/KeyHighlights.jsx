import React from 'react';
import { FiCheckCircle, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const KeyHighlights = () => {
  const highlights = [
    {
      icon: <FiCheckCircle className="text-4xl text-secondary" />,
      title: 'CSR-1 Registered Organization',
      description: 'Officially registered for CSR funding compliance',
    },
    {
      icon: <FiAward className="text-4xl text-secondary" />,
      title: 'Section 8 Company',
      description: 'Ministry of Corporate Affairs Approved',
    },
    {
      icon: <FiGlobe className="text-4xl text-secondary" />,
      title: 'Multi-Sector Development',
      description: 'Comprehensive social initiatives',
    },
    {
      icon: <FiUsers className="text-4xl text-secondary" />,
      title: 'Nationwide Impact',
      description: 'Serving Communities Across India',
    },
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 text-center card-hover shadow-lg"
            >
              <div className="flex justify-center mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;