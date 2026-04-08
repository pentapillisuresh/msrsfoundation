import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUsers, FiClock, FiHeart, FiAward, FiCheckCircle, FiSend, 
  FiUser, FiBriefcase, FiBookOpen, FiTrendingUp, FiArrowRight, 
  FiStar, FiThumbsUp, FiSmile, FiTarget, FiCalendar, FiMapPin
} from 'react-icons/fi';
import { FaHandsHelping, FaQuoteLeft, FaChalkboardTeacher, FaFemale, FaTree } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VolunteerForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
    address: '', applicationType: '', preferredMode: '',
    areasOfInterest: [], qualification: '', skills: '',
    startDate: '', duration: '', motivation: '', 
    declaration: false, rules: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const areasList = [
    'Education & Teaching Support', 'Rural Development Programs', 'Women Empowerment Initiatives',
    'Health & Awareness Campaigns', 'CSR Project Execution', 'Digital Media & Content Creation'
  ];

  const benefits = [
    { icon: <FaHandsHelping />, title: "Make an Impact", description: "Directly contribute to social change and see the results" },
    { icon: <FiUsers />, title: "Build Network", description: "Connect with like-minded people and expand your network" },
    { icon: <FiAward />, title: "Get Certified", description: "Receive certificate and recognition for your service" },
    { icon: <FiTrendingUp />, title: "Grow Skills", description: "Develop new skills and gain valuable experience" }
  ];

  const testimonials = [
    { name: "Anjali Sharma", role: "Education Volunteer", text: "Volunteering with MSRS Foundation has been life-changing. The smile on children's faces is priceless.", duration: "2 years" },
    { name: "Rahul Verma", role: "Healthcare Volunteer", text: "The organization's transparency and impact measurement is exceptional. Proud to be part of this mission.", duration: "1.5 years" }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Volunteer Application:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      setFormData({
        fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
        address: '', applicationType: '', preferredMode: '',
        areasOfInterest: [], qualification: '', skills: '',
        startDate: '', duration: '', motivation: '', 
        declaration: false, rules: false
      });
    }, 1500);
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .banner-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.02em; }
          .section-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.01em; }
          
          .volunteer-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .volunteer-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://img.freepik.com/free-photo/helping-hands-volunteer-support-community-service-graphic_53876-64955.jpg?t=st=1775642459~exp=1775646059~hmac=7461e9d2ff28a789a1acac89f54cf6db29096ef68abe1e26c539ec6f82bbf43c&w=1060');
            background-size: cover;
            background-position: center;
            animation: zoomIn 20s ease-out infinite alternate;
          }
          
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          .banner-content { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .benefit-card, .stat-card, .testimonial-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .benefit-card:hover, .stat-card:hover, .testimonial-card:hover {
            transform: translateY(-5px);
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
          
          .btn-submit:hover::before { left: 100%; }
          
          .success-message { animation: slideIn 0.5s ease forwards; }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="volunteer-bg" />
        <div className="volunteer-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Be the Change
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Join Our Mission
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Your Time. Their Future. - Engage with us through volunteering and internships
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#2C3E2B]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="stat-card text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-3xl text-[#667A62] mb-2 flex justify-center"><FiUsers /></div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs text-[#EAF6E3] font-semibold">Active Volunteers</div>
            </div>
            <div className="stat-card text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-3xl text-[#667A62] mb-2 flex justify-center"><FiClock /></div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-xs text-[#EAF6E3] font-semibold">Hours Donated</div>
            </div>
            <div className="stat-card text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-3xl text-[#667A62] mb-2 flex justify-center"><FiBookOpen /></div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-[#EAF6E3] font-semibold">Interns Trained</div>
            </div>
            <div className="stat-card text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-3xl text-[#667A62] mb-2 flex justify-center"><FiSmile /></div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-[#EAF6E3] font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Left Side + Right Side - Equal Parts */}
      <section className="py-16 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* LEFT SIDE - Content */}
            <div className="space-y-6">
              <div data-aos="fade-right">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
                  Why Volunteer With Us
                </span>
                <h2 className="section-title text-3xl font-bold text-[#2C3E2B] mb-3">
                  Make a Real Difference
                </h2>
                <div className="w-12 h-0.5 bg-[#667A62] mb-4"></div>
                <p className="text-[#4A5C46] text-sm leading-relaxed">
                  Join our passionate community of volunteers and contribute to meaningful social change. 
                  Your skills, time, and energy can transform lives and communities.
                </p>
              </div>

              {/* Benefits - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="benefit-card bg-white rounded-xl p-4 text-center shadow-sm"
                    data-aos="fade-right"
                    data-aos-delay={idx * 100}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EAF6E3] flex items-center justify-center mx-auto mb-3">
                      <div className="text-xl text-[#667A62]">{benefit.icon}</div>
                    </div>
                    <h3 className="font-bold text-[#2C3E2B] text-sm mb-1">{benefit.title}</h3>
                    <p className="text-[#4A5C46] text-xs">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div data-aos="fade-right" data-aos-delay="200">
                <h3 className="font-bold text-[#2C3E2B] text-base mb-3 flex items-center gap-2">
                  <FiStar className="text-[#667A62]" /> What Volunteers Say
                </h3>
                <div className="space-y-3">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="testimonial-card bg-white rounded-xl p-4 relative">
                      <FaQuoteLeft className="absolute text-[#EAF6E3] text-3xl opacity-50" style={{ bottom: 10, right: 10 }} />
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
              <div className="bg-white rounded-xl p-4" data-aos="fade-right" data-aos-delay="300">
                <h3 className="font-bold text-[#2C3E2B] text-sm mb-3 flex items-center gap-2">
                  <FiTarget className="text-[#667A62]" /> Our Impact
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
            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-5">
                  <span className="inline-block px-4 py-1 mb-2 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                    Start Your Journey
                  </span>
                  <h3 className="section-title text-2xl font-bold text-[#2C3E2B]">Apply Now</h3>
                  <p className="text-[#4A5C46] text-xs mt-1">Fill out the form to begin your journey</p>
                </div>

                {submitSuccess && (
                  <div className="success-message mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
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
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiUser size={14} className="text-[#667A62]" /> Personal Info
                    </h4>
                    <div className="space-y-3">
                      <input type="text" name="fullName" placeholder="Full Name *" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="date" name="dateOfBirth" required className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                        <select name="gender" className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}>
                          <option value="">Gender *</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <input type="tel" name="phone" placeholder="Phone Number *" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                      <input type="email" name="email" placeholder="Email Address *" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                      <input type="text" name="address" placeholder="Address *" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                    </div>
                  </div>

                  {/* Application Type */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiBriefcase size={14} className="text-[#667A62]" /> Application Type
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <select name="applicationType" className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}>
                        <option value="">Apply As *</option>
                        <option>Volunteer</option>
                        <option>Intern</option>
                      </select>
                      <select name="preferredMode" className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}>
                        <option value="">Mode *</option>
                        <option>On-site</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiTarget size={14} className="text-[#667A62]" /> Areas of Interest
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {areasList.map((area, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="areasOfInterest" value={area} onChange={handleChange} className="w-3 h-3 text-[#667A62] rounded" />
                          <span className="text-xs text-[#4A5C46]">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Qualification */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiBookOpen size={14} className="text-[#667A62]" /> Skills & Qualification
                    </h4>
                    <div className="space-y-3">
                      <input type="text" name="qualification" placeholder="Educational Qualification *" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                      <textarea name="skills" placeholder="Relevant Skills *" rows="2" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}></textarea>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiCalendar size={14} className="text-[#667A62]" /> Availability
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="date" name="startDate" required className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange} />
                      <select name="duration" className="form-input px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}>
                        <option value="">Duration *</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                        <option>6 Months</option>
                        <option>6+ Months</option>
                      </select>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-[#2C3E2B] mb-3 pb-1 border-b border-[#667A62] flex items-center gap-2">
                      <FiHeart size={14} className="text-[#667A62]" /> Motivation
                    </h4>
                    <textarea name="motivation" placeholder="Why do you want to join us? *" rows="2" required className="form-input w-full px-3 py-2 rounded-lg bg-gray-50 text-sm" onChange={handleChange}></textarea>
                  </div>

                  {/* Declaration */}
               <div className="mb-5 space-y-2 p-3 bg-[#EAF6E3] rounded-lg">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" name="declaration" onChange={handleChange} className="w-3 h-3 rounded text-[#667A62]" />
    <span className="text-xs text-[#4A5C46]">I hereby declare that the information provided is true and correct and I agree to abide by the rules and values of the Foundation.</span>
  </label>
</div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-submit w-full py-2.5 bg-[#667A62] text-white font-semibold rounded-lg hover:bg-[#4A5C46] transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
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

      {/* CTA Section */}
      <section className="py-12 bg-[#2C3E2B]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div data-aos="zoom-in">
            <FaHandsHelping className="text-4xl text-[#667A62] mx-auto mb-3 floating-element" />
            <h2 className="section-title text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Make a Difference?
            </h2>
            <p className="text-[#EAF6E3] text-sm mb-4">
              Join our team of dedicated volunteers and be part of something meaningful.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all text-sm">
              Apply Now <FiArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerForm;