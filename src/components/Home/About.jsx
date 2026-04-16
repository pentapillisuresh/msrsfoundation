import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="./images/about.jpg"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Title */}
          <p className="text-sm tracking-widest text-gray-500 mb-2">
            ABOUT US
          </p>

          {/* Main Heading (UPDATED) */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Empowering Communities <br />
            Through Sustainable Development
          </h2>

          {/* Since + Line */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 text-lg">Since 2025</span>
            <div className="w-20 h-[1px] bg-gray-400"></div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            MAHA SHREE RUDRA SAMSTHANAM FOUNDATION (MSRS Foundation) is a Section 8 non-profit organization, established with a vision to create sustainable and inclusive development across diverse communities. 
            Registered under the Ministry of Corporate Affairs, Government of India, the foundation operates with a strong focus on accountability, transparency, and measurable social impact. 
            The organization works across multiple sectors, aligning its initiatives with national development goals and global sustainability frameworks.
          </p>

          {/* Link */}
          <a
            href="#"
            className="text-gray-900 font-medium hover:underline"
          >
            More Details »
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;