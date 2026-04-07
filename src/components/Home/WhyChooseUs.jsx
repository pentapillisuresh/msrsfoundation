import React from 'react';
import { FiTrendingUp, FiBarChart2, FiShield, FiTarget } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    { 
      icon: <FiTrendingUp />, 
      title: 'Transparent Fund Utilization', 
      description: 'Every rupee is accounted for and reported',
      stat: '100%',
      statLabel: 'Transparency Guarantee'
    },
    { 
      icon: <FiBarChart2 />, 
      title: 'Real-Time Project Reporting', 
      description: 'Live updates on project progress and impact',
      stat: '24/7',
      statLabel: 'Live Tracking'
    },
    { 
      icon: <FiShield />, 
      title: 'Government Compliant Operations', 
      description: 'Full compliance with all regulatory requirements',
      stat: '100%',
      statLabel: 'Compliant Certified'
    },
    { 
      icon: <FiTarget />, 
      title: 'High Impact ROI for CSR Investors', 
      description: 'Maximum social impact for your investment',
      stat: '3x',
      statLabel: 'Average Social ROI'
    },
  ];

  return (
    <section className="relative section-padding gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-secondary shadow-sm backdrop-blur-sm">
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose Us for <span className="text-secondary">CSR Funding</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/40 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Partner with a trusted organization committed to transparency and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-2xl p-8 text-center card-hover shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative inline-block p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <div className="text-5xl text-secondary">
                    {React.cloneElement(reason.icon, { className: "text-5xl text-secondary" })}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {reason.description}
              </p>

              {/* Stats Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {reason.stat}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {reason.statLabel}
                </div>
              </div>

              {/* Decorative Icon Background */}
              <div className="absolute -bottom-8 -right-8 text-8xl text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {React.cloneElement(reason.icon, { className: "text-8xl" })}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay={400}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm text-gray-600">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm text-gray-600">FCRA Registered</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm text-gray-600">12A & 80G Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm text-gray-600">NGO Darpan Registered</span>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
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

export default WhyChooseUs;