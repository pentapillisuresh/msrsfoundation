import React from 'react';
import PageHeader from '../Common/PageHeader';
import CoreTeam from './CoreTeam';
import { FiMail, FiLinkedin, FiAward, FiUser } from 'react-icons/fi';

const BoardManagement = () => {
  const boardMembers = [
    {
      name: "Shri Rajendra Prasad",
      position: "Founder & Chairman",
      message: "Our vision is to create a society where every individual has access to basic necessities and opportunities for growth. MSRS Foundation is committed to serving humanity with integrity and compassion.",
      bio: "With over 25 years of experience in social development, Shri Rajendra Prasad founded MSRS Foundation with a vision to transform lives.",
      achievements: ["Padma Shri Nominee", "Social Entrepreneur of the Year 2020", "PhD in Social Work"]
    },
    {
      name: "Dr. Meena Sharma",
      position: "Vice Chairperson",
      bio: "Dr. Meena Sharma brings extensive experience in healthcare and education sectors.",
      achievements: ["Former WHO Consultant", "Healthcare Excellence Award"]
    },
    {
      name: "Mr. Amit Khanna",
      position: "Treasurer",
      bio: "Financial expert with 20+ years in corporate finance and NGO management.",
      achievements: ["CA by profession", "CSR Excellence Award 2022"]
    }
  ];

  const advisors = [
    {
      name: "Prof. S. Ramakrishnan",
      position: "Strategic Advisor",
      expertise: "Policy Making & Governance"
    },
    {
      name: "Dr. Lakshmi Narayan",
      position: "Technical Advisor",
      expertise: "Rural Development & Technology"
    }
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="Board & Management"
        subtitle="Leadership that Inspires Change."
        description="Our leadership team brings vision, integrity, and expertise to guide the foundation toward impactful and responsible growth."
      />
      
      {/* Founder Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="slide-in-right">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl flex items-center justify-center">
                  <FiUser className="text-white text-8xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-xl">
                  <FiAward className="text-3xl" />
                </div>
              </div>
            </div>
            <div data-aos="slide-in-left">
              <h3 className="text-3xl font-bold text-dark mb-2">{boardMembers[0].name}</h3>
              <p className="text-secondary font-semibold mb-4">{boardMembers[0].position}</p>
              <div className="bg-primary p-6 rounded-xl mb-6">
                <p className="text-gray-700 italic leading-relaxed">"{boardMembers[0].message}"</p>
              </div>
              <p className="text-gray-700 mb-4">{boardMembers[0].bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {boardMembers[0].achievements.map((achievement, idx) => (
                  <span key={idx} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary hover:text-accent transition-colors">
                  <FiMail className="text-2xl" />
                </a>
                <a href="#" className="text-secondary hover:text-accent transition-colors">
                  <FiLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h3 className="text-3xl font-bold text-dark text-center mb-12" data-aos="fade-up">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.slice(1).map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary flex items-center justify-center p-8">
                    <FiUser className="text-secondary text-6xl" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h4 className="text-xl font-bold text-dark mb-1">{member.name}</h4>
                    <p className="text-secondary font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, idx) => (
                        <span key={idx} className="text-xs bg-primary text-dark px-2 py-1 rounded">{achievement}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h3 className="text-3xl font-bold text-dark text-center mb-12" data-aos="fade-up">Our Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="text-center bg-primary rounded-xl p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <FiUser className="text-white text-5xl" />
                </div>
                <h4 className="text-xl font-bold text-dark mb-1">{advisor.name}</h4>
                <p className="text-secondary font-semibold mb-2">{advisor.position}</p>
                <p className="text-gray-600">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreTeam />
    </div>
  );
};

export default BoardManagement;