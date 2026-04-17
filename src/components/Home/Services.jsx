import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Education Support",
    frontImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    subpoints: [
      "Sponsor a Child's Education",
      "School Infrastructure Development",
      "Books, Uniforms & Learning Materials",
      "Digital Learning & Smart Classrooms",
    ],
  },
  {
    id: 2,
    title: "Annadanam (Food Donation)",
    frontImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
    subpoints: [
      "Daily Meals for Needy",
      "Festival Annadanam Sponsorship",
      "Midday Meal Programs",
      "Emergency Food Relief",
    ],
  },
  {
    id: 3,
    title: "Healthcare & Medical Aid",
    frontImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    subpoints: [
      "Free Medical Camps",
      "Medicines for the Poor",
      "Support for Surgeries",
      "Health Awareness Programs",
    ],
  },
  {
    id: 4,
    title: "Spiritual & Cultural Activities",
    frontImage: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400&h=300&fit=crop",
    subpoints: [
      "Temple Development & Maintenance",
      "Vedic & Spiritual Programs",
      "Yagnas, Pujas & Ritual Sponsorship",
      "Preservation of Indian Culture",
    ],
  },
  {
    id: 5,
    title: "Rural & Community Development",
    frontImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
    subpoints: [
      "Village Development Projects",
      "Clean Water Initiatives",
      "Sanitation & Hygiene Programs",
      "Skill Development for Youth",
    ],
  },
  {
    id: 6,
    title: "Women & Child Welfare",
    frontImage: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop",
    subpoints: [
      "Women Empowerment Programs",
      "Child Protection & Care",
      "Nutrition Programs",
      "Support for Orphaned Children",
    ],
  },
  {
    id: 7,
    title: "Environmental Protection",
    frontImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    subpoints: [
      "Tree Plantation Drives",
      "Water Conservation Projects",
      "Clean India Initiatives",
      "Sustainable Development Programs",
    ],
  },
  {
    id: 8,
    title: "Disaster Relief & Emergency Support",
    frontImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=300&fit=crop",
    subpoints: [
      "Flood / Cyclone Relief",
      "Emergency Response Fund",
      "Rehabilitation Support",
      "Crisis Food & Shelter",
    ],
  },
  {
    id: 9,
    title: "General Fund",
    frontImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
    subpoints: [
      "Support Any Ongoing Initiative",
      "Flexible Fund Allocation",
      "Operational & Administrative Support",
    ],
  },
  {
    id: 10,
    title: "CSR & Corporate Contributions",
    frontImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
    subpoints: [
      "Corporate Social Responsibility Projects",
      "Adopt a Village / School",
      "Employee Engagement Programs",
      "Long-term Partnership Projects",
    ],
  },
  {
    id: 11,
    title: "Infrastructure Development",
    frontImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    subpoints: [
      "School & Classroom Construction",
      "Hospital & Medical Facility Setup",
      "Ashramam & Spiritual Center Development",
      "Drinking Water Infrastructure",
      "Community Halls & Public Utility Spaces",
    ],
  },
  {
    id: 12,
    title: "Goshala Seva",
    frontImage: "https://images.unsplash.com/photo-1546443042-6cccd3a2e0b3?w=400&h=300&fit=crop",
    subpoints: [
      "Cow Feeding Seva",
      "Goshala Maintenance",
      "Medical Care for Cows",
      "Rescue & Protection",
      "Adopt a Cow Program",
    ],
  },
];

const ServiceCard = ({ service, onSupport }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="book-wrapper" style={{ perspective: '2000px' }}>
        <div 
          className="book relative w-full h-[400px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cover (Front) - Opens like a book cover */}
          <div 
            className={`cover absolute inset-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   cursor-pointer`}
            style={{
              transformOrigin: 'left center',
              transform: isOpen ? 'rotateY(-140deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              zIndex: 10,
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${service.frontImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="text-white/70 text-xs font-bold bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                    #{String(service.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#EAF3E6] mx-auto mb-3" />
                
                </div>
              </div>
            </div>
          </div>

          {/* Back Pages (Content) - Visible when cover opens */}
          <div 
            className="pages absolute inset-0 rounded-2xl shadow-xl overflow-hidden"
            style={{
              backgroundColor: '#EAF3E6',
              zIndex: 5,
            }}
          >
            <div className={`w-full h-full p-5 overflow-y-auto transition-all duration-[1000ms] ease-in-out delay-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center mb-4">
                <h4 className="text-lg font-bold text-gray-800">{service.title}</h4>
                <div className="w-12 h-0.5 bg-[#5C6F5C] mx-auto mt-2 rounded-full" />
              </div>

              <ul className="space-y-3">
                {service.subpoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 hover:text-[#5C6F5C] transition-colors duration-200 flex items-start gap-2 group"
                  >
                    {/* Tick mark outside circle shape */}
                    <div className="relative flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full border-2 border-[#5C6F5C] bg-white flex items-center justify-center group-hover:bg-[#5C6F5C] transition-colors duration-200">
                        <svg
                          className="w-3 h-3 text-[#5C6F5C] group-hover:text-white transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="leading-relaxed flex-1">{point}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSupport(service)}
                className="mt-5 w-full py-2.5 rounded-full bg-[#5C6F5C] text-white text-sm font-semibold hover:bg-[#4a5a4a] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Support This Cause →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .book-wrapper {
          perspective: 2000px;
        }
        .book {
          transform-style: preserve-3d;
        }
        .cover {
          transform-origin: left center;
          backface-visibility: hidden;
          z-index: 10;
        }
        .pages {
          backface-visibility: visible;
          z-index: 5;
        }
        
        /* Smooth scrollbar for pages */
        .pages .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .pages .overflow-y-auto::-webkit-scrollbar-track {
          background: #d4e0d4;
          border-radius: 10px;
        }
        
        .pages .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #5C6F5C;
          border-radius: 10px;
        }
        
        /* Text height reduction on hover */
        .pages .space-y-3 {
          transition: all 0.3s ease;
        }
        
        .cover:hover ~ .pages .space-y-3 {
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();

  const handleSupport = (service) => {
    // Navigate to donate page with service information
    navigate('/donate', { 
      state: { 
        service: service.title,
        cause: service.title 
      } 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#EAF3E6] via-white to-[#EAF3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[#5C6F5C]/10 text-[#5C6F5C] text-sm font-semibold mb-4">
            What We Do
          </div>
           <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
         Our Services
        </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5C6F5C] to-[#8BA88B] mx-auto rounded-full mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Comprehensive support programs designed to create lasting impact across communities
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onSupport={handleSupport} />
          ))}
        </div>
      </div>

      {/* Global styles for tick mark animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Hover text height reduction effect */
        .group:hover .space-y-3 {
          line-height: 1.2;
        }
        
        /* Smooth transition for all elements */
        * {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </section>
  );
};

export default Services;