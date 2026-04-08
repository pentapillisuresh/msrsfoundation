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
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
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
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .banner-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.02em; }
          .section-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.01em; }
          
          .cert-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .cert-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80');
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
          
          .approval-card, .cert-card, .stat-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .approval-card:hover, .cert-card:hover, .stat-card:hover {
            transform: translateY(-8px);
          }
          
          .stat-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
          
          .stat-card .stat-icon {
            transition: all 0.4s ease;
          }
          
          .stat-card:hover .stat-icon {
            transform: scale(1.1);
          }
          
          .btn-premium {
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          
          .btn-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-premium:hover::before { left: 100%; }
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(5px);
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
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="cert-bg" />
        <div className="cert-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Verified & Registered
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Statutory Certificates
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Verified. Registered. Trusted. - Access our official certifications including CSR-1, MCA registration, and other statutory documents.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2C3E2B]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center" data-aos="zoom-in" data-aos-delay={stat.delay}>
                <div className="stat-icon text-4xl text-[#667A62] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#EAF6E3] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Approvals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Government Recognition
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Government of India Approvals
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              Our foundation is registered and approved by various government bodies for transparency and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentApprovals.map((approval, index) => (
              <div 
                key={index} 
                className="approval-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl p-6 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#667A62]/10 flex items-center justify-center">
                      <FaShieldAlt className="text-[#667A62] text-xl" />
                    </div>
                    <h3 className="font-bold text-[#2C3E2B] text-lg">{approval.title}</h3>
                  </div>
                  <div className="status-badge">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      approval.status === 'Approved' || approval.status === 'Active' || approval.status === 'Registered' || approval.status === 'Certified'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {approval.status}
                    </span>
                  </div>
                </div>
                <p className="text-[#4A5C46] text-sm mb-3">{approval.description}</p>
                <div className="flex justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-[#EAF6E3]">
                  <span>📅 Since {approval.date}</span>
                  <span>📄 Ref: {approval.ref}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Certificates Section - View Only */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Legal Documents
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              All Certificates & Documents
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              Click on View to see the certificate image
            </p>
            {/* Optional: Show verification status */}
            {isVerified && (
              <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                ✓ Verified User: {userData?.name}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificatesData.map((cert, index) => (
              <div 
                key={index} 
                className="cert-card bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center">
                      <FaRegFilePdf className="text-[#667A62] text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C3E2B]">{cert.title}</h4>
                      <p className="text-xs text-gray-500">{cert.description}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-xs text-gray-400">📅 {cert.date}</span>
                        <span className="text-xs text-gray-400">📄 {cert.size}</span>
                        <span className="text-xs text-[#667A62]">{cert.category}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleViewCertificate(cert)}
                    className="px-4 py-2 bg-[#667A62] text-white rounded-lg hover:bg-[#4A5C46] transition-all flex items-center gap-2 text-sm font-semibold"
                  >
                    <FiEye size={16} /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Our Commitment
              </span>
              <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-4">
                Transparent & Compliant
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-6"></div>
              <p className="text-[#4A5C46] leading-relaxed mb-6">
                MSRS Foundation maintains the highest standards of transparency and regulatory compliance. 
                All our statutory registrations and certificates are regularly updated and available for public verification.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">100% Compliant with Government Regulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Regular Audits & Reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Transparent Financial Practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Donor Tax Benefits Under 80G</span>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-5 -right-5 w-full h-full bg-[#EAF6E3] rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                alt="Compliance"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FaShieldAlt className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Need More Information?
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              For any queries regarding our certifications or compliance, feel free to contact us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all">
                  Contact Us <FiArrowRight />
                </button>
              </Link>
              <Link to="/about">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] transition-all">
                  Learn More <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {showModal && selectedCertData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#667A62] to-[#4A5C46] p-4 text-white sticky top-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-2xl" />
                  <div>
                    <h3 className="text-lg font-bold">Certificate Image</h3>
                    <p className="text-xs opacity-90">{selectedCertData?.title}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <FiX size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Certificate Image with Security Features */}
              <div className="certificate-watermark disable-select relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl overflow-hidden shadow-2xl border-4 border-[#667A62]">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-[#667A62]"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-[#667A62]"></div>
                </div>
                
                <div className="bg-[#667A62] text-white p-4 text-center">
                  <h2 className="text-2xl font-bold">MSRS FOUNDATION</h2>
                  <p className="text-sm opacity-90">Certificate of Verification</p>
                </div>
                
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1903/1903664.png" 
                      alt="Seal" 
                      className="w-20 h-20 mx-auto opacity-80"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-4">This is to certify that</p>
                  
                  <h3 className="text-2xl font-bold text-[#2C3E2B] mb-2 border-b-2 border-[#667A62] inline-block pb-2">
                    {selectedCertData.userData?.name || userData?.name || 'Verified User'}
                  </h3>
                  
                  <p className="text-gray-600 mt-6 mb-4">has successfully verified the following document:</p>
                  
                  <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
                    <p className="font-bold text-[#667A62] text-lg">{selectedCertData?.title}</p>
                    <p className="text-sm text-gray-500">{selectedCertData?.description}</p>
                  </div>
                  
                  <div className="my-6 border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={selectedCertData?.imageUrl}
                      alt={selectedCertData?.title}
                      className="w-full h-auto object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-left mt-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="text-gray-500">Certificate Number:</span>
                      <p className="font-semibold text-xs">{Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date of Issue:</span>
                      <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold text-sm">
                        {selectedCertData.userData?.isIndian 
                          ? `${selectedCertData.userData?.state}, ${selectedCertData.userData?.district}, India`
                          : selectedCertData.userData?.countryName || 'India'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <p className="font-semibold text-xs">{selectedCertData.userData?.email || userData?.email}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                      QR Code
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <p className="text-center text-xs text-gray-400">
                      This is a digitally verified certificate. For verification, scan the QR code.
                    </p>
                    <p className="text-center text-xs text-gray-400 mt-1">
                      *Screenshots are disabled for security purposes*
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#2C3E2B] text-white p-3 text-center text-xs">
                  <p>Authorized Signature</p>
                  <p className="mt-1">MSRS Foundation - Government Registered</p>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-[#667A62] text-white rounded-lg font-semibold hover:bg-[#4A5C46] transition flex items-center justify-center gap-2"
                >
                  <FiX size={18} /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verification Popup - Only show if not verified */}
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