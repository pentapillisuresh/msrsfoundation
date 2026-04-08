import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHeart, FiUsers, FiGlobe, FiAward, FiClock, FiCheckCircle, 
  FiTrendingUp, FiShield, FiArrowRight, FiDollarSign, FiBookOpen,
  FiSmile, FiStar, FiThumbsUp, FiGift, FiLock, FiMail, FiCalendar
} from 'react-icons/fi';
import { FaDonate, FaHandHoldingHeart, FaChild, FaFemale, FaTree, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndividualSupport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const benefits = [
    { icon: <FiShield />, title: "80G Tax Benefits", description: "Get tax exemption on your donations under Section 80G", detail: "Save up to 50% tax" },
    { icon: <FaHandHoldingHeart />, title: "Direct Impact", description: "Your contribution directly reaches those in need", detail: "100% transparency" },
    { icon: <FiGlobe />, title: "Complete Transparency", description: "Regular updates and impact reports", detail: "Quarterly reports" },
    { icon: <FiAward />, title: "Recognition", description: "Certificate of appreciation & donor recognition", detail: "Digital certificate" }
  ];

  const donationWays = [
    { amount: "₹1,000", impact: "Educational materials for 5 children", icon: <FaGraduationCap />, bg: "#EAF6E3", color: "#667A62" },
    { amount: "₹5,000", impact: "Support a child's education for 3 months", icon: <FaChild />, bg: "#EAF6E3", color: "#667A62" },
    { amount: "₹10,000", impact: "Sponsor a medical camp for 100 people", icon: <FaHandHoldingHeart />, bg: "#EAF6E3", color: "#667A62" },
    { amount: "₹25,000", impact: "Support women entrepreneurship training", icon: <FaFemale />, bg: "#EAF6E3", color: "#667A62" }
  ];

  const stats = [
    { number: "10,000+", label: "Lives Impacted", icon: <FiUsers />, delay: 100 },
    { number: "₹2Cr+", label: "Donations Raised", icon: <FiDollarSign />, delay: 200 },
    { number: "500+", label: "Active Donors", icon: <FiHeart />, delay: 300 },
    { number: "100%", label: "Transparency", icon: <FiCheckCircle />, delay: 400 }
  ];

  const process = [
    { step: "01", title: "Choose Amount", description: "Select any amount you wish to contribute", icon: <FiDollarSign /> },
    { step: "02", title: "Make Payment", description: "Secure online payment with multiple options", icon: <FiLock /> },
    { step: "03", title: "Get Certificate", description: "Receive 80G certificate instantly", icon: <FiAward /> },
    { step: "04", title: "Track Impact", description: "Regular updates on your contribution", icon: <FiTrendingUp /> }
  ];

  const impactStories = [
    {
      name: "Rajesh Sharma",
      amount: "₹50,000",
      text: "Proud to support MSRS Foundation. Their transparency and impact reporting is exceptional! Seeing the transformation in children's lives is truly rewarding.",
      location: "Mumbai, India"
    },
    {
      name: "Priya Mehta",
      amount: "₹25,000",
      text: "The best decision I made this year. Seeing the smiles on children's faces is priceless. MSRS Foundation ensures every rupee reaches the right hands.",
      location: "Delhi, India"
    }
  ];

  const projectsYouSupport = [
    { title: "Education for All", icon: <FaGraduationCap />, impact: "500+ children educated" },
    { title: "Healthcare Access", icon: <FaHandHoldingHeart />, impact: "10,000+ patients treated" },
    { title: "Women Empowerment", icon: <FaFemale />, impact: "2,000+ women trained" },
    { title: "Environmental Care", icon: <FaTree />, impact: "5,000+ trees planted" }
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
          
          .support-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .support-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80');
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
          
          .benefit-card, .donation-card, .project-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .benefit-card::before, .donation-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.08), transparent);
            transition: left 0.5s ease;
          }
          
          .benefit-card:hover::before, .donation-card:hover::before {
            left: 100%;
          }
          
          .benefit-card:hover, .donation-card:hover, .project-card:hover {
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
          
          .amount-card {
            cursor: pointer;
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
        <div className="support-bg" />
        <div className="support-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg animate-pulse">
              Every Contribution Matters
            </span>
            <h1 className="banner-title text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]">
              Individual Support
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide">
              Support our mission through donations and help us create meaningful change in society.
            </p>
            <div className="mt-10">
              <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#2C3E2B] font-semibold rounded-full hover:shadow-2xl transition-all hover:gap-3">
                Donate Now <FiArrowRight />
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

      {/* Why Donate Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Why Donate
              </span>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-5">
                Why Donate to <br />MSRS Foundation?
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
              <p className="text-[#4A5C46] text-base mb-8 leading-relaxed">
                Your generous contribution helps us continue our mission of creating sustainable social impact 
                across communities. Every donation, big or small, makes a difference in someone's life.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="benefit-card flex items-start gap-4 p-4 bg-[#EAF6E3]/30 rounded-xl"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <div className="text-xl text-[#667A62]">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E2B] text-lg mb-1">{benefit.title}</h3>
                      <p className="text-[#4A5C46] text-sm">{benefit.description}</p>
                      <span className="text-xs text-[#667A62] font-semibold mt-1 inline-block">{benefit.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Impact Calculator
              </span>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-5">
                Impact of Your <br />Contribution
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
              
              <div className="space-y-4">
                {donationWays.map((way, idx) => (
                  <div 
                    key={idx} 
                    className="donation-card bg-gradient-to-r from-[#EAF6E3] to-white rounded-xl p-5 cursor-pointer group"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <div className="flex justify-between items-center flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                          <div className="text-2xl text-[#667A62]">{way.icon}</div>
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-[#2C3E2B]">{way.amount}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4A5C46] font-medium">{way.impact}</span>
                        <FiArrowRight className="text-[#667A62] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects You Support */}
              <div className="mt-8">
                <h3 className="font-bold text-[#2C3E2B] text-lg mb-4">Projects You Support</h3>
                <div className="grid grid-cols-2 gap-3">
                  {projectsYouSupport.map((project, idx) => (
                    <div key={idx} className="project-card bg-[#EAF6E3]/30 rounded-xl p-3 text-center">
                      <div className="text-2xl text-[#667A62] mb-2">{project.icon}</div>
                      <h4 className="font-semibold text-[#2C3E2B] text-sm">{project.title}</h4>
                      <p className="text-xs text-[#667A62]">{project.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Connecting Lines */}
      <section className="py-24 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Simple Process
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              How It Works
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Making a difference is just a few clicks away
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/3 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#667A62] to-transparent opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {process.map((item, idx) => (
                <div 
                  key={idx} 
                  className="process-step text-center group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative mb-5">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#667A62] transition-all duration-300 border-4 border-[#EAF6E3]">
                      <div className="text-2xl text-[#667A62] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#667A62] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-[#2C3E2B] text-lg mb-2">{item.title}</h4>
                  <p className="text-[#4A5C46] text-sm">{item.description}</p>
                  
                  {idx < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-4 transform -translate-y-1/2">
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
              Donor Stories
            </span>
            <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-4">
              What Our Donors Say
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Hear from our generous donors about their experience supporting our cause
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, idx) => (
              <div 
                key={idx} 
                className="testimonial-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#667A62] flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E2B] text-lg">{story.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#667A62] text-sm font-semibold">Donated: {story.amount}</span>
                      <span className="text-gray-400 text-xs">|</span>
                      <span className="text-gray-500 text-xs">{story.location}</span>
                    </div>
                  </div>
                  <div className="ml-auto text-yellow-500 flex">
                    <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                  </div>
                </div>
                <div className="relative">
                  <FiSmile className="absolute -top-2 -left-2 text-[#667A62] opacity-20 text-4xl" />
                  <p className="text-[#4A5C46] leading-relaxed italic pl-6">"{story.text}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#EAF6E3]">
                  <div className="flex items-center gap-2 text-sm text-[#667A62]">
                    <FiThumbsUp /> Verified Donor
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FiGift className="text-5xl text-[#667A62] mx-auto mb-5 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-4">
              Tax Benefits Under 80G
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-6"></div>
            <p className="text-[#4A5C46] text-lg mb-6 max-w-2xl mx-auto">
              Your donations are eligible for tax exemption under Section 80G of the Income Tax Act. 
              Get instant tax receipt for your contribution.
            </p>
            <div className="bg-white rounded-2xl p-6 inline-block shadow-lg">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-[#667A62] text-2xl" />
                <span className="text-[#2C3E2B] font-semibold">50% Tax Exemption on Donations</span>
              </div>
            </div>
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
            <FaDonate className="text-5xl text-[#667A62] mx-auto mb-5 floating-element" />
            <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <div className="w-20 h-0.5 bg-[#667A62] mx-auto mb-6"></div>
            <p className="text-[#EAF6E3] text-lg mb-10 max-w-2xl mx-auto">
              Your contribution today can change lives tomorrow. Every donation creates lasting impact.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                to="/donate" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 bg-[#667A62] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Donate Now <FiHeart />
              </Link>
              <Link 
                to="/contact" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] hover:text-white transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Contact Us <FiMail />
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Your donations are eligible for tax exemption under Section 80G
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualSupport;