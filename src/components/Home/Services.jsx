import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { X, ChevronLeft, ChevronRight, ArrowRight, Check } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (service, index) => {
    setIsAnimating(true);
    setSelectedService({ ...service, index });
    document.body.style.overflow = "hidden";
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeModal = () => {
    setIsAnimating(true);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setSelectedService(null);
      setIsAnimating(false);
    }, 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && selectedService) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedService]);

  return (
    <section className="min-h-screen bg-[#F5F0E8] py-20 flex flex-col justify-center relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5C6F5C] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B7355] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="text-xs tracking-[5px] text-secondary font-semibold mb-3 inline-block">
            OUR SERVICES
          </span>
       
        <div className="w-20 h-[2px] bg-[#5C6F5C] mx-auto" />
        <p className="text-[#5C6F5C]/70 mt-4 max-w-md mx-auto text-sm">
          Transforming lives through dedicated service and compassion
        </p>
      </div>

      {/* Slider */}
      <div className="relative z-10 px-4">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slideToClickedSlide={true}
          speed={800}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="w-full max-w-7xl"
        >
          {services.map((service, idx) => (
            <SwiperSlide
              key={service.id}
              className="!w-[280px] md:!w-[360px] cursor-pointer"
              onClick={() => openModal(service, idx)}
            >
              <div className="card group">
                {/* Image Container - No Icons */}
                <div
                  className="h-[460px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.frontImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl font-semibold tracking-wide">{service.title}</h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed line-clamp-2">
                    {service.subpoints.slice(0, 2).join(" • ")}
                  </p>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(service, idx);
                    }}
                    className="mt-4 text-xs tracking-widest border border-[#5C6F5C] px-5 py-2.5 hover:bg-[#5C6F5C] hover:shadow-lg transition-all duration-300 flex items-center gap-2 group/btn bg-[#2C1810]/50 backdrop-blur-sm"
                  >
                    LEARN MORE <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C1810]/80 backdrop-blur-md border border-[#5C6F5C]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#5C6F5C] hover:scale-110">
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        <button className="custom-next absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2C1810]/80 backdrop-blur-md border border-[#5C6F5C]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#5C6F5C] hover:scale-110">
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>

      {/* Premium Modal Overlay */}
      {selectedService && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: "rgba(44, 24, 16, 0.95)" }}
          onClick={closeModal}
        >
          <div 
            className={`relative max-w-4xl w-full bg-[#F5F0E8] rounded-2xl overflow-hidden transform transition-all duration-500 ${
              isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#2C1810]/80 backdrop-blur-md border border-[#5C6F5C]/30 flex items-center justify-center hover:bg-[#5C6F5C] transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5 relative h-56 md:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedService.frontImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#2C1810] via-[#2C1810]/40 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="mb-5">
                  <span className="text-[#5C6F5C] text-xs tracking-[3px] uppercase font-semibold">Service Detail</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2C1810] mt-2">
                    {selectedService.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-[#5C6F5C] mt-3" />
                </div>

                {/* Subpoints List */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#2C1810] mb-3 tracking-wide">KEY INITIATIVES</h3>
                  <div className="space-y-2.5">
                    {selectedService.subpoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#5C6F5C] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#2C1810]/80 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Note */}
                <div className="bg-[#EAF3E6]  p-4 mb-6 border-l-4 border-[#5C6F5C]">
                  <p className="text-xs text-[#2C1810]/70 leading-relaxed">
                    Your contribution helps us expand these initiatives and reach more people in need. 
                    Join us in making a meaningful difference in the lives of thousands.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      closeModal();
                      navigate("/donate");
                    }}
                    className="flex-1 bg-[#5C6F5C] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#4a5a4a] transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Support This Cause
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-lg border border-[#5C6F5C]/30 text-[#2C1810] hover:bg-[#2C1810]/5 transition-all text-sm font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Global Styles */}
      <style jsx global>{`
        .card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #2C1810;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(0.85);
          opacity: 0.6;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(44, 24, 16, 0.2);
        }

        /* Center slide animation */
        .swiper-slide-active .card {
          transform: scale(1.05);
          opacity: 1;
          box-shadow: 0 25px 50px rgba(92, 111, 92, 0.25);
        }

        /* Adjacent slides */
        .swiper-slide-prev .card,
        .swiper-slide-next .card {
          transform: scale(0.92);
          opacity: 0.75;
        }

        /* Hover effect on center slide */
        .swiper-slide-active .card:hover {
          transform: scale(1.08);
          box-shadow: 0 30px 60px rgba(92, 111, 92, 0.35);
        }

        /* Navigation button states */
        .custom-prev,
        .custom-next {
          transition: all 0.3s ease;
        }

        .custom-prev.swiper-button-disabled,
        .custom-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .swiper-slide-active .card {
            transform: scale(1);
          }
          
          .custom-prev,
          .custom-next {
            display: flex !important;
          }
        }

        /* Smooth transitions for all interactive elements */
        button, .card {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Services;