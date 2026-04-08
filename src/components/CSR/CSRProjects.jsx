import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiUsers, FiTrendingUp, FiAward, FiArrowRight, FiCheckCircle, FiBarChart2, FiHeart, FiBookOpen, FiGlobe } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CSRProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'Rural Healthcare Initiative',
      objective: 'To provide quality healthcare access to rural communities through mobile medical units and telemedicine services.',
      beneficiaries: '50,000+ rural residents across 100+ villages',
      impactMetrics: '30% reduction in preventable diseases • 10,000+ teleconsultations conducted • 500+ health camps organized',
      csrAlignment: 'Healthcare & Wellness, SDG 3 (Good Health)',
      icon: <FiHeart />,
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'
    },
    {
      id: 2,
      title: 'Digital Education Program',
      objective: 'Bridge the digital divide by providing smart classrooms and digital literacy training to underprivileged students.',
      beneficiaries: '25,000+ students in 150+ government schools',
      impactMetrics: '85% improvement in digital literacy • 40% increase in student engagement • 500+ teachers trained',
      csrAlignment: 'Education & Empowerment, SDG 4 (Quality Education)',
      icon: <FiBookOpen />,
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80'
    },
    {
      id: 3,
      title: 'Women Empowerment Mission',
      objective: 'Empower women through skill development, financial literacy, and entrepreneurship programs.',
      beneficiaries: '15,000+ women in urban and rural areas',
      impactMetrics: '5,000+ women employed • 2,000+ women entrepreneurs supported • 300+ self-help groups formed',
      csrAlignment: 'Gender Equality, SDG 5 (Gender Equality)',
      icon: <FiUsers />,
      category: 'Empowerment',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80'
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Project',
      objective: 'Promote sustainable farming practices and improve agricultural productivity among small-scale farmers.',
      beneficiaries: '10,000+ farming families',
      impactMetrics: '40% increase in crop yield • 25% reduction in water usage • 1,000+ farmers trained',
      csrAlignment: 'Environment & Sustainability, SDG 2 (Zero Hunger)',
      icon: <FiGlobe />,
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80'
    },
    {
      id: 5,
      title: 'Clean Water & Sanitation Drive',
      objective: 'Provide access to clean drinking water and proper sanitation facilities in underserved communities.',
      beneficiaries: '100,000+ community members',
      impactMetrics: '200+ water purification systems installed • 500+ toilets constructed • 50+ villages covered',
      csrAlignment: 'Water & Sanitation, SDG 6 (Clean Water)',
      icon: <FiBarChart2 />,
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80'
    },
    {
      id: 6,
      title: 'Skill Development Center',
      objective: 'Establish vocational training centers to enhance employability skills among youth.',
      beneficiaries: '20,000+ young adults',
      impactMetrics: '75% placement rate • 8,000+ youth employed • 15+ vocational courses offered',
      csrAlignment: 'Skill Development, SDG 8 (Decent Work)',
      icon: <FiTrendingUp />,
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80'
    }
  ];

  const stats = [
    { number: '50+', label: 'Active Projects', icon: <FiTarget />, delay: 100 },
    { number: '200K+', label: 'Lives Impacted', icon: <FiUsers />, delay: 200 },
    { number: '15+', label: 'States Covered', icon: <FiGlobe />, delay: 300 },
    { number: '25+', label: 'Corporate Partners', icon: <FiAward />, delay: 400 },
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
          
          .csr-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .csr-bg {
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
          
          .project-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.08), transparent);
            transition: left 0.6s ease;
            z-index: 1;
          }
          
          .project-card:hover::before {
            left: 100%;
          }
          
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.15);
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
          
          .category-badge {
            transition: all 0.3s ease;
          }
          
          .project-card:hover .category-badge {
            background: #667A62;
            color: white;
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
          
          .impact-metric {
            position: relative;
            padding-left: 20px;
            margin-bottom: 6px;
          }
          
          .impact-metric::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #667A62;
            font-size: 12px;
          }
          
          .image-container {
            position: relative;
            overflow: hidden;
            height: 280px;
          }
          
          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .project-card:hover .image-container img {
            transform: scale(1.08);
          }
          
          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(44, 62, 43, 0.8) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          
          .project-card:hover .image-overlay {
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .banner-title {
              font-size: 2.8rem !important;
            }
            .image-container {
              height: 220px;
            }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="csr-bg" />
        <div className="csr-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg animate-pulse">
              Corporate Social Responsibility
            </span>
            <h1 className="banner-title text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]">
              CSR Projects
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide">
              Strategic Initiatives. Measurable Impact. Sustainable Change.
            </p>
            <div className="mt-10">
              <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#2C3E2B] font-semibold rounded-full hover:shadow-2xl transition-all hover:gap-3">
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
      <section className="py-16 bg-[#2C3E2B] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center" data-aos="zoom-in-up" data-aos-delay={stat.delay}>
                <div className="stat-icon text-5xl text-[#667A62] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-[#EAF6E3] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white shadow-md rounded-full">
              Our Initiatives
            </span>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E2B] mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#667A62] to-transparent mx-auto mb-6"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-base">
              Discover our CSR-aligned projects designed to address critical social challenges while delivering accountability, scalability, and sustainable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="project-card bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Increased image height from 192px to 280px */}
                <div className="image-container relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="image-overlay"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="category-badge inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-[#667A62] text-xs font-bold rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl bg-black/30 p-2 rounded-full backdrop-blur-sm">{project.icon}</div>
                  </div>
                </div>
                
                {/* Card content - same size as before */}
                <div className="p-6">
                  <h3 className="section-title text-2xl font-bold text-[#2C3E2B] mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-[#667A62] mb-2 text-sm uppercase tracking-wide">
                        <FiTarget size={14} /> Objective
                      </h4>
                      <p className="text-[#4A5C46] leading-relaxed text-sm">
                        {project.objective}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-[#667A62] mb-2 text-sm uppercase tracking-wide">
                        <FiUsers size={14} /> Target Beneficiaries
                      </h4>
                      <p className="text-[#4A5C46] leading-relaxed text-sm font-medium">
                        {project.beneficiaries}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-[#667A62] mb-2 text-sm uppercase tracking-wide">
                        <FiTrendingUp size={14} /> Impact Metrics
                      </h4>
                      <div className="space-y-1">
                        {project.impactMetrics.split('•').map((metric, i) => (
                          <p key={i} className="impact-metric text-[#4A5C46] leading-relaxed text-sm">
                            {metric.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-[#667A62] mb-2 text-sm uppercase tracking-wide">
                        <FiAward size={14} /> CSR Alignment
                      </h4>
                      <p className="text-[#4A5C46] leading-relaxed text-sm">
                        {project.csrAlignment}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-[#EAF6E3]">
                    <Link 
                      to="/donate" 
                      className="inline-flex items-center gap-2 text-[#667A62] font-semibold text-sm hover:gap-3 transition-all group"
                    >
                      Support This Project 
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Our Impact
              </span>
              <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-5">
                Creating Measurable <br />Social Impact
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="100">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#667A62] transition-colors duration-300">
                    <FiCheckCircle className="text-xl text-[#667A62] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E2B] mb-2">Transparent Reporting</h3>
                    <p className="text-[#4A5C46] text-sm">Regular impact assessments and detailed reports shared with all stakeholders.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#667A62] transition-colors duration-300">
                    <FiBarChart2 className="text-xl text-[#667A62] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E2B] mb-2">Data-Driven Decisions</h3>
                    <p className="text-[#4A5C46] text-sm">Using real-time data and analytics to optimize program effectiveness.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#667A62] transition-colors duration-300">
                    <FiUsers className="text-xl text-[#667A62] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E2B] mb-2">Community Engagement</h3>
                    <p className="text-[#4A5C46] text-sm">Active involvement of local communities in project planning and execution.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <div className="absolute -top-5 -right-5 w-full h-full bg-gradient-to-tl from-[#EAF6E3] to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop&q=80"
                alt="Impact"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover relative z-10"
              />
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-[#667A62] rounded-full opacity-5 floating-element"></div>
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
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <div className="w-20 h-0.5 bg-[#667A62] mx-auto mb-6"></div>
            <p className="text-[#EAF6E3] text-lg mb-10 max-w-2xl mx-auto">
              Join hands with MSRS Foundation to create lasting social impact through strategic CSR partnerships.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                to="/contact" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 bg-[#667A62] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Become a Partner <FiArrowRight />
              </Link>
              <Link 
                to="/donate" 
                className="btn-premium inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] hover:text-white transition-all hover:gap-3 hover:-translate-y-0.5"
              >
                Support Our Cause <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRProjects;