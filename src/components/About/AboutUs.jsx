import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiHeart, FiGlobe, FiTrendingUp, FiUsers, FiTarget, FiEye, FiBookOpen, FiSun, FiStar, FiArrowRight, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const values = [
    { icon: <FiShield />, title: 'Accountability', description: 'Maintaining highest standards of transparency and ethical governance in all operations.', delay: 100 },
    { icon: <FiHeart />, title: 'Compassion', description: 'Driven by genuine care for communities with dignity, respect, and empathy.', delay: 200 },
    { icon: <FiGlobe />, title: 'Sustainability', description: 'Creating lasting positive change through environmentally conscious solutions.', delay: 300 },
    { icon: <FiTrendingUp />, title: 'Innovation', description: 'Implementing modern solutions and technology-driven approaches for social challenges.', delay: 400 },
  ];

  const stats = [
    { number: '2016', label: 'Legacy Since', icon: <FiCalendar />, delay: 100 },
    { number: '50K+', label: 'Lives Impacted', icon: <FiUsers />, delay: 200 },
    { number: '15+', label: 'Active Programs', icon: <FiBookOpen />, delay: 300 },
    { number: '8+', label: 'States Covered', icon: <FiMapPin />, delay: 400 },
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
          
          .about-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .about-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80');
            background-size: cover;
            background-position: center;
            animation: zoomIn 15s ease-out infinite alternate;
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
          
          .vision-card, .mission-card, .value-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .vision-card::before, .mission-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.1), transparent);
            transition: left 0.6s ease;
          }
          
          .vision-card:hover::before, .mission-card:hover::before {
            left: 100%;
          }
          
          .vision-card:hover, .mission-card:hover, .value-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.12);
          }
          
          .value-card {
            position: relative;
          }
          
          .value-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, #667A62, #EAF6E3);
            transition: width 0.5s ease;
          }
          
          .value-card:hover::after {
            width: 100%;
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
            transform: scale(1.1) rotate(5deg);
          }
          
          .counter-number {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
          }
          
          .image-hover {
            transition: all 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .image-hover:hover {
            transform: scale(1.02);
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
              font-size: 2.8rem !important;
            }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="about-bg" />
        <div className="about-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg animate-pulse">
              Established 2016
            </span>
            <h1 className="banner-title text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]">
              About MSRS Foundation
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide">
              Purpose-Driven. Impact-Focused. Legacy-Built.
            </p>
            <div className="mt-10">
              <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#2C3E2B] font-semibold rounded-full hover:shadow-2xl transition-all hover:gap-3">
                Support Our Cause <FiArrowRight />
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

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white shadow-md rounded-full">
              Our Guiding Light
            </span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E2B] mb-4">
              Vision & Mission
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Our roadmap to creating lasting impact and transforming communities across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="vision-card bg-white rounded-2xl p-10 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EAF6E3] to-[#667A62]/10 flex items-center justify-center mb-6">
                <FiEye className="text-2xl text-[#667A62]" />
              </div>
              <h3 className="section-title text-3xl font-bold text-[#2C3E2B] mb-4">Our Vision</h3>
              <p className="text-[#4A5C46] leading-relaxed text-base mb-6">
                To create a society where every individual has access to quality healthcare, education, 
                and opportunities for sustainable livelihood, enabling them to live with dignity and purpose.
              </p>
              <div className="flex items-center gap-2 text-[#667A62] text-sm font-semibold uppercase tracking-wider group cursor-pointer">
                <span>Our Promise</span>
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="mission-card bg-white rounded-2xl p-10 shadow-xl" data-aos="fade-left" data-aos-duration="1000">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EAF6E3] to-[#667A62]/10 flex items-center justify-center mb-6">
                <FiTarget className="text-2xl text-[#667A62]" />
              </div>
              <h3 className="section-title text-3xl font-bold text-[#2C3E2B] mb-4">Our Mission</h3>
              <p className="text-[#4A5C46] leading-relaxed text-base mb-6">
                To serve humanity through structured social interventions, strategic partnerships, 
                and transparent governance, ensuring measurable impact and long-term sustainability.
              </p>
              <div className="flex items-center gap-2 text-[#667A62] text-sm font-semibold uppercase tracking-wider group cursor-pointer">
                <span>Our Commitment</span>
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Who We Are
              </span>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-5">
                MAHA SHREE RUDRA <br />SAMSTHANAM FOUNDATION
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
              
              <div className="space-y-5">
                <p className="text-[#4A5C46] leading-relaxed text-base" data-aos="fade-up" data-aos-delay="100">
                  MSRS Foundation is a Section 8 non-profit organization, established with a vision to create 
                  sustainable and inclusive development across diverse communities.
                </p>
                <p className="text-[#4A5C46] leading-relaxed text-base" data-aos="fade-up" data-aos-delay="200">
                  Registered under the Ministry of Corporate Affairs, Government of India, the foundation operates 
                  with a strong focus on accountability, transparency, and measurable social impact.
                </p>
                <p className="text-[#4A5C46] leading-relaxed text-base" data-aos="fade-up" data-aos-delay="300">
                  The organization works across multiple sectors including healthcare, education, disaster relief, 
                  and social empowerment, aligning with national development goals and global sustainability frameworks.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#EAF6E3]">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card text-center group" data-aos="zoom-in" data-aos-delay={stat.delay}>
                    <div className="stat-icon text-3xl text-[#667A62] mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="counter-number text-3xl font-bold text-[#2C3E2B] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold text-[#667A62] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-br from-[#EAF6E3] to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop&q=80"
                alt="About MSRS Foundation"
                className="image-hover rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#667A62] rounded-full opacity-5 floating-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white shadow-md rounded-full">
              Our Principles
            </span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E2B] mb-4">
              Core Values
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Fundamental principles that shape every decision and initiative we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card bg-white rounded-2xl p-8 shadow-lg text-center group"
                data-aos="flip-left"
                data-aos-delay={value.delay}
                data-aos-duration="800"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EAF6E3] to-[#667A62]/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl text-[#667A62]">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-3">{value.title}</h3>
                <p className="text-[#4A5C46] leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative" data-aos="fade-right" data-aos-duration="1000">
              <div className="absolute -top-5 -right-5 w-full h-full bg-gradient-to-tl from-[#EAF6E3] to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop&q=80"
                alt="Founder - Srinivasa Sai Kavali"
                className="image-hover rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-[#667A62] rounded-full opacity-5 floating-element"></div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000">
              <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Founder & Director
              </span>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-3">
                Srinivasa Sai Kavali
              </h2>
              <p className="text-[#667A62] font-semibold mb-6 text-base">
                Carrying a Legacy of Service Forward
              </p>
              <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
              
              <div className="mb-8 p-8 bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#667A62] opacity-5 rounded-full"></div>
                <FiSun className="text-3xl text-[#667A62] mb-4 floating-element" />
                <p className="text-[#2C3E2B] leading-relaxed text-base italic mb-4">
                  "This foundation is my tribute to my grandfather. Every life we touch, every smile we restore, 
                  and every service we provide is a continuation of his dream. MSRS Foundation exists to serve—not 
                  for today, but for the future of humanity."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-[#667A62]"></div>
                  <div>
                    <p className="text-[#2C3E2B] font-bold">Srinivasa Sai Kavali</p>
                    <p className="text-[#4A5C46] text-sm">Founder & Director | MSRS Foundation</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[#4A5C46] leading-relaxed text-base" data-aos="fade-up" data-aos-delay="100">
                  Born into a family deeply rooted in spirituality and public welfare, Srinivasa Sai Kavali's life 
                  has been shaped by the values of selfless service, devotion, and responsibility toward society.
                </p>
                <p className="text-[#4A5C46] leading-relaxed text-base" data-aos="fade-up" data-aos-delay="200">
                  After the untimely demise of his grandfather in 2021, he established MSRS Foundation as a continuation 
                  of the sacred service legacy that began in 2016, expanding it to serve on a national and international scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#EAF6E3] to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E2B] mb-4">
              Join Us in Our Mission
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] text-lg mb-10 max-w-2xl mx-auto">
              Be a part of our journey to create lasting change and transform lives across communities.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                to="/donate" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 bg-[#667A62] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Support Our Cause <FiArrowRight />
              </Link>
              <Link 
                to="/get-involved" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#667A62] text-[#667A62] font-semibold rounded-full hover:bg-[#667A62] hover:text-white transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Partner With Us <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;