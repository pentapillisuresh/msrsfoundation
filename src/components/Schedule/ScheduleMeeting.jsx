import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, FiClock, FiMapPin, FiUsers, FiHeart, FiArrowRight, FiX, 
  FiCheckCircle, FiBriefcase, FiMail, FiPhone, FiUser, FiFileText, 
  FiGlobe, FiDollarSign, FiTarget, FiMessageSquare, FiSend, FiAward,
  FiShield, FiStar, FiTrendingUp, FiHome, FiBookOpen, FiRefreshCw, FiVideo,
  FiPlus
} from 'react-icons/fi';
import { FaBuilding, FaHandsHelping, FaRegSmile, FaChartLine, FaRegCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScheduleMeeting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInterest, setOtherInterest] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    cinNumber: '',
    industryType: '',
    website: '',
    csrNumber: '',
    panNumber: '',
    contactName: '',
    designation: '',
    email: '',
    mobile: '',
    officeAddress: '',
    csrInterests: [],
    proposedBudget: '',
    projectType: '',
    projectLocation: '',
    timeline: '',
    meetingMode: '',
    preferredDate: '',
    preferredTime: '',
    alternateDateTime: '',
    purpose: '',
    expectations: '',
    declaration: false
  });

  const [errors, setErrors] = useState({});

  const csrInterestsList = [
    { name: 'Education Development', icon: <FiBookOpen />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Healthcare & Medical Support', icon: <FiHeart />, color: 'bg-red-100 text-red-600' },
    { name: 'Rural Development', icon: <FaBuilding />, color: 'bg-green-100 text-green-600' },
    { name: 'Women Empowerment', icon: <FiUsers />, color: 'bg-pink-100 text-pink-600' },
    { name: 'Environmental Sustainability', icon: <FiGlobe />, color: 'bg-teal-100 text-teal-600' },
    { name: 'Skill Development', icon: <FiTrendingUp />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Disaster Relief', icon: <FiShield />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Spiritual & Cultural Programs', icon: <FiStar />, color: 'bg-indigo-100 text-indigo-600' }
  ];

  const industryTypes = [
    'Banking & Finance', 'Information Technology', 'Manufacturing', 
    'Healthcare', 'Education', 'Real Estate', 'Retail', 'Telecom',
    'Energy & Power', 'Infrastructure', 'Pharmaceuticals', 'Other'
  ];

  const projectTypes = [
    'Ongoing Projects Collaboration',
    'New Project Partnership',
    'Sponsorship-Based Initiative',
    'Impact Investment',
    'Employee Engagement Program'
  ];

  const timelines = [
    'Immediate (0–3 Months)',
    'Short Term (3–6 Months)',
    'Medium Term (6–12 Months)',
    'Long Term (1-3 Years)',
    'Ongoing Partnership'
  ];

  const meetingModes = [
    { value: 'online', label: 'Online (Zoom / Google Meet)', icon: <FiVideo /> },
    { value: 'offline', label: 'Offline (Visit Our Office)', icon: <FiHome /> },
    { value: 'hybrid', label: 'Hybrid (Both Options)', icon: <FiRefreshCw /> }
  ];



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'declaration') {
        setFormData({ ...formData, declaration: checked });
      } else {
        const interests = [...formData.csrInterests];
        if (checked) {
          interests.push(value);
        } else {
          const index = interests.indexOf(value);
          if (index > -1) interests.splice(index, 1);
        }
        setFormData({ ...formData, csrInterests: interests });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const handleAddOtherInterest = () => {
    if (otherInterest.trim() && !formData.csrInterests.includes(otherInterest.trim())) {
      setFormData({
        ...formData,
        csrInterests: [...formData.csrInterests, otherInterest.trim()]
      });
      setOtherInterest('');
      setShowOtherInput(false);
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    setFormData({
      ...formData,
      csrInterests: formData.csrInterests.filter(interest => interest !== interestToRemove)
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.industryType) newErrors.industryType = 'Industry type is required';
    if (!formData.csrNumber) newErrors.csrNumber = 'CSR registration number is required';
    if (!formData.panNumber) newErrors.panNumber = 'PAN number is required';
    if (!formData.contactName) newErrors.contactName = 'Contact person name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!formData.officeAddress) newErrors.officeAddress = 'Office address is required';
    if (formData.csrInterests.length === 0) newErrors.csrInterests = 'Please select at least one CSR interest';
    if (!formData.proposedBudget) newErrors.proposedBudget = 'Proposed budget is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.projectLocation) newErrors.projectLocation = 'Project location is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData.meetingMode) newErrors.meetingMode = 'Meeting mode is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.purpose) newErrors.purpose = 'Purpose of meeting is required';
    if (!formData.declaration) newErrors.declaration = 'Please accept the declaration';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowSuccessPopup(true);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .form-input {
            transition: all 0.3s ease;
            border: 1px solid #E5E7EB;
          }
          
          .form-input:focus {
            outline: none;
            border-color: #667A62;
            box-shadow: 0 0 0 3px rgba(102, 122, 98, 0.1);
          }
          
          .interest-chip {
            transition: all 0.3s ease;
          }
          
          .interest-chip:hover {
            transform: translateY(-2px);
          }
          
          .section-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border-bottom: 1px solid #EAF6E3;
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
          
          .success-checkmark {
            animation: checkmark 0.5s ease-in-out forwards;
          }
          
          @keyframes checkmark {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); opacity: 1; }
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .btn-glow:hover {
            box-shadow: 0 0 25px rgba(102, 122, 98, 0.5);
          }
          
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }
          
          .selected-interest-tag {
            transition: all 0.3s ease;
          }
          
          .selected-interest-tag:hover {
            transform: translateX(3px);
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Schedule Meeting Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
              <FiBriefcase className="text-[#667A62] text-sm" />
              <span className="text-[10px] font-semibold text-white tracking-wider">Corporate Social Responsibility</span>
            </div>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Schedule a Meeting
          </h1>
          <div className="flex justify-center gap-2 mb-5" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-0.5 bg-[#667A62]"></div>
            <div className="w-6 h-0.5 bg-[#667A62]"></div>
            <div className="w-3 h-0.5 bg-[#667A62]"></div>
          </div>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Let's Build Impact Together. Schedule a discussion with our team to explore CSR collaborations, 
            funding opportunities, and project alignment.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

    

      {/* --- FORM SECTION --- */}
      <section className="py-16 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-10" data-aos="fade-down">
            <div className="flex items-center justify-between">
              {['Company Details', 'Contact Info', 'CSR Interests', 'Funding Intent', 'Schedule', 'Confirm'].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-9 h-9 bg-white border-2 border-[#667A62] flex items-center justify-center text-[#667A62] font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-[9px] text-gray-500 mt-1 hidden md:block text-center">
                      {step}
                    </span>
                  </div>
                  {idx !== 5 && (
                    <div className="flex-1 h-px bg-gray-300 mx-1"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-[#EAF6E3] overflow-hidden">
            {/* Section 1: Company Details */}
            <div className="section-card p-6" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FaBuilding className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">Company Details</h3>
                  <p className="text-[10px] text-gray-500">Basic information about your organization</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.companyName ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-[9px] mt-1">{errors.companyName}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">CIN Number</label>
                  <input
                    type="text"
                    name="cinNumber"
                    value={formData.cinNumber}
                    onChange={handleChange}
                    className="form-input w-full p-2.5 text-sm border-gray-200"
                    placeholder="Enter CIN number"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Industry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="industryType"
                    value={formData.industryType}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.industryType ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select Industry Type</option>
                    {industryTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.industryType && <p className="text-red-500 text-[9px] mt-1">{errors.industryType}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input w-full p-2.5 text-sm border-gray-200"
                    placeholder="https://www.example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    CSR Registration Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="csrNumber"
                    value={formData.csrNumber}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.csrNumber ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter CSR registration number"
                  />
                  {errors.csrNumber && <p className="text-red-500 text-[9px] mt-1">{errors.csrNumber}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    PAN Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.panNumber ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter PAN number"
                  />
                  {errors.panNumber && <p className="text-red-500 text-[9px] mt-1">{errors.panNumber}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Contact Person Details */}
            <div className="section-card p-6 bg-[#FCFDFB]" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FiUser className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">Contact Person Details</h3>
                  <p className="text-[10px] text-gray-500">Information about the primary contact person</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.contactName ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter full name"
                  />
                  {errors.contactName && <p className="text-red-500 text-[9px] mt-1">{errors.contactName}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.designation ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your designation"
                  />
                  {errors.designation && <p className="text-red-500 text-[9px] mt-1">{errors.designation}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Official Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter official email"
                  />
                  {errors.email && <p className="text-red-500 text-[9px] mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.mobile ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-[9px] mt-1">{errors.mobile}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Office Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="officeAddress"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    rows="2"
                    className={`form-input w-full p-2.5 text-sm ${errors.officeAddress ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter complete office address"
                  />
                  {errors.officeAddress && <p className="text-red-500 text-[9px] mt-1">{errors.officeAddress}</p>}
                </div>
              </div>
            </div>

            {/* Section 3: CSR Interest Details - WITH OTHER OPTION */}
            <div className="section-card p-6" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FaHandsHelping className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">CSR Interest Details</h3>
                  <p className="text-[10px] text-gray-500">Select the areas you wish to support</p>
                </div>
              </div>
              
              {/* Selected Interests Display */}
              {formData.csrInterests.length > 0 && (
                <div className="mb-4">
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-2 uppercase tracking-wider">Selected Interests:</label>
                  <div className="flex flex-wrap gap-2">
                    {formData.csrInterests.map((interest, idx) => (
                      <span key={idx} className="selected-interest-tag inline-flex items-center gap-1 px-2 py-1 bg-[#EAF6E3] text-[#667A62] rounded text-[10px]">
                        {interest}
                        <button type="button" onClick={() => handleRemoveInterest(interest)} className="hover:text-red-500 ml-1">
                          <FiX size={10} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-2 uppercase tracking-wider">
                  Area of CSR Interest <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {csrInterestsList.map((interest, idx) => (
                    <label key={idx} className="interest-chip flex items-center gap-2 p-2 border border-gray-200 cursor-pointer hover:border-[#667A62] transition-all">
                      <input
                        type="checkbox"
                        value={interest.name}
                        checked={formData.csrInterests.includes(interest.name)}
                        onChange={handleChange}
                        className="w-3.5 h-3.5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62]"
                      />
                      <div className={`w-7 h-7 ${interest.color} rounded-full flex items-center justify-center text-sm`}>
                        {interest.icon}
                      </div>
                      <span className="text-[11px] font-medium text-[#2C3E2B]">{interest.name}</span>
                    </label>
                  ))}
                  
                  {/* Other Option - Checkbox */}
                  <label className="interest-chip flex items-center gap-2 p-2 border border-gray-200 cursor-pointer hover:border-[#667A62] transition-all">
                    <input
                      type="checkbox"
                      checked={showOtherInput}
                      onChange={(e) => {
                        setShowOtherInput(e.target.checked);
                        if (!e.target.checked) {
                          setOtherInterest('');
                        }
                      }}
                      className="w-3.5 h-3.5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62]"
                    />
                    <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                      <FiPlus className="text-gray-500" />
                    </div>
                    <span className="text-[11px] font-medium text-[#2C3E2B]">Other (Please specify)</span>
                  </label>
                </div>
                
                {/* Other Interest Input Field */}
                {showOtherInput && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={otherInterest}
                      onChange={(e) => setOtherInterest(e.target.value)}
                      placeholder="Enter your specific area of interest..."
                      className="flex-1 form-input p-2 text-sm border-gray-200"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={handleAddOtherInterest}
                      className="px-3 py-1.5 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition-all"
                    >
                      Add
                    </button>
                  </div>
                )}
                
                {errors.csrInterests && <p className="text-red-500 text-[9px] mt-2">{errors.csrInterests}</p>}
              </div>
            </div>

            {/* Section 4: Funding Intent */}
            <div className="section-card p-6 bg-[#FCFDFB]" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FiDollarSign className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">Funding Intent</h3>
                  <p className="text-[10px] text-gray-500">Details about your funding and project preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Proposed CSR Budget (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="proposedBudget"
                    value={formData.proposedBudget}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.proposedBudget ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter proposed budget"
                  />
                  {errors.proposedBudget && <p className="text-red-500 text-[9px] mt-1">{errors.proposedBudget}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Preferred Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.projectType ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-500 text-[9px] mt-1">{errors.projectType}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Preferred Project Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.projectLocation ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter preferred location"
                  />
                  {errors.projectLocation && <p className="text-red-500 text-[9px] mt-1">{errors.projectLocation}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Timeline for CSR Activity <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.timeline ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select Timeline</option>
                    {timelines.map((timeline, idx) => (
                      <option key={idx} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {errors.timeline && <p className="text-red-500 text-[9px] mt-1">{errors.timeline}</p>}
                </div>
              </div>
            </div>

            {/* Section 5: Meeting Schedule */}
            <div className="section-card p-6" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FiCalendar className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">Meeting Schedule</h3>
                  <p className="text-[10px] text-gray-500">Select your preferred meeting date and time</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-2 uppercase tracking-wider">
                    Preferred Meeting Mode <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {meetingModes.map((mode, idx) => (
                      <label key={idx} className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="meetingMode"
                          value={mode.value}
                          checked={formData.meetingMode === mode.value}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`p-2 border text-center transition-all ${formData.meetingMode === mode.value ? 'border-[#667A62] bg-[#EAF6E3]' : 'border-gray-200 hover:border-[#667A62]'}`}>
                          <span className="text-lg block mb-0.5">{mode.icon}</span>
                          <span className="text-[8px] font-medium">{mode.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.meetingMode && <p className="text-red-500 text-[9px] mt-1">{errors.meetingMode}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`form-input w-full p-2.5 text-sm ${errors.preferredDate ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.preferredDate && <p className="text-red-500 text-[9px] mt-1">{errors.preferredDate}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`form-input w-full p-2.5 text-sm ${errors.preferredTime ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.preferredTime && <p className="text-red-500 text-[9px] mt-1">{errors.preferredTime}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">Alternate Date & Time</label>
                  <input
                    type="text"
                    name="alternateDateTime"
                    value={formData.alternateDateTime}
                    onChange={handleChange}
                    className="form-input w-full p-2.5 text-sm border-gray-200"
                    placeholder="e.g., July 25, 2024 at 3:00 PM"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Additional Information */}
            <div className="section-card p-6 bg-[#FCFDFB]" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                  <FiMessageSquare className="text-[#667A62] text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B]">Additional Information</h3>
                  <p className="text-[10px] text-gray-500">Share more details about your expectations</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">
                    Purpose of Meeting <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    rows="3"
                    className={`form-input w-full p-2.5 text-sm ${errors.purpose ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Please describe the purpose of this meeting"
                  />
                  {errors.purpose && <p className="text-red-500 text-[9px] mt-1">{errors.purpose}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-semibold text-[#2C3E2B] mb-1 uppercase tracking-wider">Specific Requirements / Expectations</label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    rows="2"
                    className="form-input w-full p-2.5 text-sm border-gray-200"
                    placeholder="Any specific requirements or expectations from the meeting"
                  />
                </div>
              </div>
            </div>

            {/* Section 7: Declaration */}
            <div className="section-card p-6" data-aos="fade-up">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62] mt-0.5"
                />
                <span className="text-[10px] text-gray-600">
                  We confirm that the above information is accurate and we are interested in collaborating with 
                  Maha Shree Rudra Samsthanam Foundation under CSR initiatives.
                </span>
              </label>
              {errors.declaration && <p className="text-red-500 text-[9px] mt-2">{errors.declaration}</p>}
            </div>

            {/* Submit Button */}
            <div className="p-6 bg-[#F7F9F5]">
              <button type="submit" className="w-full py-3 bg-[#667A62] text-white font-semibold text-sm hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2 btn-glow">
                <FiSend size={14} /> Schedule CSR Meeting
              </button>
              <p className="text-center text-[9px] text-gray-400 mt-3">
                We'll get back to you within 24 hours to confirm the meeting schedule
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Need Help With Your CSR Strategy?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Our team is here to assist you with any questions about CSR partnerships and funding opportunities.
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

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content bg-white max-w-md w-full mx-4 p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="success-checkmark mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FiCheckCircle className="text-green-500 text-3xl" />
              </div>
            </div>
            
            <h2 className="font-serif text-xl font-bold text-[#2C3E2B] mb-2">Meeting Request Submitted!</h2>
            
            <div className="bg-[#F7F9F5] p-3 mb-4">
              <p className="text-[#667A62] font-semibold text-sm mb-1">✨ We'll Contact You Within 24 Hours ✨</p>
              <p className="text-[10px] text-gray-500">
                Our team will review your request and reach out to confirm the meeting schedule.
              </p>
            </div>
            
            <div className="text-left space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[11px]">
                <FiMail className="text-[#667A62] text-sm" />
                <span className="text-gray-500">Confirmation email will be sent to: <strong>{formData.email}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <FiPhone className="text-[#667A62] text-sm" />
                <span className="text-gray-500">We'll call you on: <strong>{formData.mobile}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <FiCalendar className="text-[#667A62] text-sm" />
                <span className="text-gray-500">Meeting requested for: <strong>{formData.preferredDate} at {formData.preferredTime}</strong></span>
              </div>
            </div>
            
            <button
              onClick={closePopup}
              className="w-full py-2.5 bg-[#667A62] text-white text-sm font-semibold hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2"
            >
              <FiCheckCircle size={14} /> Got it, Thank You!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleMeeting;