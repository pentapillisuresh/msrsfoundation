import React, { useEffect, useState, useRef } from "react";

const WorkingProcess = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const processes = [
    {
      id: "01",
      title: "Transparent Fund Utilization",
      desc: "Every rupee is tracked and reported with full transparency.",
      icon: "./images/fund1.png",
    },
    {
      id: "02",
      title: "Real-Time Project Reporting",
      desc: "Live updates and detailed reports on project progress.",
      icon: "./images/project1.png",
    },
    {
      id: "03",
      title: "Government Compliant Operations",
      desc: "Strict adherence to CSR laws and compliance standards.",
      icon: "./images/business.png",
    },
    {
      id: "04",
      title: "High Impact ROI for CSR Investors",
      desc: "Maximize measurable social impact for every investment.",
      icon: "./images/investor.png",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Heading Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EAF3E6] px-4 py-1.5 rounded-full mb-3">
            <span className="text-[#5C6F5C] text-sm font-semibold">🔶 WHY CHOOSE US FOR CSR FUNDING</span>
          </div>
          <div className="w-16 h-0.5 bg-[#5C6F5C]/30 rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SIDE: Process Steps */}
          <div className="w-full lg:w-3/5 relative">
            <div className="space-y-10">
              {processes.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-12 group transition-all duration-500 ${
                    animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  
                  {/* Icon Circle with Colored Image */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-[#EAF3E6] flex items-center justify-center border border-[#5C6F5C]/20 shadow-md group-hover:border-[#5C6F5C] group-hover:shadow-lg transition-all duration-300">
                      <img 
                        src={step.icon} 
                        alt={step.title}
                        className="w-10 h-10 object-contain"
                        style={{
                          filter: "brightness(0) saturate(100%) invert(35%) sepia(8%) saturate(800%) hue-rotate(50deg) brightness(95%) contrast(90%)"
                        }}
                      />
                    </div>
                    
                    {/* Increased Dotted Line Length */}
                    <div className="absolute top-1/2 -right-16 w-16 border-t-2 border-dotted border-[#5C6F5C]/40"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#EAF3E6] p-6 rounded-xl border border-[#5C6F5C]/20 shadow-md relative flex-1 max-w-[280px] group-hover:shadow-lg transition-all duration-300">
                    
                    {/* Number Badge */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-[#5C6F5C] rounded-full flex items-center justify-center shadow-md border-2 border-white z-20">
                      <span className="text-white font-bold text-[11px]">{step.id}</span>
                    </div>

                    <div className="pl-5">
                      <h3 className="text-[#2d3a2d] text-base font-bold mb-2 leading-tight">{step.title}</h3>
                      <p className="text-[#5C6F5C] text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Circular Image */}
          <div className={`w-full lg:w-2/5 flex justify-center lg:justify-center transition-all duration-700 ${
            animated ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[6px] border-[#EAF3E6] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="CSR Funding" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;