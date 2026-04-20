import React, { useState, useEffect } from 'react';
import PageHeader from '../Common/PageHeader';
import Button from '../Common/Button';
import { FiInfo, FiChevronDown, FiChevronUp, FiHeart, FiBook, FiCoffee, FiFeather, FiGlobe, FiUsers, FiSun, FiAlertTriangle, FiBriefcase, FiHome, FiDroplet, FiShield, FiAward, FiCalendar, FiLock, FiMail, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaHeartbeat ,FaTree} from 'react-icons/fa';
import { FaHandHoldingHeart, FaAppleAlt, FaHospitalUser, FaYinYang, FaFemale, FaTint, FaHandsHelping, FaUniversity, FaSeedling, FaChild, FaDonate, FaRegSmile, FaPaw } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonateNow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isInMemory, setIsInMemory] = useState(false);
  const [memoryName, setMemoryName] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [message, setMessage] = useState('');
  const [impactLevel, setImpactLevel] = useState('');

  const donationCategories = [
    {
      id: 1,
      title: "Education Support",
      icon: <FiBook className="text-2xl" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      color: "from-blue-500 to-blue-600",
      description: "Empower through education and knowledge",
      impact: "₹5,000 can support education for one child for 3 months",
      subCategories: [
        { name: "Sponsor a Child's Education", impact: "₹3,000/month per child" },
        { name: "School Infrastructure Development", impact: "₹50,000 for classroom setup" },
        { name: "Books, Uniforms & Learning Materials", impact: "₹1,500 per student" },
        { name: "Digital Learning & Smart Classrooms", impact: "₹25,000 for digital setup" }
      ]
    },
    {
      id: 2,
      title: "Annadanam (Food Donation)",
      icon: <FaAppleAlt className="text-2xl" />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      color: "from-orange-500 to-orange-600",
      description: "Feed the hungry and nourish souls",
      impact: "₹1,000 can feed 50 people",
      subCategories: [
        { name: "Daily Meals for Needy", impact: "₹500/day feeds 25 people" },
        { name: "Festival Annadanam Sponsorship", impact: "₹10,000 for festival feast" },
        { name: "Midday Meal Programs", impact: "₹2,000/month for school meals" },
        { name: "Emergency Food Relief", impact: "₹5,000 for emergency kits" }
      ]
    },
    {
      id: 3,
      title: "Healthcare & Medical Aid",
      icon: <FaHospitalUser className="text-2xl" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      color: "from-red-500 to-red-600",
      description: "Heal lives through medical support",
      impact: "₹2,000 can support a medical camp",
      subCategories: [
        { name: "Free Medical Camps", impact: "₹10,000 per camp" },
        { name: "Medicines for the Poor", impact: "₹1,000 per patient" },
        { name: "Support for Surgeries", impact: "₹25,000 per surgery" },
        { name: "Health Awareness Programs", impact: "₹5,000 per program" }
      ]
    },
    {
      id: 4,
      title: "Spiritual & Cultural Activities",
      icon: <FaYinYang className="text-2xl" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      color: "from-purple-500 to-purple-600",
      description: "Preserve heritage and spirituality",
      impact: "₹5,000 sponsors a puja",
      subCategories: [
        { name: "Temple Development & Maintenance", impact: "₹25,000 for renovation" },
        { name: "Vedic & Spiritual Programs", impact: "₹10,000 per program" },
        { name: "Yagnas, Pujas & Ritual Sponsorship", impact: "₹5,000 per ritual" },
        { name: "Preservation of Indian Culture", impact: "₹15,000 for cultural events" }
      ]
    },
    {
      id: 5,
      title: "Rural & Community Development",
      icon: <FaTree className="text-2xl" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      color: "from-green-500 to-green-600",
      description: "Build sustainable rural communities",
      impact: "₹10,000 can develop a village",
      subCategories: [
        { name: "Village Development Projects", impact: "₹50,000 per village" },
        { name: "Clean Water Initiatives", impact: "₹30,000 for water tank" },
        { name: "Sanitation & Hygiene Programs", impact: "₹15,000 for toilets" },
        { name: "Skill Development for Youth", impact: "₹20,000 for training" }
      ]
    },
    {
      id: 6,
      title: "Women & Child Welfare",
      icon: <FaFemale className="text-2xl" />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      color: "from-pink-500 to-pink-600",
      description: "Empower women and protect children",
      impact: "₹3,000 supports a woman's livelihood",
      subCategories: [
        { name: "Women Empowerment Programs", impact: "₹10,000 per program" },
        { name: "Child Protection & Care", impact: "₹5,000 per child" },
        { name: "Nutrition Programs", impact: "₹2,000 per child/month" },
        { name: "Support for Orphaned Children", impact: "₹4,000 per child/month" }
      ]
    },
    {
      id: 7,
      title: "Environmental Protection",
      icon: <FiDroplet className="text-2xl" />,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      color: "from-teal-500 to-teal-600",
      description: "Protect our planet for future generations",
      impact: "₹500 plants a tree",
      subCategories: [
        { name: "Tree Plantation Drives", impact: "₹5,000 for 100 trees" },
        { name: "Water Conservation Projects", impact: "₹25,000 for water harvesting" },
        { name: "Clean India Initiatives", impact: "₹10,000 per drive" },
        { name: "Sustainable Development Programs", impact: "₹30,000 for sustainability" }
      ]
    },
    {
      id: 8,
      title: "Disaster Relief & Emergency Support",
      icon: <FiAlertTriangle className="text-2xl" />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      color: "from-yellow-500 to-yellow-600",
      description: "Provide immediate disaster relief",
      impact: "₹2,000 provides emergency kit",
      subCategories: [
        { name: "Flood / Cyclone Relief", impact: "₹20,000 per family" },
        { name: "Emergency Response Fund", impact: "₹50,000 for quick response" },
        { name: "Rehabilitation Support", impact: "₹30,000 per family" },
        { name: "Crisis Food & Shelter", impact: "₹5,000 for emergency supplies" }
      ]
    },
    {
      id: 9,
      title: "General Fund (Where Needed Most)",
      icon: <FaDonate className="text-2xl" />,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      color: "from-gray-500 to-gray-600",
      description: "Support our most urgent needs",
      impact: "100% goes to critical needs",
      subCategories: [
        { name: "Support Any Ongoing Initiative", impact: "Flexible allocation" },
        { name: "Flexible Fund Allocation", impact: "Directed to urgent needs" },
        { name: "Operational & Administrative Support", impact: "Ensures smooth operations" }
      ]
    },
    {
      id: 10,
      title: "CSR & Corporate Contributions",
      icon: <FaUniversity className="text-2xl" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      color: "from-indigo-500 to-indigo-600",
      description: "Partner with us for corporate impact",
      impact: "Customized impact reports",
      subCategories: [
        { name: "Corporate Social Responsibility Projects", impact: "Custom projects" },
        { name: "Adopt a Village / School", impact: "Long-term impact" },
        { name: "Employee Engagement Programs", impact: "Team volunteering" },
        { name: "Long-term Partnership Projects", impact: "Sustainable development" }
      ]
    },
    {
      id: 11,
      title: "Infrastructure Development",
      icon: <FiHome className="text-2xl" />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      color: "from-cyan-500 to-cyan-600",
      description: "Build lasting infrastructure",
      impact: "₹1,00,000 builds a classroom",
      subCategories: [
        { name: "School & Classroom Construction", impact: "₹2,00,000 per classroom" },
        { name: "Hospital & Medical Facility Setup", impact: "₹5,00,000 per facility" },
        { name: "Ashramam & Spiritual Center Development", impact: "₹3,00,000 for development" },
        { name: "Drinking Water Infrastructure", impact: "₹50,000 for borewell" },
        { name: "Community Halls & Public Utility Spaces", impact: "₹1,50,000 per hall" }
      ]
    },
    {
      id: 12,
      title: "Goshala Seva (Cow Protection & Care)",
      icon: <FaPaw className="text-2xl" />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      color: "from-amber-500 to-amber-600",
      description: "Protect and care for cows",
      impact: "₹1,000 feeds a cow for a month",
      subCategories: [
        { name: "Cow Feeding (Daily Fodder Seva)", impact: "₹500 per cow/month" },
        { name: "Goshala Maintenance & Shelter", impact: "₹10,000 per month" },
        { name: "Medical Care for Cows", impact: "₹2,000 per treatment" },
        { name: "Rescue & Protection of Abandoned Cattle", impact: "₹5,000 per rescue" },
        { name: "Adopt a Cow Program", impact: "₹1,500 per cow/month" }
      ]
    }
  ];

  const amountOptions = [1000, 5000, 10000, 25000, 50000, 100000];
  const impactLevels = [
    { value: "bronze", label: "Bronze", minAmount: 1000, icon: "🥉" },
    { value: "silver", label: "Silver", minAmount: 5000, icon: "🥈" },
    { value: "gold", label: "Gold", minAmount: 10000, icon: "🥇" },
    { value: "platinum", label: "Platinum", minAmount: 25000, icon: "💎" }
  ];

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
    const level = impactLevels.find(l => value >= l.minAmount);
    if (level) setImpactLevel(level.label);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('');
    const level = impactLevels.find(l => value >= l.minAmount);
    if (level) setImpactLevel(level.label);
    else setImpactLevel('');
  };

  const toggleCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory(null);
      setSelectedSubCategory(null);
    } else {
      setExpandedCategory(id);
      setSelectedSubCategory(null);
    }
  };

  const selectSubCategory = (categoryId, subCatName) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCatName);
    setExpandedCategory(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !selectedSubCategory) {
      alert('Please select a donation category and sub-category');
      return;
    }
    if (!amount && !customAmount) {
      alert('Please select or enter an amount');
      return;
    }
    if (!donorName || !donorEmail) {
      alert('Please enter your name and email');
      return;
    }
    
    console.log('Donation Details:', {
      selectedCategory: donationCategories.find(c => c.id === selectedCategory)?.title,
      selectedSubCategory,
      amount: amount || customAmount,
      isRecurring,
      isInMemory,
      memoryName,
      donorName,
      donorEmail,
      donorPhone,
      donorAddress,
      message,
      impactLevel
    });
    alert('Thank you for your donation! You will be redirected to payment gateway.');
  };

  const selectedCategoryData = donationCategories.find(c => c.id === selectedCategory);
  const donationAmount = amount || customAmount || 0;

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .category-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .category-card:hover {
            transform: translateY(-4px);
          }
          
          .subcategory-item {
            transition: all 0.3s ease;
          }
          
          .subcategory-item:hover {
            transform: translateX(8px);
            background: linear-gradient(135deg, #667A62 0%, #2C3E2B 100%);
            color: white;
          }
          
          .amount-btn {
            transition: all 0.3s ease;
          }
          
          .amount-btn:hover {
            transform: scale(1.05);
          }
          
          .floating-heart {
            animation: floatHeart 3s ease-in-out infinite;
          }
          
          @keyframes floatHeart {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #667A62;
            border-radius: 10px;
          }
          
          .btn-glow:hover {
            box-shadow: 0 0 20px rgba(102, 122, 98, 0.5);
          }
        `}
      </style>

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[350px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80"
            alt="Donate Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E2B]/95 to-[#667A62]/85"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <FaHandHoldingHeart className="text-[#667A62]" />
              <span className="text-sm font-semibold text-white">Make an Impact Today</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 heading-font">
              Donate Now
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Your support enables us to transform lives and build stronger communities
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Donation Categories */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6" data-aos="fade-right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#EAF6E3] rounded-full flex items-center justify-center">
                    <FaHandHoldingHeart className="text-[#667A62] text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#2C3E2B]">Choose a Donation Category</h2>
                    <p className="text-sm text-gray-500">Select how you want to make a difference</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donationCategories.map((category) => (
                    <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center`}>
                            <span className={category.iconColor}>{category.icon}</span>
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-[#2C3E2B]">{category.title}</h3>
                            <p className="text-xs text-gray-500">{category.description}</p>
                          </div>
                        </div>
                        {expandedCategory === category.id ? (
                          <FiChevronUp className="text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        )}
                      </button>
                      
                      {/* Subcategories */}
                      {expandedCategory === category.id && (
                        <div className="border-t border-gray-100 bg-gray-50 p-3 space-y-2">
                          {category.subCategories.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={() => selectSubCategory(category.id, sub.name)}
                              className={`subcategory-item w-full text-left p-3 rounded-lg transition-all ${
                                selectedCategory === category.id && selectedSubCategory === sub.name
                                  ? 'bg-gradient-to-r from-[#667A62] to-[#2C3E2B] text-white'
                                  : 'bg-white hover:bg-gradient-to-r hover:from-[#667A62] hover:to-[#2C3E2B] hover:text-white'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">{sub.name}</span>
                                <span className={`text-xs ${selectedCategory === category.id && selectedSubCategory === sub.name ? 'text-white/80' : 'text-[#667A62]'}`}>
                                  {sub.impact}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Selected Category Display */}
                {selectedCategory && selectedSubCategory && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#667A62]/10 to-[#2C3E2B]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#2C3E2B]">Selected:</p>
                    <p className="text-lg font-bold text-[#667A62]">{selectedSubCategory}</p>
                    <p className="text-xs text-gray-500 mt-1">{selectedCategoryData?.impact}</p>
                  </div>
                )}
              </div>
              
              {/* Donation Amount Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6" data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-4 flex items-center gap-2">
                  <FiHeart className="text-[#667A62]" /> Select Amount
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {amountOptions.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountSelect(amt)}
                      className={`amount-btn px-6 py-3 rounded-xl font-bold transition-all ${
                        amount === amt
                          ? 'bg-gradient-to-r from-[#667A62] to-[#2C3E2B] text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-[#2C3E2B] hover:bg-[#EAF6E3]'
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">₹</span>
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-8 pr-4 py-3 border border-gray-200 rounded-xl w-40 focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    />
                  </div>
                </div>
                
                {/* Impact Level Badge */}
                {impactLevel && (
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiAward /> {impactLevel} Donor Level
                  </div>
                )}
                
                {/* Recurring Donation */}
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62]"
                  />
                  <label htmlFor="recurring" className="font-semibold text-[#2C3E2B]">
                    Make this a monthly recurring donation
                  </label>
                </div>
                
                {/* In Memory/Honor Option */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="checkbox"
                      id="inMemory"
                      checked={isInMemory}
                      onChange={(e) => setIsInMemory(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62]"
                    />
                    <label htmlFor="inMemory" className="font-semibold text-[#2C3E2B]">
                      Donate in Memory / Honor of Someone
                    </label>
                  </div>
                  {isInMemory && (
                    <input
                      type="text"
                      placeholder="Name of person to honor"
                      value={memoryName}
                      onChange={(e) => setMemoryName(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    />
                  )}
                </div>
              </div>
              
              {/* Donor Information */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mt-6" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-4 flex items-center gap-2">
                  <FiUser className="text-[#667A62]" /> Your Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                        <FiUser className="inline mr-2 text-[#667A62]" size={14} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                        <FiMail className="inline mr-2 text-[#667A62]" size={14} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                        <FiPhone className="inline mr-2 text-[#667A62]" size={14} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                        <FiHome className="inline mr-2 text-[#667A62]" size={14} />
                        Address (for 80G certificate)
                      </label>
                      <input
                        type="text"
                        value={donorAddress}
                        onChange={(e) => setDonorAddress(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                      <FiMessageSquare className="inline mr-2 text-[#667A62]" size={14} />
                      Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="3"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                      placeholder="Write a message to the team..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Donation Summary */}
            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="bg-gradient-to-br from-white to-[#EAF6E3] rounded-2xl shadow-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-full flex items-center justify-center mx-auto mb-3 floating-heart">
                    <FaHandHoldingHeart className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Donation Summary</h3>
                  <p className="text-xs text-gray-500">Review your donation details</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Category:</span>
                    <span className="font-semibold text-sm text-right">
                      {selectedSubCategory || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Amount:</span>
                    <span className="font-semibold text-[#667A62] text-xl">
                      ₹{donationAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Type:</span>
                    <span className="font-semibold text-sm">{isRecurring ? 'Monthly Recurring' : 'One-time'}</span>
                  </div>
                  {impactLevel && (
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Impact Level:</span>
                      <span className="font-semibold text-sm text-yellow-600">{impactLevel}</span>
                    </div>
                  )}
                  {isInMemory && memoryName && (
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">In Honor of:</span>
                      <span className="font-semibold text-sm">{memoryName}</span>
                    </div>
                  )}
                </div>
                
                {/* Tax Exemption Info */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <FiShield className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-blue-800">80G Tax Exemption</p>
                      <p className="text-xs text-blue-700 mt-1">
                        Your donation is eligible for 50% tax exemption under Section 80G of Income Tax Act, 1961.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Impact Preview */}
                <div className="bg-[#667A62]/10 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-[#667A62] mb-2">Your Impact:</p>
                  <p className="text-sm text-[#2C3E2B]">
                    {donationAmount >= 5000 ? (
                      "✨ You're making a significant difference in someone's life!"
                    ) : donationAmount >= 1000 ? (
                      "🌟 Every contribution helps us serve more people in need."
                    ) : (
                      "💝 Thank you for your kindness and generosity!"
                    )}
                  </p>
                </div>
                
                <Button onClick={handleSubmit} variant="primary" fullWidth size="lg" className="btn-glow">
                  Proceed to Donate
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <FiLock className="text-gray-400 text-xs" />
                  <p className="text-xs text-center text-gray-500">
                    Secure payment gateway powered by Razorpay<br />
                    100% secure transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Impact Stories
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Real Stories, Real Impact
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#EAF6E3] rounded-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <FaRegSmile className="text-[#667A62] text-4xl mx-auto mb-4" />
              <p className="text-gray-700 text-sm mb-3">
                "Thanks to donors like you, we've helped 500+ children get quality education this year."
              </p>
              <p className="text-xs font-semibold text-[#667A62]">- Education Program</p>
            </div>
            <div className="bg-[#EAF6E3] rounded-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="200">
              <FaSeedling className="text-[#667A62] text-4xl mx-auto mb-4" />
              <p className="text-gray-700 text-sm mb-3">
                "Your donations have planted 10,000+ trees across 5 districts."
              </p>
              <p className="text-xs font-semibold text-[#667A62]">- Environment Program</p>
            </div>
            <div className="bg-[#EAF6E3] rounded-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="300">
              <FaChild className="text-[#667A62] text-4xl mx-auto mb-4" />
              <p className="text-gray-700 text-sm mb-3">
                "Monthly donors have helped 200+ families achieve self-sufficiency."
              </p>
              <p className="text-xs font-semibold text-[#667A62]">- Rural Development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateNow;