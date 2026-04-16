import React, { useEffect, useRef } from 'react';
import { GiFarmer, GiBookCover, GiHealthNormal, GiEarthAmerica, GiFirstAidKit } from 'react-icons/gi';
import { FaFemale } from 'react-icons/fa';

const WhatWeDo = () => {
  const cardsRef = useRef([]);

const initiatives = [
  {
    icon: <GiFarmer className="text-xl" />,
    title: 'Rural Development',
    description: 'Our rural development initiatives are designed to transform underdeveloped regions into self-sustaining and economically empowered communities. We work closely with farmers and local stakeholders to introduce modern agricultural techniques, improve irrigation facilities, and enhance soil productivity. In addition, we focus on building essential infrastructure such as roads, water systems, and storage facilities. By creating diversified livelihood opportunities and providing continuous training and financial support, we ensure long-term resilience, reduce migration to urban areas, and promote inclusive growth across rural regions.',
    number: '01',
    features: ['Sustainable Farming', 'Infrastructure Dev', 'Livelihood Support'],
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format'
  },
  {
    icon: <GiBookCover className="text-xl" />,
    title: 'Education & Skill Development',
    description: 'We believe that education is the foundation of sustainable development, and our programs are focused on delivering quality learning opportunities to children and youth. Our initiatives include setting up digital classrooms, providing access to modern educational tools, and offering scholarships to underprivileged students. Additionally, we conduct vocational training and skill development programs aligned with current industry demands, enabling individuals to secure meaningful employment. Through career guidance, mentorship, and hands-on training, we empower individuals to build successful careers and contribute positively to society.',
    number: '02',
    features: ['Digital Classrooms', 'Vocational Training', 'Scholarship Programs'],
    status: 'Active',
    image: './images/education1.avif'
  },
  {
    icon: <GiHealthNormal className="text-xl" />,
    title: 'Healthcare & Wellness',
    description: 'Our healthcare and wellness programs are aimed at ensuring accessible, affordable, and quality medical services for underserved populations. We organize regular health camps, provide telemedicine facilities, and collaborate with healthcare professionals to deliver preventive and curative care. Our initiatives also focus on spreading awareness about hygiene, nutrition, and disease prevention, helping communities adopt healthier lifestyles. By addressing both immediate medical needs and long-term health education, we aim to reduce healthcare disparities and improve the overall quality of life.',
    number: '03',
    features: ['Health Camps', 'Telemedicine', 'Awareness Programs'],
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format'
  },
  {
    icon: <FaFemale className="text-xl" />,
    title: 'Women Empowerment',
    description: 'Our women empowerment initiatives focus on enabling women to achieve financial independence, social equality, and leadership roles within their communities. We establish self-help groups, provide entrepreneurship training, and offer skill development programs that help women generate sustainable income. Financial literacy workshops and access to micro-financing opportunities further strengthen their ability to manage resources effectively. By fostering confidence, leadership skills, and community participation, we empower women to become change-makers and drive inclusive growth.',
    number: '04',
    features: ['Self-Help Groups', 'Skill Training', 'Financial Literacy'],
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&auto=format'
  },
  {
    icon: <GiEarthAmerica className="text-xl" />,
    title: 'Environmental Sustainability',
    description: 'Our environmental sustainability initiatives are dedicated to preserving natural resources and promoting eco-friendly practices for a greener future. We conduct large-scale tree plantation drives, implement waste management systems, and encourage the adoption of renewable energy solutions such as solar power. Additionally, we run awareness campaigns to educate communities about environmental conservation and responsible resource usage. Through these efforts, we aim to combat climate change, reduce carbon footprints, and ensure a sustainable ecosystem for future generations.',
    number: '05',
    features: ['Tree Plantation', 'Waste Management', 'Renewable Energy'],
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format'
  },
  {
    icon: <GiFirstAidKit className="text-xl" />,
    title: 'Disaster Relief & Social Welfare',
    description: 'We provide immediate and effective response during natural disasters and emergencies, ensuring that affected communities receive timely support and assistance. Our relief efforts include distributing essential supplies such as food, water, medical aid, and temporary shelter. Beyond emergency response, we focus on long-term rehabilitation programs that help individuals rebuild their lives with dignity and stability. By collaborating with local authorities and volunteers, we ensure a coordinated approach to disaster management and social welfare, strengthening community resilience.',
    number: '06',
    features: ['Emergency Response', 'Relief Camps', 'Rehabilitation'],
    status: 'Active',
    image: './images/diaster.avif'
  },
];

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;

        const distanceFromCenter = Math.abs(
          viewportHeight / 2 - center
        );

        const maxDistance = viewportHeight / 2;

        const progress = 1 - Math.min(distanceFromCenter / maxDistance, 1);

        const scale = 0.92 + progress * 0.08;
        const brightness = 0.92 + progress * 0.08;

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getStatusColor = (status) => {
    return "bg-secondary";
  };

  return (
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs tracking-[8px] text-secondary font-semibold mb-3 inline-block">
            WHAT WE DO
          </span>
          
          <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm">
            Our comprehensive approach to social development covers multiple sectors — 
            creating lasting impact in communities across the nation
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-12 lg:gap-16">
          
          <div className="space-y-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="sticky top-24" 
                style={{ zIndex: index + 1 }}
              >
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-row"
                  style={{
                    transform: "scale(0.92)",
                    filter: "brightness(0.92)",
                    transition: "transform 0.25s ease, filter 0.25s ease"
                  }}
                >
                  {/* Image Section - Left Half */}
                  <div className="w-1/2 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ height: '100%', minHeight: '420px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    
                  
                  </div>
                  
                  {/* Content Section - Right Half */}
                  <div className="w-1/2 p-5 flex flex-col" style={{ minHeight: '420px' }}>
                    {/* Title with Icon beside it and Number on right edge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                          <div className="text-lg">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-dark leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-4xl font-bold text-dark leading-snug text-secondary/30">
                        {item.number}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                      {item.description}
                    </p>
                    
                    {/* Features as chips */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.features.map((feature, i) => (
                        <span key={i} className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-medium rounded-full">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Stats section */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Active Projects</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-2">
                          <div className="w-5 h-5 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">NK</div>
                          <div className="w-5 h-5 rounded-full bg-secondary/80 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">RJ</div>
                          <div className="w-5 h-5 rounded-full bg-secondary/60 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">SP</div>
                        </div>
                        <span className="text-xs text-gray-400 ml-1">+ team</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;