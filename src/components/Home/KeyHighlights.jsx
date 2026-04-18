import React, { useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KeyHighlights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const highlights = [
    { title: 'CSR-1 Registered Organization', description: 'Officially registered for CSR funding' },
    { title: 'Section 8 Company', description: 'MCA Approved Trust' },
    { title: 'Multi-Sector Development', description: 'Comprehensive social initiatives' },
    { title: 'Nationwide Impact', description: 'Serving Communities Across India' },
  ];

  return (
    <section 
      className="py-24 font-sans overflow-hidden relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      {/* Dull overlay for premium look */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
        
        {/* Section Header - Centered properly */}
        <div 
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="text-xs tracking-[8px] text-[#EAF3E6] font-semibold mb-3 inline-block">
            KEY HIGHLIGHTS
          </span>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 bg-[#EAF3E6]"></div>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Recognized excellence and proven track record in comprehensive social development
          </p>
        </div>

        {/* Horizontal Cards Layout with equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/20 border border-white/20 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              {/* Premium glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(90, 111, 90, 0.3), transparent 70%)'
                }}
              ></div>
              
              {/* Icon Circle - Fixed height */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-full bg-[#5C6F5C]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#5C6F5C]/40 transition-all duration-300">
                  <FiCheckCircle className="text-2xl text-[#EAF3E6]" />
                </div>
              </div>
              
              {/* Title - Fixed min-height for equal alignment */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight min-h-[56px]">
                {item.title}
              </h3>
              
              {/* Description - Flexible to push line to bottom */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
              
              {/* Decorative line - Always at bottom */}
              <div className="mt-4 w-12 h-0.5 bg-[#5C6F5C] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;