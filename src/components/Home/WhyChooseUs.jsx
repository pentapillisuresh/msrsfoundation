import React from 'react';
import { FiTrendingUp, FiBarChart2, FiShield, FiTarget } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FiTrendingUp />, title: 'Transparent Fund Utilization', description: 'Every rupee is accounted for and reported' },
    { icon: <FiBarChart2 />, title: 'Real-Time Project Reporting', description: 'Live updates on project progress and impact' },
    { icon: <FiShield />, title: 'Government Compliant Operations', description: 'Full compliance with all regulatory requirements' },
    { icon: <FiTarget />, title: 'High Impact ROI for CSR Investors', description: 'Maximum social impact for your investment' },
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Us for CSR Funding</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner with a trusted organization committed to transparency and impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 text-center card-hover"
            >
              <div className="text-4xl text-secondary mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-dark mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;