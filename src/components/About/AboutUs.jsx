import React from 'react';
import PageHeader from '../Common/PageHeader';
import { FiShield, FiHeart, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const AboutUs = () => {
  const values = [
    { icon: <FiShield />, title: 'Accountability', description: 'We maintain the highest standards of transparency' },
    { icon: <FiHeart />, title: 'Compassion', description: 'Driven by genuine care for communities' },
    { icon: <FiGlobe />, title: 'Sustainability', description: 'Creating lasting positive change' },
    { icon: <FiTrendingUp />, title: 'Innovation', description: 'Implementing modern solutions for social challenges' },
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="About Us"
        subtitle="Purpose-Driven. Impact-Focused."
        description="We are a Section 8 organization committed to social development through structured programs, transparency, and long-term impact across communities."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600"
                alt="About MSRS Foundation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div data-aos="slide-in-left">
              <h3 className="text-2xl font-bold text-dark mb-4">MAHA SHREE RUDRA SAMSTHANAM FOUNDATION</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                MSRS Foundation is a Section 8 non-profit organization, established with a vision to create sustainable and inclusive development across diverse communities.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Registered under the Ministry of Corporate Affairs, Government of India, the foundation operates with a strong focus on accountability, transparency, and measurable social impact.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The organization works across multiple sectors, aligning its initiatives with national development goals and global sustainability frameworks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-secondary text-2xl">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-dark">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;