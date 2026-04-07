import React, { useState, useEffect } from 'react';
import { 
  FiDroplet, FiBook, FiHeart, FiUsers, FiGlobe, 
  FiSun, FiTarget, FiAward, FiTrendingUp, FiCheckCircle,
  FiBarChart2, FiHome, FiBriefcase, FiShield, FiLeaf
} from 'react-icons/fi';

const SustainableGoals = () => {
  const [activeGoal, setActiveGoal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goals = [
    {
      id: 1,
      number: 1,
      title: "No Poverty",
      description: "End poverty in all its forms everywhere",
      icon: <FiHome />,
      color: "bg-red-600",
      lightColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      stats: "2,000+ families uplifted",
      initiatives: ["Livelihood programs", "Financial inclusion", "Skill development"],
      impact: "85% reduction in extreme poverty among beneficiaries"
    },
    {
      id: 2,
      number: 2,
      title: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition",
      icon: <FiSun />,
      color: "bg-yellow-600",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      stats: "100,000+ meals served",
      initiatives: ["Food distribution", "Nutrition programs", "Community kitchens"],
      impact: "90% reduction in malnutrition cases"
    },
    {
      id: 3,
      number: 3,
      title: "Good Health & Care",
      description: "Ensure healthy lives and promote well-being for all",
      icon: <FiHeart />,
      color: "bg-green-600",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      stats: "50+ health camps conducted",
      initiatives: ["Medical camps", "Health awareness", "Mental health support"],
      impact: "25,000+ patients treated"
    },
    {
      id: 4,
      number: 4,
      title: "Quality Education",
      description: "Ensure inclusive and equitable quality education",
      icon: <FiBook />,
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      stats: "5,000+ students benefited",
      initiatives: ["Scholarships", "School infrastructure", "Teacher training"],
      impact: "95% increase in literacy rate"
    },
    {
      id: 5,
      number: 5,
      title: "Clean Water & Sanitation",
      description: "Ensure availability of water and sanitation for all",
      icon: <FiDroplet />,
      color: "bg-cyan-600",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      stats: "100+ water wells built",
      initiatives: ["Clean water projects", "Sanitation facilities", "Hygiene education"],
      impact: "50,000+ people access to clean water"
    },
    {
      id: 6,
      number: 8,
      title: "Decent Work & Growth",
      description: "Promote sustained, inclusive economic growth",
      icon: <FiBriefcase />,
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      stats: "1,000+ jobs created",
      initiatives: ["Vocational training", "Entrepreneurship support", "Women empowerment"],
      impact: "75% increase in household income"
    },
    {
      id: 7,
      number: 10,
      title: "Reduced Inequalities",
      description: "Reduce inequality within and among countries",
      icon: <FiUsers />,
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      stats: "10,000+ marginalized supported",
      initiatives: ["Inclusive programs", "Disability support", "Gender equality"],
      impact: "60% reduction in social discrimination"
    },
    {
      id: 8,
      number: 17,
      title: "Partnerships For Goals",
      description: "Strengthen the means of implementation and revitalize partnerships",
      icon: <FiGlobe />,
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      stats: "50+ partnership agreements",
      initiatives: ["CSR collaborations", "NGO networks", "Government alliances"],
      impact: "Multiplier effect on social impact"
    }
  ];

  const sdgColors = {
    1: "from-red-500 to-red-600",
    2: "from-yellow-500 to-yellow-600",
    3: "from-green-500 to-green-600",
    4: "from-blue-500 to-blue-600",
    5: "from-cyan-500 to-cyan-600",
    6: "from-purple-500 to-purple-600",
    7: "from-orange-500 to-orange-600",
    8: "from-indigo-500 to-indigo-600"
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/20">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <div className="bg-secondary/10 rounded-full px-6 py-2">
              <span className="text-secondary font-semibold text-sm tracking-wide">UN Sustainable Development Goals</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-heading">
            Aligned with <span className="text-secondary">Global Goals</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our initiatives directly contribute to achieving the United Nations Sustainable Development Goals (SDGs)
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-secondary mb-2">8</div>
            <div className="text-sm text-gray-600">SDGs Addressed</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-secondary mb-2">100K+</div>
            <div className="text-sm text-gray-600">Lives Impacted</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm text-gray-600">Partnerships</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-secondary mb-2">₹10Cr+</div>
            <div className="text-sm text-gray-600">Investment in SDGs</div>
          </div>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                activeGoal === goal.id ? 'ring-4 ring-secondary shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setActiveGoal(goal.id)}
              onMouseLeave={() => setActiveGoal(null)}
            >
              {/* SDG Number and Icon */}
              <div className={`${goal.color} p-4 text-white relative overflow-hidden`}>
                <div className="absolute right-0 bottom-0 opacity-10">
                  <div className="text-8xl font-bold">{goal.number}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{goal.icon}</div>
                  <div className="text-right">
                    <div className="text-sm opacity-80">SDG {goal.number}</div>
                    <div className="text-xs font-semibold">Target 2030</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-dark mb-2">{goal.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{goal.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                  <FiBarChart2 className={`text-sm ${goal.textColor}`} />
                  <span className="text-xs font-semibold text-gray-700">{goal.stats}</span>
                </div>

                {/* Initiatives - Show on hover */}
                <div className={`transition-all duration-300 overflow-hidden ${activeGoal === goal.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1 mt-3">
                    {goal.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <FiCheckCircle className={`mr-1 text-xs ${goal.textColor}`} />
                        {initiative}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Badge */}
                <div className={`mt-3 p-2 ${goal.lightColor} rounded-lg transition-all duration-300 ${activeGoal === goal.id ? 'block' : 'hidden'}`}>
                  <p className={`text-xs font-medium ${goal.textColor} text-center`}>
                    {goal.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="relative mb-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <FiTarget className="text-8xl" />
            </div>
            <div className="absolute bottom-0 left-0 opacity-10">
              <FiGlobe className="text-8xl" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading relative z-10">
              We Are In A Mission To Help The Helpless
            </h3>
            <p className="text-lg md:text-xl mb-6 relative z-10 max-w-3xl mx-auto">
              Help is Our Goal. At the heart of everything we do is a commitment to creating sustainable change 
              and leaving no one behind.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-sm font-semibold">🌍 Global Impact</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-sm font-semibold">🎯 Local Action</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-sm font-semibold">💚 Sustainable Change</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-dark text-center mb-8 font-heading">Our Progress Towards SDGs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.slice(0, 4).map((goal) => (
              <div key={`progress-${goal.id}`} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${goal.color} rounded-full flex items-center justify-center text-white text-xl`}>
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">SDG {goal.number}: {goal.title}</h4>
                      <p className="text-xs text-gray-500">Target 2030</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-secondary">75%</span>
                    <span className="text-xs text-gray-500 ml-1">Progress</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${goal.color} h-2 rounded-full transition-all duration-1000`} 
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <div className="mt-3 flex justify-between text-xs text-gray-600">
                  <span>2023 Baseline</span>
                  <span>2024 Current</span>
                  <span>2030 Target</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-primary rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-3">Join Us in Achieving the Global Goals</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the change. Contribute to sustainable development and help us create a better world for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="px-6 py-3 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105">
                Donate to Support SDGs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default SustainableGoals;