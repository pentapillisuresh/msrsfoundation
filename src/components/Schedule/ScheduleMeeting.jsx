import React, { useState, useEffect } from 'react';
import PageHeader from '../Common/PageHeader';
import Button from '../Common/Button';
import { 
  FiCalendar, FiClock, FiMapPin, FiUsers, FiHeart, FiArrowRight, FiX, 
  FiCheckCircle, FiBriefcase, FiMail, FiPhone, FiUser, FiFileText, 
  FiGlobe, FiDollarSign, FiTarget, FiMessageSquare, FiSend, FiAward,
  FiShield, FiStar, FiTrendingUp, FiHome, FiBookOpen,FiRefreshCw,FiVideo
} from 'react-icons/fi';
import { FaBuilding, FaHandsHelping, FaRegSmile, FaChartLine, FaRegCalendarAlt,   } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScheduleMeeting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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
    { value: 'online', label: 'Online (Zoom / Google Meet)', icon: <FiVideo />  },
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
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    }
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
      // Reset form after submission
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    // Optionally reset form here
    // setFormData(initialState);
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .form-input {
            transition: all 0.3s ease;
          }
          
          .form-input:focus {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 122, 98, 0.1);
          }
          
          .interest-chip {
            transition: all 0.3s ease;
          }
          
          .interest-chip:hover {
            transform: translateY(-2px);
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
          }
          
          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
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
          
          .section-card {
            transition: all 0.4s ease;
          }
          
          .section-card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Schedule Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E2B]/95 to-[#667A62]/85"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <FiBriefcase className="text-[#667A62]" />
              <span className="text-sm font-semibold text-white">Corporate Social Responsibility</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 heading-font">
              Schedule a Meeting
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Let's Build Impact Together. Schedule a discussion with our team to explore CSR collaborations, 
              funding opportunities, and project alignment.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-8" data-aos="fade-down">
         <div className="flex items-center justify-between">
  {['Company Details', 'Contact Info', 'CSR Interests', 'Funding Intent', 'Schedule', 'Confirm'].map((step, idx) => (
    
    <React.Fragment key={idx}>
      
      {/* Step Circle */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-10 h-10 bg-white border-2 border-[#667A62] rounded-full flex items-center justify-center text-[#667A62] font-bold shadow-md">
          {idx + 1}
        </div>
        <span className="text-xs text-gray-600 mt-2 hidden md:block text-center">
          {step}
        </span>
      </div>

      {/* Line (except last item) */}
      {idx !== 5 && (
        <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
      )}

    </React.Fragment>
  ))}
</div>
            <div className="relative mt-2">
              {/* <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 rounded-full"></div> */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#667A62] rounded-full transition-all duration-500"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Section 1: Company Details */}
            <div className="section-card p-8 border-b border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Company Details</h3>
                  <p className="text-sm text-gray-500">Basic information about your organization</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.companyName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">CIN Number</label>
                  <input
                    type="text"
                    name="cinNumber"
                    value={formData.cinNumber}
                    onChange={handleChange}
                    className="form-input w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    placeholder="Enter CIN number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Industry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="industryType"
                    value={formData.industryType}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.industryType ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                  >
                    <option value="">Select Industry Type</option>
                    {industryTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.industryType && <p className="text-red-500 text-xs mt-1">{errors.industryType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    placeholder="https://www.example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    CSR Registration Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="csrNumber"
                    value={formData.csrNumber}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.csrNumber ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter CSR registration number"
                  />
                  {errors.csrNumber && <p className="text-red-500 text-xs mt-1">{errors.csrNumber}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    PAN Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.panNumber ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter PAN number"
                  />
                  {errors.panNumber && <p className="text-red-500 text-xs mt-1">{errors.panNumber}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Contact Person Details */}
            <div className="section-card p-8 border-b border-gray-100 bg-gray-50" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FiUser className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Contact Person Details</h3>
                  <p className="text-sm text-gray-500">Information about the primary contact person</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.contactName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter full name"
                  />
                  {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.designation ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter your designation"
                  />
                  {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Official Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter official email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Office Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="officeAddress"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    rows="2"
                    className={`form-input w-full p-3 border ${errors.officeAddress ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter complete office address"
                  />
                  {errors.officeAddress && <p className="text-red-500 text-xs mt-1">{errors.officeAddress}</p>}
                </div>
              </div>
            </div>

            {/* Section 3: CSR Interest Details */}
            <div className="section-card p-8 border-b border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FaHandsHelping className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">CSR Interest Details</h3>
                  <p className="text-sm text-gray-500">Select the areas you wish to support</p>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#2C3E2B] mb-3">
                  Area of CSR Interest <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {csrInterestsList.map((interest, idx) => (
                    <label key={idx} className="interest-chip flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-[#667A62] transition-all">
                      <input
                        type="checkbox"
                        value={interest.name}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62]"
                      />
                      <div className={`w-8 h-8 ${interest.color} rounded-full flex items-center justify-center`}>
                        {interest.icon}
                      </div>
                      <span className="text-sm font-medium text-[#2C3E2B]">{interest.name}</span>
                    </label>
                  ))}
                </div>
                {errors.csrInterests && <p className="text-red-500 text-xs mt-2">{errors.csrInterests}</p>}
              </div>
            </div>

            {/* Section 4: Funding Intent */}
            <div className="section-card p-8 border-b border-gray-100 bg-gray-50" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FiDollarSign className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Funding Intent</h3>
                  <p className="text-sm text-gray-500">Details about your funding and project preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Proposed CSR Budget (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="proposedBudget"
                    value={formData.proposedBudget}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.proposedBudget ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter proposed budget"
                  />
                  {errors.proposedBudget && <p className="text-red-500 text-xs mt-1">{errors.proposedBudget}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Preferred Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.projectType ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Preferred Project Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.projectLocation ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Enter preferred location"
                  />
                  {errors.projectLocation && <p className="text-red-500 text-xs mt-1">{errors.projectLocation}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Timeline for CSR Activity <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.timeline ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                  >
                    <option value="">Select Timeline</option>
                    {timelines.map((timeline, idx) => (
                      <option key={idx} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                </div>
              </div>
            </div>

            {/* Section 5: Meeting Schedule */}
            <div className="section-card p-8 border-b border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FiCalendar className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Meeting Schedule</h3>
                  <p className="text-sm text-gray-500">Select your preferred meeting date and time</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Preferred Meeting Mode <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
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
                        <div className={`p-3 border-2 rounded-xl text-center transition-all ${formData.meetingMode === mode.value ? 'border-[#667A62] bg-[#EAF6E3]' : 'border-gray-200 hover:border-[#667A62]'}`}>
                          <span className="text-2xl block mb-1">{mode.icon}</span>
                          <span className="text-xs font-medium">{mode.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.meetingMode && <p className="text-red-500 text-xs mt-1">{errors.meetingMode}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                  />
                  {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`form-input w-full p-3 border ${errors.preferredTime ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                  />
                  {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">Alternate Date & Time</label>
                  <input
                    type="text"
                    name="alternateDateTime"
                    value={formData.alternateDateTime}
                    onChange={handleChange}
                    className="form-input w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    placeholder="e.g., July 25, 2024 at 3:00 PM"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Additional Information */}
            <div className="section-card p-8 border-b border-gray-100 bg-gray-50" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] rounded-xl flex items-center justify-center">
                  <FiMessageSquare className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E2B]">Additional Information</h3>
                  <p className="text-sm text-gray-500">Share more details about your expectations</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    Purpose of Meeting <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    rows="3"
                    className={`form-input w-full p-3 border ${errors.purpose ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]`}
                    placeholder="Please describe the purpose of this meeting"
                  />
                  {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">Specific Requirements / Expectations</label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    rows="3"
                    className="form-input w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    placeholder="Any specific requirements or expectations from the meeting"
                  />
                </div>
              </div>
            </div>

            {/* Section 7: Declaration */}
            <div className="section-card p-8 border-b border-gray-100" data-aos="fade-up">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-[#667A62] focus:ring-[#667A62] mt-0.5"
                />
                <span className="text-sm text-gray-700">
                  We confirm that the above information is accurate and we are interested in collaborating with 
                  Maha Shree Rudra Samsthanam Foundation under CSR initiatives.
                </span>
              </label>
              {errors.declaration && <p className="text-red-500 text-xs mt-2">{errors.declaration}</p>}
            </div>

            {/* Submit Button */}
            <div className="p-8 bg-gradient-to-r from-[#667A62]/5 to-[#2C3E2B]/5">
              <Button type="submit" variant="primary" fullWidth size="lg" className="btn-glow">
                <FiSend className="inline mr-2" /> Schedule CSR Meeting
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4">
                We'll get back to you within 24 hours to confirm the meeting schedule
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content bg-white rounded-2xl max-w-md w-full mx-4 p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="success-checkmark mb-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FiCheckCircle className="text-green-500 text-5xl" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-[#2C3E2B] mb-2">Meeting Request Submitted!</h2>
            
            <div className="bg-[#EAF6E3] rounded-xl p-4 mb-4">
              <p className="text-[#667A62] font-semibold mb-2">✨ We'll Contact You Within 24 Hours ✨</p>
              <p className="text-sm text-gray-600">
                Our team will review your request and reach out to confirm the meeting schedule.
              </p>
            </div>
            
            <div className="text-left space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="text-[#667A62]" />
                <span className="text-gray-600">Confirmation email will be sent to: <strong>{formData.email}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiPhone className="text-[#667A62]" />
                <span className="text-gray-600">We'll call you on: <strong>{formData.mobile}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiCalendar className="text-[#667A62]" />
                <span className="text-gray-600">Meeting requested for: <strong>{formData.preferredDate} at {formData.preferredTime}</strong></span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-blue-700">
                <strong>📋 What happens next?</strong><br />
                1. Our team reviews your request (within 2-4 hours)<br />
                2. We'll send a calendar invite with meeting link<br />
                3. A confirmation call will be scheduled
              </p>
            </div>
            
            <button
              onClick={closePopup}
              className="w-full py-3 bg-gradient-to-r from-[#667A62] to-[#2C3E2B] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FiCheckCircle size={18} /> Got it, Thank You!
            </button>
          </div>
        </div>
      )}

      {/* Additional CSS for animations */}
      <style>{`
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default ScheduleMeeting;