import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiAward, FiUser, FiArrowRight, FiStar, FiCheckCircle, FiBriefcase, FiTrendingUp, FiHeart, FiShield } from 'react-icons/fi';
import { FaQuoteLeft, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BoardManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const boardMembers = [
    {
      name: "Srinivasa Sai Kavali",
      position: "Founder & Chairman",
      message: "Our vision is to create a society where every individual has access to basic necessities and opportunities for growth. MSRS Foundation is committed to serving humanity with integrity and compassion.",
      bio: "With over 25 years of experience in social development, Shri Rajendra Prasad founded MSRS Foundation with a vision to transform lives. His leadership has guided the foundation to achieve remarkable milestones in community development.",
      achievements: ["Padma Shri Nominee", "Social Entrepreneur of the Year 2020", "PhD in Social Work", "25+ Years Experience"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      email: "founder@msrsfoundation.org",
      linkedin: "#"
    },
    {
      name: "Dr. Meena Sharma",
      position: "Vice Chairperson",
      bio: "Dr. Meena Sharma brings extensive experience in healthcare and education sectors. She has led numerous national-level health initiatives and policy reforms.",
      achievements: ["Former WHO Consultant", "Healthcare Excellence Award", "PhD in Public Health", "20+ Years Experience"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "meena@msrsfoundation.org",
      linkedin: "#"
    },
    {
      name: "Mr. Amit Khanna",
      position: "Treasurer",
      bio: "Financial expert with 20+ years in corporate finance and NGO management. He ensures transparent and accountable financial operations.",
      achievements: ["CA by profession", "CSR Excellence Award 2022", "Financial Leadership Award", "25+ Years Experience"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      email: "amit@msrsfoundation.org",
      linkedin: "#"
    }
  ];

  const advisors = [
    {
      name: "Prof. S. Ramakrishnan",
      position: "Strategic Advisor",
      expertise: "Policy Making & Governance",
      bio: "Former Dean at IIM Bangalore with expertise in public policy and governance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Dr. Lakshmi Narayan",
      position: "Technical Advisor",
      expertise: "Rural Development & Technology",
      bio: "PhD in Rural Development from TISS, leading technology interventions in rural India.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Experience", icon: <FiTrendingUp />, delay: 100 },
    { number: "50+", label: "Projects Completed", icon: <FiCheckCircle />, delay: 200 },
    { number: "100+", label: "Team Members", icon: <FiUser />, delay: 300 },
    { number: "15+", label: "Awards Received", icon: <FiAward />, delay: 400 },
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .banner-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.02em; }
          .section-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.01em; }
          
          .board-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .board-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80');
            background-size: cover;
            background-position: center;
            animation: zoomIn 20s ease-out infinite alternate;
          }
          
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          .banner-content { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .founder-card, .member-card, .advisor-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .founder-card:hover, .member-card:hover, .advisor-card:hover {
            transform: translateY(-8px);
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
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .quote-icon {
            opacity: 0.1;
            font-size: 4rem;
            position: absolute;
            top: 20px;
            left: 20px;
          }
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="board-bg" />
        <div className="board-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Leadership
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Board & Management
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Leadership that Inspires Change - Our leadership team brings vision, integrity, and expertise
            </p>
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

      {/* Founder Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -top-5 -left-5 w-full h-full bg-[#EAF6E3] rounded-2xl"></div>
              <img 
                src={boardMembers[0].image} 
                alt={boardMembers[0].name}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#667A62] rounded-full opacity-10 floating-element"></div>
            </div>
            
            <div data-aos="fade-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Founder's Message
              </span>
              <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-2">
                {boardMembers[0].name}
              </h2>
              <p className="text-[#667A62] font-semibold mb-6">{boardMembers[0].position}</p>
              
              <div className="bg-[#EAF6E3] p-6 rounded-xl mb-6 relative">
                <FaQuoteLeft className="absolute text-[#667A62] opacity-10 text-5xl" style={{ bottom: 10, right: 10 }} />
                <p className="text-[#4A5C46] italic leading-relaxed">"{boardMembers[0].message}"</p>
              </div>
              
              <p className="text-[#4A5C46] mb-4 leading-relaxed">{boardMembers[0].bio}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {boardMembers[0].achievements.map((achievement, idx) => (
                  <span key={idx} className="bg-[#EAF6E3] text-[#667A62] px-3 py-1 rounded-full text-xs font-semibold">
                    {achievement}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={`mailto:${boardMembers[0].email}`} className="flex items-center gap-2 px-5 py-2 bg-[#667A62] text-white rounded-full hover:bg-[#4A5C46] transition">
                  <FiMail size={14} /> Contact
                </a>
                <a href={boardMembers[0].linkedin} className="flex items-center gap-2 px-5 py-2 border border-[#667A62] text-[#667A62] rounded-full hover:bg-[#667A62] hover:text-white transition">
                  <FiLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Leadership Team
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Board of Directors
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.slice(1).map((member, index) => (
              <div 
                key={index} 
                className="member-card bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-2/5">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold text-[#2C3E2B] mb-1">{member.name}</h3>
                  <p className="text-[#667A62] font-semibold text-sm mb-3">{member.position}</p>
                  <p className="text-[#4A5C46] text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <span key={idx} className="text-xs bg-[#EAF6E3] text-[#667A62] px-2 py-1 rounded">
                        {achievement}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={`mailto:${member.email}`} className="text-[#667A62] hover:text-[#4A5C46] transition">
                      <FiMail size={18} />
                    </a>
                    <a href={member.linkedin} className="text-[#667A62] hover:text-[#4A5C46] transition">
                      <FiLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Strategic Guidance
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Our Advisors
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div 
                key={index} 
                className="advisor-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl overflow-hidden shadow-lg flex items-center p-6"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
                  <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E2B] mb-1">{advisor.name}</h3>
                  <p className="text-[#667A62] font-semibold text-sm mb-1">{advisor.position}</p>
                  <p className="text-xs text-[#4A5C46] mb-2">{advisor.expertise}</p>
                  <p className="text-xs text-gray-500">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section Integrated */}
      <CoreTeam />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FaHandsHelping className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Join Our Mission
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              Be part of our journey to create lasting social impact. Join us as a volunteer, donor, or partner.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/volunteer">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all">
                  Become a Volunteer <FiArrowRight />
                </button>
              </Link>
              <Link to="/donate">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] transition-all">
                  Support Our Cause <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Core Team Component
const CoreTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const teamData = {
    projectHeads: [
      { name: "Rajesh Kumar", role: "Project Head - Education", qualification: "M.A. in Education", specialization: "Curriculum Development", experience: "12+ years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sunita Reddy", role: "Project Head - Healthcare", qualification: "MPH", specialization: "Public Health", experience: "10+ years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Anil Deshmukh", role: "Project Head - Rural Dev", qualification: "MSW", specialization: "Rural Development", experience: "15+ years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" }
    ],
    fieldOfficers: [
      { name: "Priya Singh", role: "Senior Field Officer", qualification: "BSW", specialization: "Community Mobilization", experience: "8+ years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
      { name: "Vikram Patil", role: "Field Coordinator", qualification: "Rural Management", specialization: "Livelihood Programs", experience: "6+ years", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" }
    ],
    csrCoordinators: [
      { name: "Neha Gupta", role: "CSR Coordinator", qualification: "MBA", specialization: "CSR & Partnership", experience: "7+ years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
      { name: "Amit Sharma", role: "Partnership Manager", qualification: "PGDM", specialization: "Corporate Relations", experience: "9+ years", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
    ]
  };

  const categories = [
    { title: "Project Heads", key: "projectHeads", icon: <FiBriefcase /> },
    { title: "Field Officers", key: "fieldOfficers", icon: <FiUser /> },
    { title: "CSR Coordinators", key: "csrCoordinators", icon: <FiShield /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
            Our Team
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
            Our Core Team
          </h2>
          <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
          <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
            People Behind the Purpose - Dedicated professionals working tirelessly for social change
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-[#2C3E2B] mb-8 text-center flex items-center justify-center gap-2">
              <span className="text-[#667A62]">{category.icon}</span>
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData[category.key].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#2C3E2B] mb-1">{member.name}</h4>
                    <p className="text-[#667A62] font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-[#4A5C46] text-xs mb-1">{member.qualification}</p>
                    <p className="text-gray-500 text-xs mb-2">{member.specialization}</p>
                    <p className="text-xs text-[#667A62] font-semibold">{member.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardManagement;