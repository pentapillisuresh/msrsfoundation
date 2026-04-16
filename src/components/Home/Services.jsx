import React from "react";
import { 
  FaGraduationCap, 
  FaUtensils, 
  FaHeartbeat, 
  FaPrayingHands, 
  FaTree, 
  FaChild, 
  FaLeaf, 
  FaHandHoldingHeart,
  FaDonate,
  FaBuilding,
  FaTractor,
  FaPaw
} from "react-icons/fa";
import { GiHealthNormal, GiEarthAmerica, GiCow } from "react-icons/gi";
import { MdVolunteerActivism, MdEmergency } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

const services = [
  {
    id: 1,
    title: "Education Support",
    icon: <FaGraduationCap className="text-2xl" />,
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
    icon: <FaUtensils className="text-2xl" />,
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
    icon: <FaHeartbeat className="text-2xl" />,
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
    icon: <FaPrayingHands className="text-2xl" />,
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
    icon: <FaTractor className="text-2xl" />,
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
    icon: <FaChild className="text-2xl" />,
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
    icon: <FaLeaf className="text-2xl" />,
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
    icon: <MdEmergency className="text-2xl" />,
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
    icon: <FaDonate className="text-2xl" />,
    subpoints: [
      "Support Any Ongoing Initiative",
      "Flexible Fund Allocation",
      "Operational & Administrative Support",
    ],
  },
  {
    id: 10,
    title: "CSR & Corporate Contributions",
    icon: <RiGovernmentLine className="text-2xl" />,
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
    icon: <FaBuilding className="text-2xl" />,
    subpoints: [
      "School & Classroom Construction",
      "Hospital & Medical Facility Setup",
      "Ashramam & Spiritual Center Development",
      "Drinking Water Infrastructure (Borewells, Tanks)",
      "Community Halls & Public Utility Spaces",
    ],
  },
  {
    id: 12,
    title: "Goshala Seva (Cow Protection & Care)",
    icon: <GiCow className="text-2xl" />,
    subpoints: [
      "Cow Feeding (Daily Fodder Seva)",
      "Goshala Maintenance & Shelter",
      "Medical Care for Cows",
      "Rescue & Protection of Abandoned Cattle",
      "Adopt a Cow Program",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
        
         <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Our services
        </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm">
            Comprehensive support programs designed to create lasting impact across communities
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20"
            >
              {/* Card Header with Icon */}
              <div className="relative p-5 pb-3">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-2xl font-bold text-secondary/10">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 pt-0">
                {/* Title */}
                <h3 className="text-lg font-bold text-dark mb-3">
                  {service.title}
                </h3>

                {/* Subpoints List */}
                <ul className="space-y-2">
                  {service.subpoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 hover:text-secondary transition-colors duration-200 flex items-start gap-2"
                    >
                      <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2">
                <button className="w-full px-3 py-2 bg-secondary/5 text-secondary text-xs font-medium rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>Support This Cause</span>
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;