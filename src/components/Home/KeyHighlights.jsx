import React from 'react';
import { FiCheckCircle, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const KeyHighlights = () => {
  const highlights = [
    {
      icon: <FiCheckCircle className="text-4xl text-secondary" />,
      title: 'CSR-1 Registered Organization',
      description: 'Officially registered for CSR funding compliance',
      stat: '500+',
      statLabel: 'Projects Completed'
    },
    {
      icon: <FiAward className="text-4xl text-secondary" />,
      title: 'Section 8 Company',
      description: 'Ministry of Corporate Affairs Approved',
      stat: '12+',
      statLabel: 'Years of Trust'
    },
    {
      icon: <FiGlobe className="text-4xl text-secondary" />,
      title: 'Multi-Sector Development',
      description: 'Comprehensive social initiatives',
      stat: '20+',
      statLabel: 'Sectors Covered'
    },
    {
      icon: <FiUsers className="text-4xl text-secondary" />,
      title: 'Nationwide Impact',
      description: 'Serving Communities Across India',
      stat: '1M+',
      statLabel: 'Lives Impacted'
    },
  ];

  return (
    <section className="relative section-padding gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-secondary shadow-sm backdrop-blur-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Key <span className="text-secondary">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/40 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Recognized excellence and proven track record in social development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-2xl p-8 text-center card-hover shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Icon Container with Animation */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative inline-block p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(highlight.icon, { className: "text-5xl text-secondary" })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                {highlight.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {highlight.description}
              </p>

              {/* Stats Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {highlight.stat}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {highlight.statLabel}
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay={400}>
          <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden">
            <span className="relative z-10">Discover Our Impact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
        }
      `}</style>
    </section>
  );
};

export default KeyHighlights;