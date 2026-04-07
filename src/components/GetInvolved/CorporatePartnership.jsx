import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiTrendingUp, FiShield, FiUsers, FiBarChart2, FiTarget, FiAward, FiGlobe, FiCheckCircle, FiClock } from 'react-icons/fi';
import Button from '../Common/Button';

const CorporatePartnership = () => {
  const benefits = [
    { icon: <FiBriefcase />, title: "CSR Compliance", description: "100% compliant with Schedule VII activities", color: "from-blue-50 to-blue-100", detail: "Complete documentation & reporting" },
    { icon: <FiTrendingUp />, title: "Brand Enhancement", description: "Positive brand association and visibility", color: "from-green-50 to-green-100", detail: "Recognition in our communications" },
    { icon: <FiShield />, title: "Risk Management", description: "Professional project execution with audits", color: "from-orange-50 to-orange-100", detail: "Third-party impact assessments" },
    { icon: <FiUsers />, title: "Employee Engagement", description: "Volunteering opportunities for employees", color: "from-purple-50 to-purple-100", detail: "Team building & satisfaction" }
  ];

  const partnershipModels = [
    { title: "Project Funding", description: "Direct funding for specific projects aligned with your CSR goals", icon: "🎯", features: ["Customized projects", "Regular reporting", "Site visits"] },
    { title: "Adopt a Village", description: "Comprehensive development of a village or community", icon: "🏘️", features: ["Holistic development", "5-year commitment", "Measurable outcomes"] },
    { title: "Employee Giving", description: "Payroll giving and employee matching programs", icon: "💼", features: ["Tax benefits", "Employee satisfaction", "Easy implementation"] },
    { title: "Cause Marketing", description: "Percentage of sales donated to social causes", icon: "📈", features: ["Brand alignment", "Customer loyalty", "Social impact"] }
  ];

  const successStories = [
    { company: "Tech Corp India", contribution: "₹50 Lakhs", impact: "500+ students benefited", year: "2024" },
    { company: "Global Bank", contribution: "₹75 Lakhs", impact: "10 villages transformed", year: "2023" }
  ];

  return (
    <div>
      {/* Banner Section with 300px height */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/90 z-10"></div>
        <img 
          src="/images/corporate-partnership-banner.jpg" 
          alt="Corporate Partnership Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=300&fit=crop";
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Corporate Partnership</h1>
            <p className="text-lg text-white/90">Collaborate with us for meaningful CSR initiatives that create lasting impact</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-gray-600 mt-2">Corporate Partners</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">₹10Cr+</div>
              <div className="text-sm text-gray-600 mt-2">CSR Funds Deployed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-gray-600 mt-2">Compliance Rate</div>
            </div>
          </div>

          {/* Why Partner With Us */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-4 font-heading">Why Partner With Us?</h3>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Join hands with MSRS Foundation for structured, high-impact, and compliant social programs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 group`}>
                  <div className="text-4xl text-secondary mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-dark mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <div className="flex items-center text-secondary text-sm font-semibold">
                    <FiCheckCircle className="mr-1" /> {benefit.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Models */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-4 font-heading">Partnership Models</h3>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Choose the model that best aligns with your corporate goals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipModels.map((model, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-2xl group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{model.icon}</div>
                    <div className="bg-secondary/10 rounded-full px-3 py-1">
                      <span className="text-secondary text-sm font-semibold">Popular</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-dark mb-3">{model.title}</h4>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="space-y-2">
                    {model.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-gray-700">
                        <FiCheckCircle className="text-secondary mr-2 text-xs" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16 bg-primary rounded-2xl p-8" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-8 font-heading">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-dark">{story.company}</h4>
                    <span className="text-secondary font-bold">{story.year}</span>
                  </div>
                  <p className="text-2xl font-bold text-secondary mb-2">{story.contribution}</p>
                  <p className="text-gray-600">{story.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-12 font-heading">How to Partner With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Initial Meeting", desc: "Discuss goals & expectations", icon: "🤝" },
                { step: "02", title: "Proposal", desc: "Customized project proposal", icon: "📋" },
                { step: "03", title: "Agreement", desc: "Sign MOU & compliance", icon: "✍️" },
                { step: "04", title: "Implementation", desc: "Project execution & reporting", icon: "🚀" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center" data-aos="fade-up">
            <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference Together?</h3>
              <p className="text-lg mb-6">Let's collaborate for a better tomorrow</p>
              <Link to="/schedule-meeting">
                <Button variant="primary" size="lg" className="bg-white text-secondary hover:bg-gray-100">
                  Schedule a Meeting with CSR Team
                </Button>
              </Link>
              <p className="text-sm mt-4 text-white/80">
                We'll respond within 24 hours to discuss potential collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePartnership;