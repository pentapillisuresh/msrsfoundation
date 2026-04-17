import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const KeyHighlights = () => {
  const highlights = [
    { title: 'CSR-1 Registered Organization', description: 'Officially registered for CSR funding' },
    { title: 'Section 8 Company', description: 'MCA Approved Trust' },
    { title: 'Multi-Sector Development', description: 'Comprehensive social initiatives' },
    { title: 'Nationwide Impact', description: 'Serving Communities Across India' },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          
          {/* ========================================================== */}
          {/* LEFT SIDE: Single Image with Backside Dots */}
          {/* ========================================================== */}
          <div className="relative order-2 lg:order-1">
            
            {/* Main Image Container */}
            <div className="relative flex justify-center">
              
              {/* Backside Dots - Top Left */}
              <div 
                className="absolute -top-6 -left-6 w-32 h-32 z-0 opacity-30" 
                style={{ backgroundImage: 'radial-gradient(#5C6F5C 2px, transparent 2px)', backgroundSize: '12px 12px' }}
              ></div>
              
              {/* Backside Dots - Bottom Right */}
              <div 
                className="absolute -bottom-6 -right-6 w-40 h-40 z-0 opacity-30" 
                style={{ backgroundImage: 'radial-gradient(#5C6F5C 2px, transparent 2px)', backgroundSize: '12px 12px' }}
              ></div>
              
            
              
              {/* Single Image */}
              <div className="relative z-10  overflow-hidden  transform hover:scale-[1.02] transition-transform duration-500 w-full max-w-md">
                <img 
                  src="./images/key.avif" 
                  alt="Organization Volunteer" 
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Backside Dots - Bottom Left inside */}
              <div 
                className="absolute bottom-4 left-4 w-24 h-24 z-10 opacity-20" 
                style={{ backgroundImage: 'radial-gradient(#EAF3E6 2px, transparent 2px)', backgroundSize: '8px 8px' }}
              ></div>
            </div>
          </div>


          {/* ========================================================== */}
          {/* RIGHT SIDE: Updated with SustainableGoals Colors */}
          {/* ========================================================== */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Pre-Heading Line */}
            <div className="flex items-center gap-3">
               <span className="text-[#5C6F5C]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
               </span>
               <span className="text-gray-500 font-medium tracking-wide uppercase text-sm">Key Highlights</span>
            </div>

            {/* Main Heading - Using #5C6F5C color */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#5C6F5C] leading-tight max-w-xl">
              Some Reasons to Choose <br/>
              <span className="text-[#5C6F5C]">(Our Organization)</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Recognized excellence and proven track record in comprehensive social development, 
              meeting ministry guidelines across diverse sectors.
            </p>

            {/* The Icon-Checklist Grid (2 columns) - Updated colors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* The green circle icon - Using #5C6F5C */}
                  <div className="mt-1 flex-shrink-0 bg-[#5C6F5C] rounded-full p-[3px]">
                    <FiCheckCircle className="text-white text-lg" />
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="font-bold text-[#5C6F5C] text-lg leading-snug">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;