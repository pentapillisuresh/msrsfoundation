import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const BizlyTestimonial = () => {
  const testimonials = [
    // 1. Beneficiary Testimonials (Education & Empowerment)
    {
      id: 1,
      name: "Student Beneficiary",
      role: "Education Support Recipient",
      rating: 5,
      category: "Education & Empowerment",
      text: "MSRS Foundation has completely transformed my life. Coming from a financially weak background, I never thought I could continue my education. Today, I am confidently pursuing my studies with their support. They didn't just help me financially—they gave me hope and direction."
    },
    {
      id: 2,
      name: "Skill Development Trainee",
      role: "Vocational Training Graduate",
      rating: 5,
      category: "Education & Empowerment",
      text: "Before joining the MSRS training program, I had no skills or confidence. Today, I am earning independently and supporting my family. I will always be grateful to the foundation for empowering me."
    },
    // 2. Community & Social Impact Testimonials
    {
      id: 3,
      name: "Village Resident",
      role: "Rural Development Beneficiary",
      rating: 5,
      category: "Community Impact",
      text: "Our village has seen a big change because of MSRS Foundation. From education awareness to health camps, they are always there for us. They treat us like family, not beneficiaries."
    },
    {
      id: 4,
      name: "Women Entrepreneur",
      role: "Self-Help Group Member",
      rating: 5,
      category: "Women Empowerment",
      text: "MSRS Foundation gave me the courage to stand on my own feet. Through their support, I started my small business and now I am financially independent."
    },
    // 3. Goshala Seva Testimonials
    {
      id: 5,
      name: "Devotee & Supporter",
      role: "Goshala Seva Contributor",
      rating: 5,
      category: "Goshala Seva",
      text: "MSRS Foundation's commitment towards Goshala seva is truly divine. The way they care for cows with dedication and devotion reflects their spiritual values. Supporting them feels like contributing to a sacred cause."
    },
    // 4. Infrastructure & Development Testimonials
    {
      id: 6,
      name: "Project Partner",
      role: "Infrastructure Development",
      rating: 5,
      category: "Infrastructure",
      text: "We partnered with MSRS Foundation for infrastructure development, and the execution was highly professional. Their transparency, planning, and commitment to quality are commendable."
    },
    // 5. CSR Partner Testimonials
    {
      id: 7,
      name: "CSR Partner",
      role: "Corporate Collaboration",
      rating: 5,
      category: "CSR Partnership",
      text: "Working with MSRS Foundation has been a seamless and impactful experience. Their structured approach, compliance, and reporting make them a reliable CSR partner."
    },
    {
      id: 8,
      name: "CSR Head",
      role: "Impact & Transparency Partner",
      rating: 5,
      category: "CSR Partnership",
      text: "We appreciate the transparency and accountability maintained by MSRS Foundation. Every contribution is utilized effectively, creating measurable social impact."
    },
    // 6. Donor Testimonials
    {
      id: 9,
      name: "Individual Donor",
      role: "One-time Contributor",
      rating: 5,
      category: "Donor",
      text: "Donating to MSRS Foundation gives me a sense of fulfillment. I trust that my contributions are reaching the right people and making a real difference."
    },
    {
      id: 10,
      name: "Monthly Donor",
      role: "Recurring Contributor",
      rating: 5,
      category: "Donor",
      text: "Being a monthly donor to MSRS Foundation has been a rewarding journey. Their consistent updates and impact stories keep me connected to the cause."
    },
    // 7. Volunteer & Internship Testimonials
    {
      id: 11,
      name: "Volunteer",
      role: "Social Service Volunteer",
      rating: 5,
      category: "Volunteer",
      text: "Volunteering with MSRS Foundation was a life-changing experience. It gave me a chance to contribute to society and understand real-world challenges."
    },
    {
      id: 12,
      name: "Intern",
      role: "Former Intern",
      rating: 5,
      category: "Internship",
      text: "My internship at MSRS Foundation helped me grow both personally and professionally. The team is supportive, and the work is truly meaningful."
    },
    // 8. Spiritual & Cultural Testimonials
    {
      id: 13,
      name: "Spiritual Seeker",
      role: "Cultural Initiative Supporter",
      rating: 5,
      category: "Spiritual",
      text: "MSRS Foundation beautifully combines spirituality with social service. Their initiatives inspired by Lord Shiva and Mata Durga create a unique path of serving humanity with devotion."
    },
    // 9. General Impact Testimonials
    {
      id: 14,
      name: "Community Leader",
      role: "Social Change Advocate",
      rating: 5,
      category: "General Impact",
      text: "MSRS Foundation is not just an organization—it is a mission to uplift lives. Their dedication, integrity, and vision make them a trustworthy institution for social change."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8f6f2] via-white to-[#f0ede8] font-sans overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#5C6F5C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d1a284]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header - Premium Centered */}
        <div className="mb-16 text-center">
          <span className="text-xs tracking-[5px] text-[#d1a284] font-semibold mb-3 inline-block">
            TESTIMONIALS
          </span>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#d1a284] to-[#5C6F5C] mx-auto rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e2c] mt-6 mb-4 font-playfair">
            What People Say About Us
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Real stories from beneficiaries, partners, donors, and volunteers who have experienced our impact
          </p>
        </div>

        {/* Premium Testimonial Card */}
        <div className="relative">
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-8 -left-8 text-[#5C6F5C]/10 text-8xl">
            <FaQuoteLeft />
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-3xl border border-[#EAF3E6]">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#EAF3E6] to-[#d1a284]/20 text-[#5C6F5C] text-xs font-semibold rounded-full tracking-wide">
                {current.category}
              </span>
            </div>
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#d1a284] text-lg" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8 font-playfair">
              "{current.text}"
            </p>
            
            {/* Divider */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#d1a284] to-transparent mb-6"></div>
            
            {/* User Info */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-[#2c3e2c] text-lg">{current.name}</h4>
                <p className="text-gray-400 text-sm">{current.role}</p>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#5C6F5C] hover:bg-[#5C6F5C] hover:text-white hover:border-[#5C6F5C] transition-all duration-300"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-[#5C6F5C] flex items-center justify-center text-white hover:bg-[#4a5a4a] transition-all duration-300"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
};

export default BizlyTestimonial;