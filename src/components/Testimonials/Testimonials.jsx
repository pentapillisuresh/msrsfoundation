import React, { useState, useEffect } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Reddy",
    role: "Managing Director, Vizag Tech Solutions Pvt Ltd.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    text: "The team delivered exceptional results for our digital transformation project. Being based in Vizag, we needed a partner who understands the local market dynamics, and they exceeded our expectations completely."
  },
  {
    id: 2,
    name: "Priyanka Sharma",
    role: "CEO, Eastern Coast Innovations",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    text: "Working with them has been a game-changer for our business. The attention to detail and strategic approach helped us achieve remarkable growth in the Vizag market and beyond."
  },
  {
    id: 3,
    name: "Vikram Aditya",
    role: "Founder, Bay of Bengal Ventures",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "Outstanding service and innovative solutions. As a startup based in Vizag, we needed a partner who could scale with us. They delivered beyond our wildest expectations."
  },
  {
    id: 4,
    name: "Ananya Desai",
    role: "Creative Director, Vizag Design Studio",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "The redesign of our brand identity has received overwhelming positive feedback. Their understanding of our local Vizag audience and global design standards is truly impressive."
  },
  {
    id: 5,
    name: "Suresh Kumar",
    role: "Operations Head, Andhra Port Logistics",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
    text: "Professional, punctual, and passionate about their work. They transformed our digital presence and helped us connect better with our customers across Vizag and Andhra Pradesh."
  }
];

const BizlyTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Right side image from public folder
  // Place your image in the public folder as "vizag-image.jpg"
  const staticImage = "./images/test.avif";

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          .content-transition { transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
          .animate-in {
            animation: fadeInUp 0.7s ease-out forwards;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT CAROUSEL (Text with Auto Slide) */}
        <div className="relative">
          <div className="content-transition" key={current.id}>
            <span className="text-[12px] tracking-[0.2em] uppercase text-[#B59677] font-bold">
              TESTIMONIAL
            </span>

            <h2 className="text-5xl md:text-6xl mt-4 mb-12 text-[#1a1a1a] font-playfair leading-tight animate-in">
              What Our Customers Say?
            </h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-3">
                     <p className="font-medium text-[#1a1a1a] text-lg font-inter">{current.name}</p>
                     <span className="text-gray-400">—</span>
                     <div className="flex text-[10px] gap-0.5">
                       {[...Array(current.rating)].map((_, i) => <FaStar key={i} className="text-black" />)}
                     </div>
                  </div>
                  <p className="text-sm text-gray-500 font-inter mt-0.5">{current.role}</p>
                </div>
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-[#B59677] hover:bg-[#B59677] hover:text-white transition-all active:scale-90"
              >
                 <FaChevronRight size={12} />
              </button>
            </div>

            <div className="w-full h-[1px] bg-gray-200 mt-8 mb-10"></div>

            <p className="text-[20px] text-gray-500 leading-[1.8] font-playfair italic max-w-xl animate-in">
              "{current.text}"
            </p>
          </div>
        </div>

        {/* RIGHT SINGLE STATIC IMAGE from public folder */}
        <div className="relative rounded-sm overflow-hidden h-[550px] shadow-xl">
          <img
            src={staticImage}
            alt="Vizag location"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

      </div>
    </section>
  );
};

export default BizlyTestimonial;