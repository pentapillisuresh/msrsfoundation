import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiFileText, FiEye, FiCheckCircle, FiArrowRight,
  FiShield, FiAward, FiStar, FiTrendingUp, FiUsers, FiGlobe,
  FiCalendar, FiClock, FiLock, FiCreditCard, FiHome, FiBriefcase, FiX
} from 'react-icons/fi';
import { FaRegFilePdf, FaRegFileAlt, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VerificationPopup from '../../pages/VerificationPopup';

const StatutoryCertificates = () => {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [selectedCertData, setSelectedCertData] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [userData, setUserData] = useState(null);

  // Check if user is already verified from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('msrs_verified_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData(user);
      setIsVerified(true);
      // Don't show popup if already verified
    } else {
      // Only check for popup trigger if user is NOT verified
      if (location.state?.showVerification) {
        setShowVerificationPopup(true);
      }
    }
  }, [location.state]);

  // Indian states and districts data
  const indiaData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
  };

  const governmentApprovals = [
    { title: "Ministry of Corporate Affairs", description: "Section 8 Registration", status: "Approved", date: "2020", ref: "U85300AP2020NPL123456" },
    { title: "CSR-1 Registration", description: "Mandatory for CSR funds", status: "Active", date: "2021", ref: "CSR00012345" },
    { title: "Income Tax - 12A", description: "Tax exemption for NGO", status: "Registered", date: "2020", ref: "12A/2020-21/1234" },
    { title: "Income Tax - 80G", description: "Donor tax benefit", status: "Certified", date: "2020", ref: "80G/2020-21/5678" },
    { title: "NITI Aayog Darpan", description: "Government NGO registration", status: "Registered", date: "2020", ref: "AP/2020/0123456" },
    { title: "FCRA", description: "For international funding", status: "Applied", date: "2024", ref: "Pending" }
  ];

  const certificatesData = [
    { title: "Certificate of Incorporation", description: "Section 8 Company Registration", date: "2020", size: "245 KB", category: "Legal", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" },
    { title: "CSR Registration Certificate", description: "Ministry of Corporate Affairs", date: "2021", size: "189 KB", category: "CSR", imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { title: "12A Registration Certificate", description: "Income Tax Department", date: "2020", size: "156 KB", category: "Tax", imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80" },
    { title: "80G Registration Certificate", description: "Income Tax Department", date: "2020", size: "178 KB", category: "Tax", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" },
    { title: "NITI Aayog Registration", description: "Government of India", date: "2020", size: "134 KB", category: "Government", imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { title: "PAN Card", description: "Permanent Account Number", date: "2020", size: "98 KB", category: "Legal", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" },
    { title: "TAN Registration", description: "Tax Deduction Account Number", date: "2020", size: "112 KB", category: "Tax", imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { title: "GST Registration", description: "Goods and Services Tax", date: "2020", size: "145 KB", category: "Legal", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" },
    { title: "MSME Registration", description: "Micro, Small & Medium Enterprises", date: "2021", size: "167 KB", category: "Government", imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { title: "DARPAN Registration", description: "NGO Darpan Portal", date: "2020", size: "123 KB", category: "Government", imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" }
  ];

  const stats = [
    { number: "12+", label: "Certifications", icon: <FaCertificate />, delay: 100 },
    { number: "100%", label: "Compliant", icon: <FiCheckCircle />, delay: 200 },
    { number: "6+", label: "Govt Approvals", icon: <FiShield />, delay: 300 },
    { number: "5+", label: "Tax Benefits", icon: <FiAward />, delay: 400 }
  ];

  const handleViewCertificate = (cert) => {
    if (isVerified && userData) {
      // If already verified, show certificate directly
      setSelectedCertData({ ...cert, userData });
      setShowModal(true);
    } else {
      // Show verification popup first
      setSelectedCertData(cert);
      setShowVerificationPopup(true);
    }
  };

  const handleVerificationSuccess = (userInfo) => {
    setUserData(userInfo);
    setIsVerified(true);
    setShowVerificationPopup(false);
    
    // If we have a selected certificate, show it
    if (selectedCertData) {
      setSelectedCertData({ ...selectedCertData, userData: userInfo });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCertData(null);
  };

  const closeVerificationPopup = () => {
    setShowVerificationPopup(false);
    setSelectedCertData(null);
  };

  // Function to clear user data (for testing - can be removed in production)
  const clearUserData = () => {
    localStorage.removeItem('msrs_verified_user');
    setIsVerified(false);
    setUserData(null);
    alert('User data cleared. You will need to verify again.');
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

          .approval-card, .cert-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border: 1px solid #EAF6E3;
          }
          
          .approval-card:hover, .cert-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.12);
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
          
          .status-badge {
            position: relative;
            overflow: hidden;
          }
          
          .status-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .status-badge:hover::before {
            left: 100%;
          }

          .certificate-watermark {
            position: relative;
            overflow: hidden;
          }

          .certificate-watermark::before {
            content: "VERIFIED";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 80px;
            font-weight: bold;
            color: rgba(102, 122, 98, 0.1);
            white-space: nowrap;
            pointer-events: none;
            z-index: 10;
          }

          .disable-select {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        `}
      </style>

      {/* --- PREMIUM BANNER SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Statutory Certificates Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              VERIFIED & REGISTERED
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Statutory Certificates
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Verified. Registered. Trusted. - Access our official certifications including CSR-1, 
            MCA registration, and other statutory documents.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#2C3E2B] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card text-center group" data-aos="zoom-in" data-aos-delay={stat.delay}>
                <div className="text-white/40 text-3xl mb-3 flex justify-center group-hover:text-white transition-colors duration-500">
                  {stat.icon}
                </div>
                <div className="font-sans text-white text-3xl md:text-4xl font-bold tracking-tight mb-1">{stat.number}</div>
                <div className="text-[#8A9A87] uppercase tracking-[0.2em] text-[9px] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOVERNMENT APPROVALS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              GOVERNMENT RECOGNITION
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              Government of India Approvals
            </h2>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              Our foundation is registered and approved by various government bodies for transparency and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentApprovals.map((approval, index) => (
              <div 
                key={index} 
                className="approval-card bg-white p-5"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                      <FaShieldAlt className="text-[#667A62] text-lg" />
                    </div>
                    <h3 className="font-serif font-bold text-[#2C3E2B] text-base">{approval.title}</h3>
                  </div>
                  <div className="status-badge">
                    <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold ${
                      approval.status === 'Approved' || approval.status === 'Active' || approval.status === 'Registered' || approval.status === 'Certified'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {approval.status}
                    </span>
                  </div>
                </div>
                <p className="text-[#4A5C46] text-xs mb-3">{approval.description}</p>
                <div className="flex justify-between text-[9px] text-gray-400 mt-3 pt-2 border-t border-[#EAF6E3]">
                  <span>📅 Since {approval.date}</span>
                  <span>📄 Ref: {approval.ref}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ALL CERTIFICATES SECTION --- */}
      <section className="py-24 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              LEGAL DOCUMENTS
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              All Certificates & Documents
            </h2>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              Click on View to see the certificate image
            </p>
            {isVerified && (
              <div className="mt-4 inline-block bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                ✓ Verified User: {userData?.name}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {certificatesData.map((cert, index) => (
              <div 
                key={index} 
                className="cert-card bg-white p-4"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                      <FaRegFilePdf className="text-[#667A62] text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C3E2B] text-sm">{cert.title}</h4>
                      <p className="text-[9px] text-gray-500">{cert.description}</p>
                      <div className="flex gap-2 mt-0.5">
                        <span className="text-[8px] text-gray-400">📅 {cert.date}</span>
                        <span className="text-[8px] text-gray-400">📄 {cert.size}</span>
                        <span className="text-[8px] text-[#667A62]">{cert.category}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleViewCertificate(cert)}
                    className="px-3 py-1.5 bg-[#667A62] text-white text-[10px] font-semibold hover:bg-[#4A5C46] transition-all flex items-center gap-1"
                  >
                    <FiEye size={12} /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPLIANCE SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
                OUR COMMITMENT
              </span>
              <div className="w-16 h-0.5 bg-[#667A62] mb-5"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mb-4">
                Transparent & Compliant
              </h2>
              <p className="text-[#4A5C46] text-sm leading-relaxed mb-6">
                MSRS Foundation maintains the highest standards of transparency and regulatory compliance. 
                All our statutory registrations and certificates are regularly updated and available for public verification.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">100% Compliant with Government Regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Regular Audits & Reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Transparent Financial Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Donor Tax Benefits Under 80G</span>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="stagger-border">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                  alt="Compliance"
                  className="w-full h-[350px] object-cover"
                />
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
                Need More Information?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                For any queries regarding our certifications or compliance, feel free to contact us.
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
              <Link 
                to="/about"
                className="px-5 py-2.5 border border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[#2C3E2B] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATE MODAL --- */}
      {showModal && selectedCertData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#2C3E2B] p-4 text-white sticky top-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-xl" />
                  <div>
                    <h3 className="font-serif text-lg font-bold">Certificate Image</h3>
                    <p className="text-[10px] text-white/70">{selectedCertData?.title}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="w-7 h-7 bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                  <FiX size={14} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Certificate Image with Security Features */}
              <div className="certificate-watermark disable-select relative bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-[#667A62]">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#667A62]"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#667A62]"></div>
                </div>
                
                <div className="bg-[#667A62] text-white p-3 text-center">
                  <h2 className="font-serif text-xl font-bold">MSRS FOUNDATION</h2>
                  <p className="text-[9px] text-white/80">Certificate of Verification</p>
                </div>
                
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1903/1903664.png" 
                      alt="Seal" 
                      className="w-16 h-16 mx-auto opacity-80"
                    />
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3">This is to certify that</p>
                  
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B] mb-2 border-b-2 border-[#667A62] inline-block pb-1">
                    {selectedCertData.userData?.name || userData?.name || 'Verified User'}
                  </h3>
                  
                  <p className="text-gray-600 text-xs mt-4 mb-3">has successfully verified the following document:</p>
                  
                  <div className="bg-white p-3 mb-4 shadow-sm border border-gray-200">
                    <p className="font-bold text-[#667A62] text-sm">{selectedCertData?.title}</p>
                    <p className="text-[10px] text-gray-500">{selectedCertData?.description}</p>
                  </div>
                  
                  <div className="my-4 border border-gray-200 overflow-hidden">
                    <img 
                      src={selectedCertData?.imageUrl}
                      alt={selectedCertData?.title}
                      className="w-full h-auto object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-[10px] text-left mt-4 p-3 bg-gray-50">
                    <div>
                      <span className="text-gray-500">Certificate Number:</span>
                      <p className="font-semibold text-[9px]">{Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date of Issue:</span>
                      <p className="font-semibold text-[9px]">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold text-[9px]">
                        {selectedCertData.userData?.isIndian 
                          ? `${selectedCertData.userData?.state}, ${selectedCertData.userData?.district}, India`
                          : selectedCertData.userData?.countryName || 'India'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <p className="font-semibold text-[9px]">{selectedCertData.userData?.email || userData?.email}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-[8px] text-gray-500">
                      QR Code
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-4">
                    <p className="text-center text-[8px] text-gray-400">
                      This is a digitally verified certificate. For verification, scan the QR code.
                    </p>
                    <p className="text-center text-[8px] text-gray-400 mt-0.5">
                      *Screenshots are disabled for security purposes*
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#2C3E2B] text-white p-2 text-center text-[8px]">
                  <p>Authorized Signature</p>
                  <p className="mt-0.5">MSRS Foundation - Government Registered</p>
                </div>
              </div>
              
              <div className="mt-5">
                <button
                  onClick={closeModal}
                  className="w-full py-2 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition flex items-center justify-center gap-2"
                >
                  <FiX size={12} /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- VERIFICATION POPUP --- */}
      {showVerificationPopup && !isVerified && (
        <VerificationPopup 
          onClose={closeVerificationPopup}
          onSuccess={handleVerificationSuccess}
          isOpen={showVerificationPopup}
        />
      )}
    </div>
  );
};

export default StatutoryCertificates;