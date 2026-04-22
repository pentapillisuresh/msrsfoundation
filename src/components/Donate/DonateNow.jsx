import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiBook, FiHeart, FiUser, FiMail, FiPhone, FiHome, FiMessageSquare, 
  FiShield, FiLock, FiChevronRight, FiChevronDown, FiAlertTriangle, 
  FiDroplet, FiAward, FiCalendar, FiArrowRight, FiCheckCircle, FiX
} from 'react-icons/fi';
import { 
  FaAppleAlt, FaHospitalUser, FaYinYang, FaFemale, FaTree, FaDonate, 
  FaUniversity, FaPaw, FaHandHoldingHeart, FaChild, FaSeedling, FaRegSmile 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonateNow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  // --- State Management ---
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState("Sponsor a Child's Education");
  const [citizenship, setCitizenship] = useState('Indian Citizen');
  const [donationType, setDonationType] = useState('Once');
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [request80G, setRequest80G] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  const [donorDetails, setDonorDetails] = useState({
    name: '', email: '', phone: '', address: '', pan: '', dob: ''
  });

  // --- Data: All 12 Categories & Subcategories ---
  const donationCategories = [
    { id: 1, title: "Education Support", icon: <FiBook />, impact: "₹5,000 supports 1 child for 3 months", subCategories: [
        { name: "Sponsor a Child's Education", impact: "₹3,000/month" },
        { name: "School Infrastructure Development", impact: "₹50,000 setup" },
        { name: "Books, Uniforms & Materials", impact: "₹1,500/student" },
        { name: "Digital Learning & Smart Classes", impact: "₹25,000 setup" }
    ]},
    { id: 2, title: "Annadanam", icon: <FaAppleAlt />, impact: "₹1,000 feeds 50 people", subCategories: [
        { name: "Daily Meals for Needy", impact: "₹500 feeds 25" },
        { name: "Festival Annadanam Sponsorship", impact: "₹10,000/feast" },
        { name: "Midday Meal Programs", impact: "₹2,000/month" },
        { name: "Emergency Food Relief", impact: "₹5,000/kit" }
    ]},
    { id: 3, title: "Healthcare Aid", icon: <FaHospitalUser />, impact: "₹2,000 supports a camp", subCategories: [
        { name: "Free Medical Camps", impact: "₹10,000/camp" },
        { name: "Medicines for the Poor", impact: "₹1,000/patient" },
        { name: "Support for Surgeries", impact: "₹25,000/surgery" },
        { name: "Health Awareness Programs", impact: "₹5,000/program" }
    ]},
    { id: 4, title: "Spiritual & Culture", icon: <FaYinYang />, impact: "₹5,000 sponsors a puja", subCategories: [
        { name: "Temple Maintenance", impact: "₹25,000" },
        { name: "Vedic & Spiritual Programs", impact: "₹10,000" },
        { name: "Yagnas & Ritual Sponsorship", impact: "₹5,000" },
        { name: "Culture Preservation", impact: "₹15,000" }
    ]},
    { id: 5, title: "Rural Development", icon: <FaTree />, impact: "₹10,000 for village development", subCategories: [
        { name: "Village Development Projects", impact: "₹50,000" },
        { name: "Clean Water Initiatives", impact: "₹30,000/tank" },
        { name: "Sanitation & Hygiene", impact: "₹15,000/toilet" },
        { name: "Skill Development for Youth", impact: "₹20,000" }
    ]},
    { id: 6, title: "Women & Child", icon: <FaFemale />, impact: "₹3,000 for livelihood", subCategories: [
        { name: "Women Empowerment Programs", impact: "₹10,000" },
        { name: "Child Protection & Care", impact: "₹5,000/child" },
        { name: "Nutrition Programs", impact: "₹2,000/month" },
        { name: "Support for Orphans", impact: "₹4,000/month" }
    ]},
    { id: 7, title: "Environment", icon: <FiDroplet />, impact: "₹500 plants a tree", subCategories: [
        { name: "Tree Plantation Drives", impact: "₹5,000/100 trees" },
        { name: "Water Conservation", impact: "₹25,000" },
        { name: "Clean India Initiatives", impact: "₹10,000" },
        { name: "Sustainability Programs", impact: "₹30,000" }
    ]},
    { id: 8, title: "Disaster Relief", icon: <FiAlertTriangle />, impact: "₹2,000 for emergency kit", subCategories: [
        { name: "Flood / Cyclone Relief", impact: "₹20,000/family" },
        { name: "Emergency Response Fund", impact: "₹50,000" },
        { name: "Rehabilitation Support", impact: "₹30,000" },
        { name: "Crisis Food & Shelter", impact: "₹5,000" }
    ]},
    { id: 9, title: "General Fund", icon: <FaDonate />, impact: "100% to critical needs", subCategories: [
        { name: "Support Any Ongoing Initiative", impact: "Flexible" },
        { name: "Flexible Fund Allocation", impact: "Urgent Needs" },
        { name: "Operational Support", impact: "Smooth Operations" }
    ]},
    { id: 10, title: "CSR Partnership", icon: <FaUniversity />, impact: "Custom impact reports", subCategories: [
        { name: "Corporate Responsibility Projects", impact: "Custom" },
        { name: "Adopt a Village / School", impact: "Long-term" },
        { name: "Employee Engagement", impact: "Volunteering" },
        { name: "Long-term Partnerships", impact: "Sustainable" }
    ]},
    { id: 11, title: "Infrastructure", icon: <FiHome />, impact: "₹1,00,000 builds a classroom", subCategories: [
        { name: "School Construction", impact: "₹2,00,000" },
        { name: "Hospital Setup", impact: "₹5,00,000" },
        { name: "Ashramam Development", impact: "₹3,00,000" },
        { name: "Drinking Water (Borewell)", impact: "₹50,000" }
    ]},
    { id: 12, title: "Goshala Seva", icon: <FaPaw />, impact: "₹1,000 feeds a cow/month", subCategories: [
        { name: "Daily Fodder Seva", impact: "₹500/month" },
        { name: "Goshala Maintenance", impact: "₹10,000" },
        { name: "Medical Care for Cows", impact: "₹2,000" },
        { name: "Adopt a Cow Program", impact: "₹1,500/month" }
    ]}
  ];

  const amountOptions = [1000, 2000, 5000, 10000, 15000, 25000, 50000, 100000];

  const currentCat = donationCategories.find(c => c.id === selectedCategory);

  const handleInputChange = (e) => {
    setDonorDetails({ ...donorDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Please accept the Terms & Conditions to proceed with your donation.');
      return;
    }
    console.log('Donation submitted:', { donorDetails, selectedCategory, selectedSubCategory, citizenship, donationType, amount, customAmount, request80G });
    alert('Thank you for your donation!');
  };

  return (
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .active-tab { 
            border-bottom: 2px solid #667A62; 
            background-color: white; 
            color: #2C3E2B !important; 
          }
          
          .tab-btn { 
            transition: all 0.3s ease; 
            min-width: 100px;
          }
          
          .subcat-card { 
            border: 1px solid #EAF6E3; 
            transition: all 0.3s ease; 
          }
          
          .subcat-card:hover { 
            border-color: #667A62; 
            background: #EAF6E3; 
          }
          
          .subcat-selected { 
            border-color: #667A62; 
            background: #EAF6E3; 
          }
          
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(8px);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .modal-content {
            animation: scaleUp 0.3s ease;
            max-height: 90vh;
            overflow-y: auto;
          }
          
          @keyframes scaleUp {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Donate Now Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              MAKE A DIFFERENCE
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Online Donations
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Support MSRS Foundation Initiatives - Your contribution can transform lives and create lasting impact
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* --- MAIN DONATION FORM --- */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* --- 1. Horizontal Category Tabs --- */}
        <div className="bg-white border border-[#EAF6E3] overflow-hidden mb-6" data-aos="fade-up">
          <div className="flex overflow-x-auto">
            {donationCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubCategory(cat.subCategories[0].name);
                }}
                className={`tab-btn flex flex-col items-center justify-center p-4 gap-1 text-gray-500 transition-all ${selectedCategory === cat.id ? 'active-tab font-bold' : 'hover:bg-[#F7F9F5]'}`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-[9px] uppercase font-bold text-center leading-tight">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              
              {/* --- 2. Citizenship & Frequency --- */}
              <div className="bg-white p-6 border border-[#EAF6E3]" data-aos="fade-up">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-3 tracking-widest">Citizenship</h4>
                    <div className="flex flex-col gap-2">
                      {['Indian Citizen', 'NRI', 'Foreign National'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer p-2 border border-transparent hover:bg-[#F7F9F5] transition-all">
                          <input type="radio" name="citizen" checked={citizenship === type} onChange={() => setCitizenship(type)} className="w-3.5 h-3.5 accent-[#667A62]" />
                          <span className="text-xs font-semibold">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-3 tracking-widest">Donation Type</h4>
                    <div className="flex gap-3">
                      {['Once', 'Monthly'].map(type => (
                        <button 
                          key={type}
                          type="button"
                          onClick={() => setDonationType(type)}
                          className={`flex-1 py-2.5 text-xs font-bold transition-all ${donationType === type ? 'bg-[#667A62] text-white' : 'bg-white text-gray-600 border border-[#EAF6E3] hover:border-[#667A62]'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- 3. Sub-Category Selection --- */}
              <div className="bg-white p-6 border border-[#EAF6E3]" data-aos="fade-up">
                <h3 className="font-serif text-lg font-bold text-[#2C3E2B] mb-4">Select Specific Cause</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentCat.subCategories.map((sub, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSubCategory(sub.name)}
                      className={`subcat-card p-3 text-left flex flex-col gap-0.5 transition-all ${selectedSubCategory === sub.name ? 'subcat-selected' : ''}`}
                    >
                      <span className="text-xs font-bold text-[#2C3E2B]">{sub.name}</span>
                      <span className="text-[9px] text-[#667A62] italic">{sub.impact}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* --- 4. Amount Selection --- */}
              <div className="bg-white p-6 border border-[#EAF6E3]" data-aos="fade-up">
                <h3 className="font-serif text-lg font-bold text-[#2C3E2B] mb-1">Donation Amount</h3>
                <p className="text-[9px] text-gray-400 mb-5 uppercase tracking-wider">Help us reach our goals</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
                  {amountOptions.map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {setAmount(amt); setCustomAmount('');}}
                      className={`py-2 text-xs font-bold transition-all ${amount === amt ? 'bg-[#667A62] text-white' : 'border border-[#EAF6E3] text-gray-500 bg-white hover:border-[#667A62]'}`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667A62] font-bold text-base">₹</span>
                  <input 
                    type="number" 
                    placeholder="Enter Other Amount" 
                    className="w-full pl-8 pr-3 py-2 border border-dashed border-gray-300 focus:border-[#667A62] focus:outline-none bg-white transition-all text-sm"
                    value={customAmount}
                    onChange={(e) => {setCustomAmount(e.target.value); setAmount(0);}}
                  />
                </div>
              </div>

              {/* --- 5. Personal Info --- */}
              <div className="bg-white p-6 border border-[#EAF6E3]" data-aos="fade-up">
                <h3 className="font-serif text-lg font-bold text-[#2C3E2B] mb-5">Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-400 uppercase">Full Name *</label>
                    <input name="name" onChange={handleInputChange} type="text" className="w-full border-b py-1.5 outline-none focus:border-[#667A62] bg-transparent text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-400 uppercase">Email Address *</label>
                    <input name="email" onChange={handleInputChange} type="email" className="w-full border-b py-1.5 outline-none focus:border-[#667A62] bg-transparent text-sm" placeholder="Email Address" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-400 uppercase">Phone Number</label>
                    <input name="phone" onChange={handleInputChange} type="tel" className="w-full border-b py-1.5 outline-none focus:border-[#667A62] bg-transparent text-sm" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-400 uppercase">PAN Card (For Tax Receipt)</label>
                    <input name="pan" onChange={handleInputChange} type="text" className="w-full border-b py-1.5 outline-none focus:border-[#667A62] bg-transparent uppercase text-sm" placeholder="PAN Card" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-[#F7F9F5] border border-[#EAF6E3]">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="80g" checked={request80G} onChange={(e) => setRequest80G(e.target.checked)} className="w-4 h-4 accent-[#667A62] cursor-pointer" />
                    <label htmlFor="80g" className="text-xs font-semibold text-[#2C3E2B]">I require an 80G Tax Exemption Certificate</label>
                  </div>
                  <div className="bg-white px-3 py-1.5 border flex items-center gap-2">
                      <span className="text-xs text-gray-400">Captcha: 5 + 3 = </span>
                      <input type="text" className="w-8 border-b outline-none text-center text-xs font-bold text-[#667A62]" maxLength="1" />
                  </div>
                </div>
              </div>
            </div>

            {/* --- Sidebar: Summary --- */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-[#EAF6E3] overflow-hidden" data-aos="fade-left">
                  <div className="bg-[#667A62] p-5 text-white text-center">
                    <FaHandHoldingHeart className="text-3xl mx-auto mb-3 floating-element" />
                    <h4 className="font-serif text-xl font-bold">Your Contribution</h4>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Cause</p>
                      <p className="text-xs font-bold text-[#2C3E2B] leading-tight">{selectedSubCategory}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Frequency</p>
                      <p className="text-xs font-bold text-[#667A62] uppercase tracking-tighter">{donationType} Donation</p>
                    </div>
                    
                    <div className="pt-3 border-t border-[#EAF6E3]">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-gray-500">Amount</span>
                        <span className="text-2xl font-bold text-[#2C3E2B]">₹{(Number(amount) || Number(customAmount)).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="pt-3 border-t border-[#EAF6E3]">
                      <div className="flex items-start gap-2">
                        <input 
                          type="checkbox" 
                          id="agreeTerms" 
                          checked={agreeTerms} 
                          onChange={(e) => setAgreeTerms(e.target.checked)} 
                          className="w-4 h-4 mt-0.5 accent-[#667A62] cursor-pointer" 
                        />
                        <label htmlFor="agreeTerms" className="text-[9px] text-gray-500 leading-relaxed">
                          I agree to the{' '}
                          <button 
                            type="button"
                            onClick={() => setShowTermsModal(true)}
                            className="text-[#667A62] font-semibold underline hover:text-[#2C3E2B] transition-colors"
                          >
                            Terms & Conditions
                          </button>
                        </label>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#2C3E2B] hover:bg-[#1a261a] text-white font-bold py-3 text-sm transition-all flex items-center justify-center gap-2 mt-3"
                    >
                      DONATE SECURELY <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <div className="flex flex-col items-center gap-2 pt-2">
                      <div className="flex items-center gap-1 text-[8px] font-bold text-gray-400">
                        <FiLock /> 256-BIT SECURE PAYMENT
                      </div>
                      <div className="flex gap-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PP" className="h-3" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Visa_2021.svg" alt="Visa" className="h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Benefits Card */}
                <div className="bg-[#F7F9F5] p-5 border border-[#EAF6E3]" data-aos="fade-left" data-aos-delay="100">
                  <div className="flex gap-3">
                      <FiAward className="text-[#667A62] text-2xl shrink-0" />
                      <div>
                          <h5 className="font-serif font-bold text-[#2C3E2B] text-sm">Tax Benefits</h5>
                          <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                              MSRS Foundation is a registered Section 8 NGO. All donations are tax-exempt under Section 80G.
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Need Help With Your Donation?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Our team is here to assist you with any questions about the donation process.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <Link 
                to="/contact"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                Contact Us 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal-content bg-white max-w-2xl w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#2C3E2B] p-4 text-white flex items-center justify-between sticky top-0">
              <div className="flex items-center gap-2">
                <FiShield className="text-xl" />
                <h3 className="font-serif text-lg font-bold">Terms & Conditions</h3>
              </div>
              <button 
                onClick={() => setShowTermsModal(false)} 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
              >
                <FiX size={16} />
              </button>
            </div>
            
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">1. General Agreement</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  By making a donation to MSRS Foundation, you agree to the terms and conditions outlined below. 
                  These terms govern your use of our donation services and your relationship with our organization.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">2. Donations Are Voluntary</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All donations are made voluntarily. Once a donation is submitted, it is considered final and 
                  non-refundable unless otherwise stated under local laws or specific agreements.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">3. Use of Funds</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your donation will be used to support our mission, programs, and operations. While we strive to 
                  honor donor preferences, we reserve the right to allocate funds where they are most needed.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">4. Tax Deductibility</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Donations may be tax-deductible depending on your country's tax laws. We will provide a receipt, 
                  but it is your responsibility to consult a tax professional for proper filing.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">5. Privacy and Data Security</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are committed to protecting your personal information. Your data will only be used for processing 
                  your donation, communication, and complying with legal obligations. We do not sell or share your 
                  information with third parties.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">6. Recurring Donations</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you choose to make a recurring donation, you authorize us to charge your chosen payment method 
                  on a scheduled basis. You may cancel or update your recurring donation at any time by contacting us.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">7. Modifications</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We may update these terms from time to time. Continued use of our donation platform after changes 
                  implies acceptance of the new terms.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#2C3E2B] text-base mb-2">8. Contact Us</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you have any questions about your donation or these terms, please contact us at:<br />
                  Email: msrsfoundation2025@gmail.com<br />
                  Phone: +91 XXXXX XXXXX<br />
                  Address: Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-[#F7F9F5] border-t border-[#EAF6E3]">
              <button 
                onClick={() => setShowTermsModal(false)}
                className="w-full py-2.5 bg-[#667A62] text-white text-sm font-semibold hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2"
              >
                <FiCheckCircle size={14} /> I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateNow;