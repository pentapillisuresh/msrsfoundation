import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: "Education Support",
    frontImage: "./images/service15.png",
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
    frontImage: "./images/service2.avif",
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
    frontImage: "./images/service3.avif",
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
    frontImage: "./images/service4.jpg",
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
    frontImage: "./images/rural.jpg",
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
    frontImage: "./images/service6.avif",
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
    frontImage: "./images/environment.avif",
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
    frontImage: "./images/service7.jpg",
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
    frontImage: "./images/donation.avif",
    subpoints: [
      "Support Any Ongoing Initiative",
      "Flexible Fund Allocation",
      "Operational & Administrative Support",
    ],
  },
  {
    id: 10,
    title: "CSR & Corporate Contributions",
    frontImage: "./images/meeting.jpg",
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
    frontImage: "./images/service16.png",
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
    frontImage: "./images/service11.avif",
    subpoints: [
      "Cow Feeding Seva",
      "Goshala Maintenance",
      "Medical Care for Cows",
      "Rescue & Protection",
      "Adopt a Cow Program",
    ],
  },
];

const ServiceCard = ({ service, onSupport, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getAnimationDelay = () => {
    const delays = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
    return delays[index % delays.length];
  };

  const getAnimationDirection = () => {
    const directions = ['fade-up', 'fade-right', 'fade-left', 'zoom-in'];
    return directions[index % directions.length];
  };

  return (
    <div 
      data-aos={getAnimationDirection()}
      data-aos-delay={getAnimationDelay()}
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
      className="relative group/card"
    >
      <div 
        className="book-wrapper" 
        style={{ perspective: '2000px' }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div 
          className="book relative w-full h-[380px]"
          style={{ 
            transformStyle: 'preserve-3d',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Cover (Front) */}
          <div 
            className="cover absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-[1100ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] cursor-pointer"
            style={{
              transformOrigin: 'left center',
              transform: isOpen ? 'rotateY(-150deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              zIndex: 10,
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${service.frontImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="text-[#5C6F5C] text-[10px] font-bold bg-[#EAF3E6] px-3 py-1 rounded-full tracking-[2px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-center transform transition-all duration-700 group-hover/card:translate-y-[-10px]">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-white/60 mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Back Pages (Content) */}
          <div 
            className="pages absolute inset-0 rounded-2xl shadow-inner overflow-hidden border border-gray-100"
            style={{
              backgroundColor: '#F9FBF9',
              zIndex: 5,
            }}
          >
            <div className={`w-full h-full p-6 flex flex-col transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center mb-5">
                <h4 className="text-md font-bold text-gray-800 uppercase tracking-wider">{service.title}</h4>
                <div className="w-8 h-0.5 bg-[#5C6F5C] mx-auto mt-2 opacity-40" />
              </div>

              <ul className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {service.subpoints.map((point, idx) => (
                  <li key={idx} className="text-[13px] text-gray-600 flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-[#5C6F5C]/10 flex items-center justify-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#5C6F5C]" />
                      </div>
                    </div>
                    <span className="leading-tight">{point}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSupport(service)}
                className="mt-4 w-full py-3 rounded-xl bg-[#5C6F5C] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#5C6F5C] transition-all duration-500 shadow-lg"
              >
                Support Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 120,
    });
  }, []);

  const handleSupport = (service) => {
    navigate('/donate', { 
      state: { service: service.title, cause: service.title } 
    });
  };

  // Sort alphabetically by title
  const sortedServices = [...services].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div 
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          className="mb-20 text-center"
        >
          <span className="text-[10px] tracking-[0.5em] text-[#5C6F5C] font-bold mb-4 inline-block uppercase opacity-70">
            Our Services
          </span>
          <div className="w-12 h-[1px] bg-gray-300 mx-auto" />
          <p className="text-gray-500 max-w-xl mx-auto mt-8 text-sm leading-relaxed">
            Every contribution creates a ripple of change. Explore our dedicated programs 
            aimed at community upliftment and sustainable welfare.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {sortedServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} onSupport={handleSupport} index={idx} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .book-wrapper { perspective: 2000px; }
        .book { transform-style: preserve-3d; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #5C6F5C;
          border-radius: 10px;
        }

        /* Premium AOS Animations */
        [data-aos="fade-up"] {
          transform: translateY(50px);
          opacity: 0;
          transition-property: transform, opacity;
        }
        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
          opacity: 1;
        }

        [data-aos="fade-down"] {
          transform: translateY(-50px);
          opacity: 0;
          transition-property: transform, opacity;
        }
        [data-aos="fade-down"].aos-animate {
          transform: translateY(0);
          opacity: 1;
        }

        [data-aos="fade-right"] {
          transform: translateX(-50px);
          opacity: 0;
          transition-property: transform, opacity;
        }
        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
          opacity: 1;
        }

        [data-aos="fade-left"] {
          transform: translateX(50px);
          opacity: 0;
          transition-property: transform, opacity;
        }
        [data-aos="fade-left"].aos-animate {
          transform: translateX(0);
          opacity: 1;
        }

        [data-aos="zoom-in"] {
          transform: scale(0.95);
          opacity: 0;
          transition-property: transform, opacity;
        }
        [data-aos="zoom-in"].aos-animate {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Services;