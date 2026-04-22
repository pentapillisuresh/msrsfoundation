import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUsers, FiClock, FiHeart, FiAward, FiCheckCircle, FiSend, 
  FiUser, FiBriefcase, FiBookOpen, FiTrendingUp, FiArrowRight, 
  FiStar, FiThumbsUp, FiSmile, FiTarget, FiCalendar, FiMapPin,
  FiPlus, FiX, FiEdit2
} from 'react-icons/fi';
import { FaHandsHelping, FaQuoteLeft, FaChalkboardTeacher, FaFemale, FaTree } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VolunteerForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
    address: '', applicationType: '', preferredMode: '',
    areasOfInterest: [], customArea: '', qualification: '', skills: '',
    startDate: '', duration: '', motivation: '', 
    declaration: false, rules: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showCustomAreaInput, setShowCustomAreaInput] = useState(false);
  const [customAreaValue, setCustomAreaValue] = useState('');

  const educationQualifications = [
    { value: "no_formal", label: "No Formal Education" },
    { value: "primary", label: "Primary School (Class 1-5)" },
    { value: "middle", label: "Middle School (Class 6-8)" },
    { value: "high_school", label: "High School (Class 9-10)" },
    { value: "higher_secondary", label: "Higher Secondary (Class 11-12)" },
    { value: "diploma", label: "Diploma / Polytechnic" },
    { value: "iti", label: "ITI / Vocational Training" },
    { value: "bachelor_arts", label: "Bachelor of Arts (BA)" },
    { value: "bachelor_science", label: "Bachelor of Science (BSc)" },
    { value: "bachelor_commerce", label: "Bachelor of Commerce (BCom)" },
    { value: "bachelor_engineering", label: "Bachelor of Engineering (BE/BTech)" },
    { value: "bachelor_technology", label: "Bachelor of Technology (BTech)" },
    { value: "bachelor_education", label: "Bachelor of Education (BEd)" },
    { value: "bachelor_law", label: "Bachelor of Laws (LLB)" },
    { value: "bachelor_pharmacy", label: "Bachelor of Pharmacy (BPharm)" },
    { value: "bachelor_physiotherapy", label: "Bachelor of Physiotherapy (BPT)" },
    { value: "bachelor_architecture", label: "Bachelor of Architecture (BArch)" },
    { value: "bachelor_business", label: "Bachelor of Business Administration (BBA)" },
    { value: "bachelor_computer", label: "Bachelor of Computer Applications (BCA)" },
    { value: "bachelor_social_work", label: "Bachelor of Social Work (BSW)" },
    { value: "master_arts", label: "Master of Arts (MA)" },
    { value: "master_science", label: "Master of Science (MSc)" },
    { value: "master_commerce", label: "Master of Commerce (MCom)" },
    { value: "master_engineering", label: "Master of Engineering (ME/MTech)" },
    { value: "master_business", label: "Master of Business Administration (MBA)" },
    { value: "master_computer", label: "Master of Computer Applications (MCA)" },
    { value: "master_education", label: "Master of Education (MEd)" },
    { value: "master_law", label: "Master of Laws (LLM)" },
    { value: "master_social_work", label: "Master of Social Work (MSW)" },
    { value: "doctoral", label: "Doctoral Degree (PhD)" },
    { value: "post_doctoral", label: "Post-Doctoral Fellowship" },
    { value: "certification", label: "Professional Certification" },
    { value: "other", label: "Other Qualification" }
  ];

  const areasList = [
    'Education & Teaching Support',
    'Rural Development Programs',
    'Women Empowerment Initiatives',
    'Health & Awareness Campaigns',
    'Spiritual & Cultural Programs',
    'CSR Project Execution',
    'Digital Media & Content Creation',
    'Fundraising & Partnerships',
    'Administration & Operations'
  ];

  const benefits = [
    { icon: <FaHandsHelping />, title: "Make an Impact", description: "Directly contribute to social change and see the results" },
    { icon: <FiUsers />, title: "Build Network", description: "Connect with like-minded people and expand your network" },
    { icon: <FiAward />, title: "Get Certified", description: "Receive certificate and recognition for your service" },
    { icon: <FiTrendingUp />, title: "Grow Skills", description: "Develop new skills and gain valuable experience" }
  ];

  const testimonials = [
    { name: "Anjali Sharma", role: "Education Volunteer", text: "Volunteering with MSRS Foundation has been life-changing. The smile on children's faces is priceless.", duration: "2 years" },
    { name: "Rahul Verma", role: "Healthcare Volunteer", text: "The organization's transparency and impact measurement is exceptional. Proud to be part of this mission.", duration: "1.5 years" },
    { name: "Priya Mehta", role: "Intern", text: "The internship program gave me real-world experience and mentorship. Highly recommended!", duration: "6 months" }
  ];



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'declaration' || name === 'rules') {
        setFormData({ ...formData, [name]: checked });
      } else if (name === 'areasOfInterest') {
        const areas = [...formData.areasOfInterest];
        if (checked) areas.push(value);
        else {
          const index = areas.indexOf(value);
          if (index > -1) areas.splice(index, 1);
        }
        setFormData({ ...formData, areasOfInterest: areas });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCustomAreaAdd = () => {
    if (customAreaValue.trim() && !formData.areasOfInterest.includes(customAreaValue.trim())) {
      setFormData({
        ...formData,
        areasOfInterest: [...formData.areasOfInterest, customAreaValue.trim()]
      });
      setCustomAreaValue('');
      setShowCustomAreaInput(false);
    }
  };

  const handleRemoveArea = (areaToRemove) => {
    setFormData({
      ...formData,
      areasOfInterest: formData.areasOfInterest.filter(area => area !== areaToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.areasOfInterest.length === 0) {
      alert('Please select at least one area of interest');
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Volunteer Application:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      setFormData({
        fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
        address: '', applicationType: '', preferredMode: '',
        areasOfInterest: [], customArea: '', qualification: '', skills: '',
        startDate: '', duration: '', motivation: '', 
        declaration: false, rules: false
      });
      setCustomAreaValue('');
      setShowCustomAreaInput(false);
    }, 1500);
  };

  return (
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .premium-gradient-text {
            background: linear-gradient(to right, #2C3E2B, #667A62, #8A9A87);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .benefit-card, .testimonial-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .benefit-card:hover, .testimonial-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.12);
          }
          
          .benefit-card:hover .icon-wrapper {
            background-color: #667A62;
          }
          
          .benefit-card:hover .icon-wrapper svg {
            color: white;
          }
          
          .stat-card {
            transition: all 0.4s ease;
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
          
          .stat-card .stat-icon {
            transition: all 0.4s ease;
          }
          
          .stat-card:hover .stat-icon {
            transform: scale(1.1) rotate(5deg);
          }
          
          .form-input {
            transition: all 0.3s ease;
            border: 1px solid #E5E7EB;
          }
          
          .form-input:focus {
            outline: none;
            border-color: #667A62;
            box-shadow: 0 0 0 3px rgba(102, 122, 98, 0.1);
          }
          
          .interest-tag {
            transition: all 0.3s ease;
          }
          
          .interest-tag:hover {
            transform: translateX(3px);
          }
          
          .stagger-border {
            position: relative;
          }
          .stagger-border::after {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: -20px;
            bottom: -20px;
            border: 2px solid #667A62;
            z-index: -1;
            transition: all 0.5s ease;
          }
          .stagger-border:hover::after {
            top: 10px;
            left: 10px;
            right: -10px;
            bottom: -10px;
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
            50% { transform: translateY(-15px); }
          }
          
          .btn-submit {
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          
          .btn-submit::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-submit:hover::before {
            left: 100%;
          }
          
          .success-message {
            animation: slideIn 0.5s ease forwards;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Volunteer Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              BE THE CHANGE
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4" data-aos="fade-up" data-aos-delay="200">
            Join Our Mission
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Your Time. Their Future. - Engage with us through volunteering and internships
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <a href="#application-form" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md">
              Apply Now <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

     

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT SIDE - Content */}
            <div className="space-y-8">
              <div data-aos="fade-right">
                <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
                  WHY VOLUNTEER WITH US
                </span>
                <div className="w-16 h-0.5 bg-[#667A62] mb-5"></div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mb-4 leading-tight">
                  Make a Real Difference
                </h2>
                <p className="text-[#4A5C46] text-sm leading-relaxed">
                  Join our passionate community of volunteers and contribute to meaningful social change. 
                  Your skills, time, and energy can transform lives and communities.
                </p>
              </div>

              {/* Benefits - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-5">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="benefit-card bg-white p-4 shadow-sm border border-[#EAF6E3]"
                    data-aos="fade-right"
                    data-aos-delay={idx * 100}
                  >
                    <div className="icon-wrapper w-10 h-10 bg-[#EAF6E3] flex items-center justify-center mb-3 transition-colors duration-300">
                      <div className="text-lg text-[#667A62] transition-colors duration-300">{benefit.icon}</div>
                    </div>
                    <h3 className="font-bold text-[#2C3E2B] text-sm mb-1">{benefit.title}</h3>
                    <p className="text-[#4A5C46] text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div data-aos="fade-right" data-aos-delay="200">
                <h3 className="font-bold text-[#2C3E2B] text-base mb-4 flex items-center gap-2">
                  <FiStar className="text-[#667A62]" size={14} /> What Volunteers Say
                </h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="testimonial-card bg-white p-4 border border-[#EAF6E3] relative">
                      <FaQuoteLeft className="absolute text-[#EAF6E3] text-2xl opacity-50" style={{ bottom: 10, right: 10 }} />
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#667A62] flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2C3E2B] text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-[#667A62]">{testimonial.role} • {testimonial.duration}</p>
                        </div>
                      </div>
                      <p className="text-[#4A5C46] text-xs italic leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Numbers */}
              <div className="bg-white p-4 border border-[#EAF6E3]" data-aos="fade-right" data-aos-delay="300">
                <h3 className="font-bold text-[#2C3E2B] text-sm mb-3 flex items-center gap-2">
                  <FiTarget className="text-[#667A62]" size={14} /> Our Impact
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#667A62]">50+</div>
                    <div className="text-xs text-[#4A5C46]">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#667A62]">15</div>
                    <div className="text-xs text-[#4A5C46]">States</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#667A62]">10K+</div>
                    <div className="text-xs text-[#4A5C46]">Lives</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Application Form */}
            <div id="application-form" data-aos="fade-left">
              <div className="bg-white p-6 shadow-lg border border-[#EAF6E3]">
                <div className="text-center mb-5">
                  <span className="inline-block px-4 py-1 mb-2 text-[9px] font-bold tracking-[0.2em] text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                    Start Your Journey
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2C3E2B]">Apply Now</h3>
                  <p className="text-[#4A5C46] text-xs mt-1">Fill out the form to begin your journey</p>
                  <div className="w-12 h-0.5 bg-[#667A62] mx-auto mt-3"></div>
                </div>

                {submitSuccess && (
                  <div className="success-message mb-4 p-3 bg-green-50 border-l-4 border-green-500 flex items-center gap-2">
                    <FiCheckCircle className="text-green-500 text-base" />
                    <div>
                      <p className="text-green-800 font-semibold text-xs">Application Submitted!</p>
                      <p className="text-green-600 text-xs">We'll contact you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiUser size={12} className="text-[#667A62]" /> Personal Info
                    </h4>
                    <div className="space-y-3">
                      <input type="text" name="fullName" placeholder="Full Name *" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.fullName} />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="date" name="dateOfBirth" required className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.dateOfBirth} />
                        <select name="gender" className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.gender}>
                          <option value="">Gender *</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <input type="tel" name="phone" placeholder="Phone Number *" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.phone} />
                      <input type="email" name="email" placeholder="Email Address *" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.email} />
                      <input type="text" name="address" placeholder="Address *" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.address} />
                    </div>
                  </div>

                  {/* Application Type */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiBriefcase size={12} className="text-[#667A62]" /> Application Type
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <select name="applicationType" className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.applicationType}>
                        <option value="">Apply As *</option>
                        <option>Volunteer</option>
                        <option>Intern</option>
                      </select>
                      <select name="preferredMode" className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.preferredMode}>
                        <option value="">Mode *</option>
                        <option>On-site</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiTarget size={12} className="text-[#667A62]" /> Areas of Interest
                    </h4>
                    
                    {formData.areasOfInterest.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {formData.areasOfInterest.map((area, idx) => (
                          <span key={idx} className="interest-tag inline-flex items-center gap-1 px-2 py-1 bg-[#EAF6E3] text-[#667A62] rounded text-xs">
                            {area}
                            <button type="button" onClick={() => handleRemoveArea(area)} className="hover:text-red-500">
                              <FiX size={10} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-200 mb-2">
                      {areasList.map((area, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="areasOfInterest" value={area} onChange={handleChange} className="w-3 h-3 text-[#667A62] rounded" />
                          <span className="text-xs text-[#4A5C46]">{area}</span>
                        </label>
                      ))}
                    </div>
                    
                    {!showCustomAreaInput ? (
                      <button
                        type="button"
                        onClick={() => setShowCustomAreaInput(true)}
                        className="w-full mt-2 py-1.5 border border-dashed border-[#667A62] text-[#667A62] text-xs font-semibold hover:bg-[#EAF6E3] transition-all flex items-center justify-center gap-1"
                      >
                        <FiPlus size={10} /> Add Custom Area
                      </button>
                    ) : (
                      <div className="mt-2 flex gap-2">
                        <input
                          type="text"
                          value={customAreaValue}
                          onChange={(e) => setCustomAreaValue(e.target.value)}
                          placeholder="Enter your custom area..."
                          className="flex-1 form-input px-3 py-1.5 bg-gray-50 text-sm"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={handleCustomAreaAdd}
                          className="px-3 py-1.5 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition-all"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowCustomAreaInput(false);
                            setCustomAreaValue('');
                          }}
                          className="px-3 py-1.5 border border-gray-300 text-xs font-semibold hover:bg-gray-100 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Skills & Qualification */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiBookOpen size={12} className="text-[#667A62]" /> Skills & Qualification
                    </h4>
                    <div className="space-y-3">
                      <select name="qualification" className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.qualification}>
                        <option value="">Educational Qualification *</option>
                        {educationQualifications.map((qual, idx) => (
                          <option key={idx} value={qual.value}>{qual.label}</option>
                        ))}
                      </select>
                      <textarea name="skills" placeholder="Relevant Skills * (e.g., Communication, Leadership, Teaching, etc.)" rows="2" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.skills}></textarea>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiCalendar size={12} className="text-[#667A62]" /> Availability
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="date" name="startDate" required className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.startDate} />
                      <select name="duration" className="form-input px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.duration}>
                        <option value="">Duration *</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                        <option>6 Months</option>
                        <option>6+ Months</option>
                        <option>1 Year</option>
                        <option>2+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiHeart size={12} className="text-[#667A62]" /> Motivation
                    </h4>
                    <textarea name="motivation" placeholder="Why do you want to join us? *" rows="2" required className="form-input w-full px-3 py-2 bg-gray-50 text-sm" onChange={handleChange} value={formData.motivation}></textarea>
                  </div>

                  {/* Declaration */}
                  <div className="mb-5 p-3 bg-[#EAF6E3]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="declaration" onChange={handleChange} className="w-3 h-3 rounded text-[#667A62]" />
                      <span className="text-[10px] text-[#4A5C46]">I hereby declare that the information provided is true and correct and I agree to abide by the rules and values of the Foundation.</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-submit w-full py-2.5 bg-[#667A62] text-white font-semibold text-sm hover:bg-[#4A5C46] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Submitting... <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                    ) : (
                      <>Submit Application <FiSend size={12} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Join our team of dedicated volunteers and be part of something meaningful.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <a 
                href="#application-form"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                Apply Now 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerForm;