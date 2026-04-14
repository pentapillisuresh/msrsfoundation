import React from "react";

const services = [
  {
    id: 1,
    title: "🌿 Education Support",
    subpoints: [
      "Sponsor a Child's Education",
      "School Infrastructure Development",
      "Books, Uniforms & Learning Materials",
      "Digital Learning & Smart Classrooms",
    ],
  },
  {
    id: 2,
    title: "🍛 Annadanam (Food Donation)",
    subpoints: [
      "Daily Meals for Needy",
      "Festival Annadanam Sponsorship",
      "Midday Meal Programs",
      "Emergency Food Relief",
    ],
  },
  {
    id: 3,
    title: "🏥 Healthcare & Medical Aid",
    subpoints: [
      "Free Medical Camps",
      "Medicines for the Poor",
      "Support for Surgeries",
      "Health Awareness Programs",
    ],
  },
  {
    id: 4,
    title: "🛕 Spiritual & Cultural Activities",
    subpoints: [
      "Temple Development & Maintenance",
      "Vedic & Spiritual Programs",
      "Yagnas, Pujas & Ritual Sponsorship",
      "Preservation of Indian Culture",
    ],
  },
  {
    id: 5,
    title: "🌱 Rural & Community Development",
    subpoints: [
      "Village Development Projects",
      "Clean Water Initiatives",
      "Sanitation & Hygiene Programs",
      "Skill Development for Youth",
    ],
  },
  {
    id: 6,
    title: "👩‍👧 Women & Child Welfare",
    subpoints: [
      "Women Empowerment Programs",
      "Child Protection & Care",
      "Nutrition Programs",
      "Support for Orphaned Children",
    ],
  },
  {
    id: 7,
    title: "🌍 Environmental Protection",
    subpoints: [
      "Tree Plantation Drives",
      "Water Conservation Projects",
      "Clean India Initiatives",
      "Sustainable Development Programs",
    ],
  },
  {
    id: 8,
    title: "🚨 Disaster Relief & Emergency Support",
    subpoints: [
      "Flood / Cyclone Relief",
      "Emergency Response Fund",
      "Rehabilitation Support",
      "Crisis Food & Shelter",
    ],
  },
  {
    id: 9,
    title: "🤝 General Fund (Where Needed Most)",
    subpoints: [
      "Support Any Ongoing Initiative",
      "Flexible Fund Allocation",
      "Operational & Administrative Support",
    ],
  },
  {
    id: 10,
    title: "🏢 CSR & Corporate Contributions",
    subpoints: [
      "Corporate Social Responsibility Projects",
      "Adopt a Village / School",
      "Employee Engagement Programs",
      "Long-term Partnership Projects",
    ],
  },
  {
    id: 11,
    title: "🏗️ Infrastructure Development",
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
    title: "🐄 Goshala Seva (Cow Protection & Care)",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Our Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#EAF3E6] rounded-lg p-6 transition-all duration-300 hover:bg-[#5C6F5C]"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-[#5C6F5C] group-hover:text-white transition mb-4">
                {service.title}
              </h3>

              {/* Subpoints List */}
              <ul className="space-y-2">
                {service.subpoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 group-hover:text-gray-100 transition flex items-start gap-2"
                  >
                    <span className="text-[#5C6F5C] group-hover:text-green-200">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;