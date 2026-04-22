import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiAward, FiUser, FiArrowRight, FiCheckCircle, FiBriefcase, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';



const BoardManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-out',
    });
  }, []);

  const boardMembers = [
    {
      name: "Srinivasa Sai Kavali",
      position: "Founder & Director",
      message: "MSRS Foundation is built on the pillars of integrity and selfless service. Our mission is to bridge the gap between opportunity and those who need it most in our communities.",
      bio: "A visionary leader and professional software architect, Srinivasa Sai Kavali founded the Maha Shree Rudra Samsthanam Foundation to drive structured community development and educational support across Andhra Pradesh and Telangana.",
      achievements: ["CSR-1 Registered Leader", "Tech-Social Innovator", "Founder of MSRS Foundation", "15+ Years Tech Experience"],
      // USE THE IMPORTED VARIABLE HERE
    image: "./images/profilepic3.jpg",
      email: "director@msrsfoundation.org",
      linkedin: "#"
    },
    {
      name: "Dr. Meena Sharma",
      position: "Vice Chairperson",
      bio: "Extensive experience in healthcare and education policy. Dr. Sharma oversees our community health initiatives and academic outreach programs.",
      achievements: ["Healthcare Excellence Award", "PhD in Public Health"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      email: "meena@msrsfoundation.org",
      linkedin: "#"
    },
    {
      name: "Mr. Amit Khanna",
      position: "Treasurer",
      bio: "A financial expert with decades of experience in corporate finance, ensuring every rupee at MSRS Foundation is utilized with 100% transparency.",
      achievements: ["Chartered Accountant", "NGO Governance Expert"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
      email: "finance@msrsfoundation.org",
      linkedin: "#"
    }
  ];


  return (
    <div className="bg-[#FCFDFB] font-sans selection:bg-[#667A62] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Mulish', sans-serif; }
        
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        
        .member-card { height: 180px; transition: all 0.3s ease; }
        .member-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(44, 62, 43, 0.08); }
        
        .team-card { height: 320px; transition: all 0.3s ease; }
        .team-card:hover { transform: translateY(-5px); }

        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Board Management Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              MSRS FOUNDATION
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Board & Leadership
          </h1>
          <div className="flex justify-center gap-2 mb-5">
            <div className="w-12 h-0.5 bg-[#667A62]"></div>
            <div className="w-6 h-0.5 bg-[#667A62]"></div>
            <div className="w-3 h-0.5 bg-[#667A62]"></div>
          </div>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Leadership that Inspires Change - Our leadership team brings vision, integrity, and expertise
            to drive meaningful social impact across communities.
          </p>
        </div>
      </section>

     

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative z-10 border-[12px] border-[#F7F9F5]">
                <img src={boardMembers[0].image} alt="Founder" className="w-full h-[550px] object-cover object-[center_10%]" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#667A62]/10 -z-0"></div>
            </div>
            
            <div data-aos="fade-left">
              <h4 className="text-[#667A62] font-bold text-xs tracking-widest uppercase mb-4">The Director's Message</h4>
              <h2 className="font-serif text-4xl text-[#2C3E2B] mb-6">{boardMembers[0].name}</h2>
              
              <div className="bg-[#F7F9F5] p-8 mb-8 border-l-4 border-[#667A62] relative">
                <FaQuoteLeft className="text-4xl text-[#667A62]/10 absolute top-4 right-4" />
                <p className="text-[#4A5C46] italic text-lg leading-relaxed font-serif">
                  "{boardMembers[0].message}"
                </p>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{boardMembers[0].bio}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {boardMembers[0].achievements.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-[#2C3E2B]">
                    <FiCheckCircle className="text-[#667A62]" /> {a}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-[#2C3E2B] text-white px-8 py-3 text-xs font-bold hover:bg-[#667A62] transition-all">
                  GET IN TOUCH
                </button>
                <div className="flex items-center gap-3 ml-4">
                  <FiLinkedin className="text-gray-400 hover:text-[#667A62] cursor-pointer" />
                  <FiMail className="text-gray-400 hover:text-[#667A62] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-24 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="font-serif text-3xl text-[#2C3E2B] mb-2">The Board of Directors</h3>
            <p className="text-gray-400 text-xs">Strategic guidance from industry veterans</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {boardMembers.slice(1).map((member, i) => (
              <div key={i} className="member-card flex bg-white border border-[#EAF6E3] overflow-hidden" data-aos="fade-up">
                <div className="w-1/3 h-full overflow-hidden">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                </div>
                <div className="w-2/3 p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#2C3E2B]">{member.name}</h4>
                    <span className="text-[#667A62] text-[10px] font-bold uppercase tracking-widest mb-2 block">{member.position}</span>
                    <p className="text-gray-500 text-[11px] line-clamp-3 leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex gap-3 pt-3">
                    <FiMail className="text-gray-300 hover:text-[#667A62] cursor-pointer" size={14} />
                    <FiLinkedin className="text-gray-300 hover:text-[#667A62] cursor-pointer" size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreTeam />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Transparent. Accountable. Committed.
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                We believe in leading by example. Our management team is dedicated to the highest standards of NGO governance.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <Link 
                to="/contact"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                Meet the Full Team 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CoreTeam = () => {
  const team = [
    { name: "Arjun Patel", role: "Lead Coordinator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { name: "Priya Sharma", role: "Education Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Vikram Reddy", role: "Media & Tech Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div data-aos="fade-right">
            <h3 className="font-serif text-3xl text-[#2C3E2B] mb-2">Core Management</h3>
            <p className="text-gray-400 text-xs">The dedicated team behind MSRS operations</p>
          </div>
          <FiBriefcase className="text-4xl text-[#F7F9F5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="team-card bg-[#F7F9F5] border border-gray-100 p-6 flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-white shadow-lg">
                <img src={m.image} className="w-full h-full object-cover" alt={m.name} />
              </div>
              <h4 className="font-serif font-bold text-xl text-[#2C3E2B] mb-1">{m.name}</h4>
              <p className="text-[#667A62] text-[10px] font-bold uppercase tracking-widest">{m.role}</p>
              <div className="mt-6 flex gap-4">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#667A62] hover:text-white transition-all cursor-pointer">
                  <FiMail size={12} />
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#667A62] hover:text-white transition-all cursor-pointer">
                  <FiLinkedin size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardManagement;