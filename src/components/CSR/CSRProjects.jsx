import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiUsers, FiTrendingUp, FiAward, FiArrowRight, FiCheckCircle, FiBarChart2, FiHeart, FiBookOpen, FiGlobe } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CSRProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
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

  const categories = ['All', 'Healthcare', 'Education', 'Empowerment', 'Sustainability', 'Infrastructure', 'Development'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .premium-gradient-text {
            background: linear-gradient(to right, #2C3E2B, #667A62, #8A9A87);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .project-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            background: white;
            border-radius: 0px;
            height: 300px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          
          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.15);
          }
          
          /* Image Container - Hidden initially, slides up from bottom on hover */
          .image-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            overflow: hidden;
            transform: translateY(100%);
            transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            z-index: 1;
          }
          
          /* On hover, full image slides up completely from bottom to top */
          .project-card:hover .image-container {
            transform: translateY(0);
          }
          
          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          /* Overlay on image for better text visibility */
          .image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            pointer-events: none;
          }
          
          /* Content Container */
          .card-content {
            position: relative;
            z-index: 2;
            background: white;
            height: 100%;
            padding: 16px;
            transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            display: flex;
            flex-direction: column;
          }
          
          /* On hover, content slides up slowly from bottom to reveal image */
          .project-card:hover .card-content {
            transform: translateY(-100%);
          }
          
          /* Image category badge */
          .image-category-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 10;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(4px);
            padding: 5px 12px;
            font-size: 11px;
            font-weight: bold;
            color: #667A62;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          
          /* Image icon wrapper */
          .image-icon-wrapper {
            position: absolute;
            bottom: 16px;
            left: 16px;
            z-index: 10;
            width: 40px;
            height: 40px;
            background: #667A62;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          
          .impact-metric {
            position: relative;
            padding-left: 18px;
            margin-bottom: 5px;
            font-size: 12px;
          }
          
          .impact-metric::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #667A62;
            font-size: 11px;
          }
          
          .stagger-border {
            position: relative;
          }
          .stagger-border::after {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: -20px;
            bottom: -20px;
            border: 2px solid #667A62;
            z-index: -1;
            transition: all 0.5s ease;
          }
          .stagger-border:hover::after {
            top: 10px;
            left: 10px;
            right: -10px;
            bottom: -10px;
          }

          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }

          .category-tab {
            transition: all 0.3s ease;
          }
          .category-tab:hover {
            background: #667A62;
            color: white;
            border-color: #667A62;
          }
          .category-tab.active {
            background: #667A62;
            color: white;
            border-color: #667A62;
          }

          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="CSR Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              CORPORATE SOCIAL RESPONSIBILITY
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4" data-aos="fade-up" data-aos-delay="200">
            Strategic CSR Initiatives
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Delivering measurable impact through transparent, scalable, and sustainable development programs aligned with national priorities.
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID SECTION WITH CATEGORY TABS --- */}
      <section className="py-20 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              OUR INITIATIVES
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <p className="text-gray-500 mt-4 tracking-widest text-sm">Flagship CSR Projects Creating Lasting Change</p>
          </div>

          {/* Category Tabs */}
          <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-tab px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? 'active bg-[#667A62] text-white border-[#667A62] shadow-md'
                      : 'bg-white text-[#4A5C46] border-gray-200 hover:bg-[#667A62] hover:text-white hover:border-[#667A62]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                {/* Image that slides up from bottom on hover */}
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay"></div>
                  <div className="image-category-badge">
                    {project.category}
                  </div>
                  <div className="image-icon-wrapper">
                    {project.icon}
                  </div>
                </div>
                
                {/* Content - slides up slowly on hover to reveal image */}
                <div className="card-content">
                  {/* Category Badge in Content */}
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-[#EAF6E3] text-[#667A62] text-[9px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-base font-bold text-[#2C3E2B] mb-2 line-clamp-1">{project.title}</h3>
                  
                  <div className="space-y-2 flex-grow">
                    <div>
                      <h4 className="text-[9px] font-bold text-[#667A62] uppercase tracking-wider mb-0.5">Objective</h4>
                      <p className="text-[#4A5C46] text-[11px] leading-relaxed line-clamp-2">{project.objective}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-[9px] font-bold text-[#667A62] uppercase tracking-wider mb-0.5">Beneficiaries</h4>
                      <p className="text-[#4A5C46] text-[11px] font-medium line-clamp-1">{project.beneficiaries}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-[9px] font-bold text-[#667A62] uppercase tracking-wider mb-0.5">Impact Metrics</h4>
                      <div className="space-y-0.5">
                        {project.impactMetrics.split('•').slice(0, 2).map((metric, i) => (
                          <p key={i} className="impact-metric text-[#4A5C46] text-[11px] leading-tight">
                            {metric.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-[#EAF6E3]">
                    <Link 
                      to="/donate" 
                      className="inline-flex items-center gap-1 text-[#667A62] font-semibold text-[10px] hover:gap-2 transition-all group"
                    >
                      Support This Project 
                      <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#4A5C46]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="stagger-border">
                <img 
                  src="./images/working.avif" 
                  className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Impact"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div data-aos="fade-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-[#667A62]"></div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B]">Our Impact Framework</h2>
                </div>
                <p className="text-[#4A5C46] text-lg leading-relaxed font-light">
                  We believe in creating measurable, sustainable change through structured interventions 
                  and transparent reporting mechanisms.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="p-4 border-l-2 border-[#667A62] bg-[#F7F9F5]">
                    <h4 className="font-bold text-[#2C3E2B] mb-1 uppercase text-[10px] tracking-widest">Transparent Reporting</h4>
                    <p className="text-xs text-gray-600">Regular impact assessments and detailed reports shared with all stakeholders.</p>
                  </div>
                  <div className="p-4 border-l-2 border-[#667A62] bg-[#F7F9F5]">
                    <h4 className="font-bold text-[#2C3E2B] mb-1 uppercase text-[10px] tracking-widest">Data-Driven Decisions</h4>
                    <p className="text-xs text-gray-600">Using real-time analytics to optimize program effectiveness and reach.</p>
                  </div>
                  <div className="p-4 border-l-2 border-[#667A62] bg-[#F7F9F5]">
                    <h4 className="font-bold text-[#2C3E2B] mb-1 uppercase text-[10px] tracking-widest">Community Engagement</h4>
                    <p className="text-xs text-gray-600">Active involvement of local communities in project planning and execution.</p>
                  </div>
                  <div className="p-4 border-l-2 border-[#667A62] bg-[#F7F9F5]">
                    <h4 className="font-bold text-[#2C3E2B] mb-1 uppercase text-[10px] tracking-widest">Sustainable Outcomes</h4>
                    <p className="text-xs text-gray-600">Designing interventions that create lasting value beyond our presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Ready to partner for change?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Join hands with MSRS Foundation to create lasting social impact through strategic CSR partnerships.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <Link 
                to="/schedule-meeting" 
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                Become a Partner 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <Link 
                to="/donate" 
                className="px-5 py-2.5 border border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[#2C3E2B] transition-all duration-300"
              >
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRProjects;