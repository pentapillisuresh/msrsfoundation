import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const BizlyTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Student Transformation",
      role: "Education Beneficiary",
      category: "Education & Empowerment",
      rating: 5,
      text: "MSRS Foundation has completely transformed my life. Coming from a financially weak background, I never thought I could continue my education. Today, I am confidently pursuing my studies with their support. They didn’t just help me financially—they gave me hope and direction."
    },
    {
      id: 2,
      name: "Skill Development Trainee",
      role: "Vocational Graduate",
      category: "Education & Empowerment",
      rating: 5,
      text: "Before joining the MSRS training program, I had no skills or confidence. Today, I am earning independently and supporting my family."
    },
    {
      id: 3,
      name: "Village Resident",
      role: "Rural Development",
      category: "Community Impact",
      rating: 5,
      text: "Our village has seen a big change because of MSRS Foundation. From education awareness to health camps, they are always there for us."
    },
    {
      id: 4,
      name: "Women Entrepreneur",
      role: "Self-Help Group",
      category: "Women Empowerment",
      rating: 5,
      text: "MSRS Foundation gave me the courage to stand on my own feet. Through their support, I started my small business."
    },
    {
      id: 5,
      name: "Devotee",
      role: "Goshala Supporter",
      category: "Goshala Seva",
      rating: 5,
      text: "MSRS Foundation’s commitment towards Goshala seva is truly divine. Their care reflects strong spiritual values."
    },
    {
      id: 6,
      name: "Project Partner",
      role: "Infrastructure",
      category: "Infrastructure Development",
      rating: 5,
      text: "Execution was highly professional. Their transparency and commitment to quality are commendable."
    },
    {
      id: 7,
      name: "CSR Partner",
      role: "Corporate Collaboration",
      category: "CSR Partnership",
      rating: 5,
      text: "Structured approach and reporting make them a reliable CSR partner."
    },
    {
      id: 8,
      name: "Donor",
      role: "Contributor",
      category: "Donor",
      rating: 5,
      text: "Donating gives me fulfillment. I trust their impact and transparency."
    },
    {
      id: 9,
      name: "Volunteer",
      role: "Social Service",
      category: "Volunteer",
      rating: 5,
      text: "A life-changing experience that helped me understand real-world challenges."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-16 bg-[#f3f8f3] overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-0 h-full w-1/2 hidden md:block overflow-hidden">
        <img
          src="./images/help.jpeg"
          alt="Helping hands"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[#4A7C59]/20"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-r from-transparent to-[#f3f8f3]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div></div>

        <div>
          {/* HEADER */}
          <div className="mb-8">
            <span className="text-xs tracking-[5px] text-[#4A7C59] font-semibold uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-[#1f3d2b] mt-3 font-playfair">
              What People Say About Us
            </h2>
          </div>

          {/* CARD */}
          <div
            className={`relative bg-white rounded-2xl shadow-lg p-6 border border-[#e3efe6] transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: "280px" }} // FIXED HEIGHT
          >
            <div className="absolute -top-5 -left-5 text-[#4A7C59]/10 text-5xl">
              <FaQuoteLeft />
            </div>

            <span className="inline-block mb-3 px-3 py-1 bg-[#e8f3ea] text-[#2e5d3b] text-xs rounded-full">
              {current.category}
            </span>

            <div className="flex gap-1 mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#4A7C59]" />
              ))}
            </div>

            <p className="text-gray-600 italic text-sm leading-relaxed mb-4">
              "{current.text}"
            </p>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-[#1f3d2b] text-sm">
                  {current.name}
                </h4>
                <p className="text-gray-400 text-xs">{current.role}</p>
              </div>

              <div className="flex gap-2">
                <button onClick={handlePrev} className="w-8 h-8 border rounded-full flex items-center justify-center">
                  <FaChevronLeft size={12} />
                </button>
                <button onClick={handleNext} className="w-8 h-8 bg-[#2e5d3b] text-white rounded-full flex items-center justify-center">
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default BizlyTestimonial;