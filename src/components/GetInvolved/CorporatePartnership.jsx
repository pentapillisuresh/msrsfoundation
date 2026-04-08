import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiBriefcase, FiTrendingUp, FiShield, FiUsers, FiBarChart2, 
  FiTarget, FiAward, FiGlobe, FiCheckCircle, FiClock, FiArrowRight,
  FiHeart, FiStar, FiThumbsUp, FiSmile, FiDollarSign, FiMapPin,
  FiCalendar, FiMessageCircle, FiHome, FiBookOpen, FiTrendingUp as FiGrowth
} from 'react-icons/fi';
import { FaHandshake, FaChartLine, FaUserTie, FaTree, FaSchool, FaHospitalUser } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CorporatePartnership = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const benefits = [
    { 
      icon: <FiBriefcase />, 
      title: "CSR Compliance", 
      description: "100% compliant with Schedule VII activities with complete documentation", 
      detail: "Audit-ready reports & certifications",
      color: "#667A62"
    },
    { 
      icon: <FaChartLine />, 
      title: "Brand Enhancement", 
      description: "Positive brand association and enhanced corporate image", 
      detail: "Recognition across all platforms",
      color: "#667A62"
    },
    { 
      icon: <FiShield />, 
      title: "Risk Management", 
      description: "Professional project execution with regular audits", 
      detail: "Third-party impact assessments",
      color: "#667A62"
    },
    { 
      icon: <FiUsers />, 
      title: "Employee Engagement", 
      description: "Meaningful volunteering opportunities for employees", 
      detail: "Team building & satisfaction",
      color: "#667A62"
    }
  ];

  const partnershipModels = [
    { 
      title: "Project Funding", 
      description: "Direct funding for specific projects aligned with your CSR goals", 
      icon: <FiTarget />,
      features: ["Customized project design", "Quarterly progress reports", "Regular site visits", "Impact documentation"],
      popular: true
    },
    { 
      title: "Adopt a Village", 
      description: "Comprehensive development of a village or community", 
      icon: <FiHome />,
      features: ["Holistic development approach", "3-5 year commitment", "Measurable outcomes", "Community engagement"],
      popular: false
    },
    { 
      title: "Employee Giving", 
      description: "Payroll giving and employee matching programs", 
      icon: <FiUsers />,
      features: ["Tax benefits for employees", "Easy implementation", "Monthly reporting", "Employee satisfaction"],
      popular: false
    },
    { 
      title: "Cause Marketing", 
      description: "Percentage of sales donated to social causes", 
      icon: <FaChartLine />,
      features: ["Brand alignment", "Customer loyalty", "Social impact metrics", "Marketing support"],
      popular: true
    }
  ];

  const focusAreas = [
    { icon: <FaSchool />, title: "Education", description: "Digital classrooms, scholarships, teacher training" },
    { icon: <FaHospitalUser />, title: "Healthcare", description: "Mobile clinics, health camps, telemedicine" },
    { icon: <FaTree />, title: "Environment", description: "Tree plantation, water conservation, sustainability" },
    { icon: <FaUserTie />, title: "Women Empowerment", description: "Skill development, entrepreneurship, financial literacy" }
  ];

  const stats = [
    { number: "50+", label: "Corporate Partners", icon: <FiBriefcase />, delay: 100 },
    { number: "₹10Cr+", label: "CSR Funds Deployed", icon: <FiDollarSign />, delay: 200 },
    { number: "200+", label: "Projects Completed", icon: <FiCheckCircle />, delay: 300 },
    { number: "100%", label: "Compliance Rate", icon: <FiShield />, delay: 400 }
  ];

  const process = [
    { step: "01", title: "Initial Meeting", description: "Discuss goals & expectations", icon: <FiMessageCircle /> },
    { step: "02", title: "Proposal", description: "Customized project proposal", icon: <FiTarget /> },
    { step: "03", title: "Agreement", description: "Sign MOU & compliance", icon: <FaHandshake /> },
    { step: "04", title: "Implementation", description: "Project execution & reporting", icon: <FiTrendingUp /> }
  ];

  const testimonials = [
    {
      company: "Tech Mahindra Foundation",
      name: "CSR Director",
      quote: "MSRS Foundation has been an exceptional partner in our education initiatives. Their transparency and impact measurement are outstanding.",
      contribution: "₹2.5 Cr",
      impact: "10,000+ students benefited"
    },
    {
      company: "HDFC Bank",
      name: "Head - CSR",
      quote: "Working with MSRS Foundation has transformed our rural development programs. Their on-ground execution is exemplary.",
      contribution: "₹3.2 Cr",
      impact: "25 villages transformed"
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * {
            font-family: 'Mulish', sans-serif;
          }
          
          h1, h2, h3, h4, .heading-font {
            font-family: 'Cormorant Garamond', serif;
          }
          
          .banner-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
            letter-spacing: -0.01em;
          }
          
          .partnership-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .partnership-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80');
            background-size: cover;
            background-position: center;
            animation: zoomIn 20s ease-out infinite alternate;
          }
          
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          .banner-content {
            animation: fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .benefit-card, .model-card, .focus-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .benefit-card::before, .model-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.08), transparent);
            transition: left 0.5s ease;
          }
          
          .benefit-card:hover::before, .model-card:hover::before {
            left: 100%;
          }
          
          .benefit-card:hover, .model-card:hover, .focus-card:hover {
            transform: translateY(-5px);
          }
          
          .stat-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
          
          .stat-card .stat-icon {
            transition: all 0.4s ease;
          }
          
          .stat-card:hover .stat-icon {
            transform: scale(1.1);
          }
          
          .process-step {
            transition: all 0.4s ease;
          }
          
          .process-step:hover {
            transform: translateY(-5px);
          }
          
          .testimonial-card {
            transition: all 0.4s ease;
          }
          
          .testimonial-card:hover {
            transform: translateY(-5px);
          }
          
          .btn-premium {
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          
          .btn-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-premium:hover::before {
            left: 100%;
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @media (max-width: 768px) {
            .banner-title {
              font-size: 2.5rem !important;
            }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="partnership-bg" />
        <div className="partnership-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg animate-pulse">
              Collaborate for Change
            </span>
            <h1 className="banner-title text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]">
              Corporate Partnership
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide">
              Collaborate with us for meaningful CSR initiatives that create lasting impact
            </p>
            <div className="mt-10">
              <Link to="/schedule-meeting" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#2C3E2B] font-semibold rounded-full hover:shadow-2xl transition-all hover:gap-3">
                Partner With Us <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2C3E2B]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center" data-aos="zoom-in" data-aos-delay={stat.delay}>
                <div className="stat-icon text-4xl text-[#667A62] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#EAF6E3] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Why Choose Us
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              Why Partner With Us?
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Join hands with MSRS Foundation for structured, high-impact, and compliant social programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl p-6 shadow-md group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-[#667A62] transition-colors duration-300">
                  <div className="text-2xl text-[#667A62] group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-2">{benefit.title}</h3>
                <p className="text-[#4A5C46] text-sm mb-3">{benefit.description}</p>
                <div className="flex items-center gap-1 text-[#667A62] text-xs font-semibold">
                  <FiCheckCircle size={12} /> {benefit.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Our Expertise
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              Focus Areas
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              We specialize in these key areas aligned with Schedule VII of Companies Act
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="focus-card bg-white rounded-2xl p-6 text-center shadow-md"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="w-16 h-16 rounded-full bg-[#EAF6E3] flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-[#667A62]">{area.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-[#2C3E2B] mb-2">{area.title}</h3>
                <p className="text-[#4A5C46] text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Flexible Options
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              Partnership Models
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Choose the model that best aligns with your corporate goals and CSR objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipModels.map((model, idx) => (
              <div 
                key={idx} 
                className="model-card bg-gradient-to-br from-white to-[#EAF6E3] rounded-2xl p-8 shadow-lg border border-[#EAF6E3]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#667A62]/10 flex items-center justify-center">
                    <div className="text-2xl text-[#667A62]">{model.icon}</div>
                  </div>
                  {model.popular && (
                    <div className="bg-[#667A62] rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">Popular</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E2B] mb-3">{model.title}</h3>
                <p className="text-[#4A5C46] mb-4">{model.description}</p>
                <div className="space-y-2">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-[#4A5C46]">
                      <FiCheckCircle className="text-[#667A62] text-xs" /> {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
     {/* Process Section with Dashed Connecting Lines */}
<section className="py-24 bg-[#EAF6E3]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16" data-aos="fade-up">
      <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
        Simple Process
      </span>
      <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
        How to Partner With Us
      </h2>
      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
      <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
        A streamlined process to get started with your CSR partnership
      </p>
    </div>
    
    <div className="relative">
      {/* Main Connecting Line */}
      <div className="hidden md:block absolute top-1/3 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[#667A62] opacity-40 z-0"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {process.map((item, idx) => (
          <div 
            key={idx} 
            className="process-step text-center group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Step Circle with Number */}
            <div className="relative mb-5">
              {/* Line from left side (except first) */}
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-x-6 w-6 h-px bg-[#667A62] opacity-40"></div>
              )}
              
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#667A62] transition-all duration-300 relative z-10">
                <div className="text-[#667A62] group-hover:text-white transition-colors duration-300 text-2xl">
                  {item.icon}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#667A62] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-20">
                {item.step}
              </div>
            </div>
            
            {/* Vertical line for mobile */}
            {idx < process.length - 1 && (
              <div className="md:hidden flex justify-center my-2">
                <div className="w-px h-6 bg-[#667A62] opacity-40"></div>
              </div>
            )}
            
            <h4 className="font-bold text-[#2C3E2B] text-lg mb-2">{item.title}</h4>
            <p className="text-[#4A5C46] text-sm px-2">{item.description}</p>
            
            {/* Arrow icon between steps */}
            {idx < process.length - 1 && (
              <div className="hidden md:block absolute top-1/3 -right-3 transform -translate-y-1/2">
                <FiArrowRight className="text-[#667A62] opacity-40" size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Success Stories
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              What Our Partners Say
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Hear from our corporate partners about their experience working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="testimonial-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[#667A62] text-4xl">"</div>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
                <p className="text-[#4A5C46] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#EAF6E3] pt-4">
                  <h4 className="font-bold text-[#2C3E2B">{testimonial.company}</h4>
                  <p className="text-[#667A62] text-sm mb-3">{testimonial.name}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-[#2C3E2B] font-semibold">Contribution: {testimonial.contribution}</span>
                    <span className="text-[#667A62]">|</span>
                    <span className="text-[#2C3E2B] font-semibold">Impact: {testimonial.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FaHandshake className="text-5xl text-[#667A62] mx-auto mb-5 floating-element" />
            <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Make a Difference Together?
            </h2>
            <div className="w-20 h-0.5 bg-[#667A62] mx-auto mb-6"></div>
            <p className="text-[#EAF6E3] text-lg mb-10 max-w-2xl mx-auto">
              Let's collaborate for a better tomorrow. Our CSR team will respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                to="/schedule-meeting" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 bg-[#667A62] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Schedule a Meeting <FiCalendar />
              </Link>
              <Link 
                to="/get-in-touch" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] hover:text-white transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Contact CSR Team <FiMessageCircle />
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              We'll respond within 24 hours to discuss potential collaboration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePartnership;