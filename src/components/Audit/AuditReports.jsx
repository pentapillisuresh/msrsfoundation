import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiFileText, FiEye, FiCheckCircle, FiArrowRight, FiShield, 
  FiAward, FiCalendar, FiDownload, FiX, FiTrendingUp, FiPieChart
} from 'react-icons/fi';
import { FaRegFilePdf, FaCertificate, FaShieldAlt, FaChartLine, FaFileInvoice } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VerificationPopup from '../../pages/VerificationPopup';

const AuditReports = () => {
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
  const [selectedReport, setSelectedReport] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('monthly');

  // Check if user is already verified from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('msrs_verified_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData(user);
      setIsVerified(true);
    } else {
      if (location.state?.showVerification) {
        setShowVerificationPopup(true);
      }
    }
  }, [location.state]);

  // Monthly Reports Data
  const monthlyReports = [
    {
      id: 1,
      period: "January 2024",
      title: "Monthly Financial Report - January",
      description: "Detailed financial activities for January 2024",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      highlights: ["Revenue: ₹50L", "Expenses: ₹35L", "Surplus: ₹15L"]
    },
    {
      id: 2,
      period: "February 2024",
      title: "Monthly Financial Report - February",
      description: "Detailed financial activities for February 2024",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      highlights: ["Revenue: ₹55L", "Expenses: ₹38L", "Surplus: ₹17L"]
    },
    {
      id: 3,
      period: "March 2024",
      title: "Monthly Financial Report - March",
      description: "Detailed financial activities for March 2024",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      highlights: ["Revenue: ₹60L", "Expenses: ₹40L", "Surplus: ₹20L"]
    },
    {
      id: 4,
      period: "April 2024",
      title: "Monthly Financial Report - April",
      description: "Detailed financial activities for April 2024",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      highlights: ["Revenue: ₹52L", "Expenses: ₹36L", "Surplus: ₹16L"]
    }
  ];

  // Quarterly Reports Data
  const quarterlyReports = [
    {
      id: 1,
      period: "Q1 2024 (Jan-Mar)",
      title: "Quarterly Performance Report - Q1",
      description: "Comprehensive performance analysis for first quarter",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      highlights: ["Projects: 12", "Beneficiaries: 1200", "Fund Utilization: 85%"]
    },
    {
      id: 2,
      period: "Q2 2024 (Apr-Jun)",
      title: "Quarterly Performance Report - Q2",
      description: "Comprehensive performance analysis for second quarter",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      highlights: ["Projects: 15", "Beneficiaries: 1500", "Fund Utilization: 88%"]
    },
    {
      id: 3,
      period: "Q3 2024 (Jul-Sep)",
      title: "Quarterly Performance Report - Q3",
      description: "Comprehensive performance analysis for third quarter",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      highlights: ["Projects: 18", "Beneficiaries: 1800", "Fund Utilization: 90%"]
    },
    {
      id: 4,
      period: "Q4 2024 (Oct-Dec)",
      title: "Quarterly Performance Report - Q4",
      description: "Comprehensive performance analysis for fourth quarter",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      highlights: ["Projects: 20", "Beneficiaries: 2000", "Fund Utilization: 92%"]
    }
  ];

  // Half-Yearly Reports Data
  const halfYearlyReports = [
    {
      id: 1,
      period: "H1 2024 (Jan-Jun)",
      title: "Half-Yearly Progress Report - H1",
      description: "Mid-year performance and impact assessment",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      highlights: ["Total Projects: 27", "Total Beneficiaries: 2700", "Funds Utilized: ₹2.5Cr"]
    },
    {
      id: 2,
      period: "H2 2024 (Jul-Dec)",
      title: "Half-Yearly Progress Report - H2",
      description: "Year-end performance and impact assessment",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      highlights: ["Total Projects: 38", "Total Beneficiaries: 3800", "Funds Utilized: ₹3.2Cr"]
    }
  ];

  // Yearly Reports Data
  const yearlyReports = [
    {
      id: 1,
      period: "2023-24",
      title: "Annual Comprehensive Report",
      description: "Complete annual report with financials and impact",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      highlights: ["Total Projects: 65", "Total Beneficiaries: 6500", "Total Funds: ₹5.7Cr", "CSR Partners: 25+"]
    },
    {
      id: 2,
      period: "2022-23",
      title: "Annual Activity Report",
      description: "Yearly achievements and financial summary",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      highlights: ["Total Projects: 55", "Total Beneficiaries: 5500", "Total Funds: ₹4.8Cr", "CSR Partners: 20+"]
    },
    {
      id: 3,
      period: "2021-22",
      title: "Annual Impact Report",
      description: "Measuring our impact on communities",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      highlights: ["Total Projects: 45", "Total Beneficiaries: 4500", "Total Funds: ₹4.0Cr", "CSR Partners: 18+"]
    },
    {
      id: 4,
      period: "2020-21",
      title: "Foundation Year Report",
      description: "Inaugural year achievements and milestones",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      highlights: ["Total Projects: 35", "Total Beneficiaries: 3500", "Total Funds: ₹3.2Cr", "CSR Partners: 15+"]
    }
  ];


  const handleViewReport = (report, type) => {
    if (isVerified && userData) {
      setSelectedReport({ ...report, type, userData });
      setShowModal(true);
    } else {
      setSelectedReport({ ...report, type });
      setShowVerificationPopup(true);
    }
  };

  const handleVerificationSuccess = (userInfo) => {
    setUserData(userInfo);
    setIsVerified(true);
    setShowVerificationPopup(false);
    
    if (selectedReport) {
      setSelectedReport({ ...selectedReport, userData: userInfo });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };

  const closeVerificationPopup = () => {
    setShowVerificationPopup(false);
    setSelectedReport(null);
  };

  // Get current reports based on active tab
  const getCurrentReports = () => {
    switch(activeTab) {
      case 'monthly': return monthlyReports;
      case 'quarterly': return quarterlyReports;
      case 'halfYearly': return halfYearlyReports;
      case 'yearly': return yearlyReports;
      default: return monthlyReports;
    }
  };

  // Get tab title
  const getTabTitle = () => {
    switch(activeTab) {
      case 'monthly': return 'Monthly Reports';
      case 'quarterly': return 'Quarterly Reports';
      case 'halfYearly': return 'Half-Yearly Reports';
      case 'yearly': return 'Yearly Reports';
      default: return 'Monthly Reports';
    }
  };

  // Get tab description
  const getTabDescription = () => {
    switch(activeTab) {
      case 'monthly': return 'Detailed monthly financial and activity reports';
      case 'quarterly': return 'Comprehensive quarterly performance analysis';
      case 'halfYearly': return 'Mid-year and year-end progress assessments';
      case 'yearly': return 'Annual comprehensive reports with financials and impact';
      default: return 'Detailed monthly financial and activity reports';
    }
  };

  const currentReports = getCurrentReports();

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

          .report-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border: 1px solid #EAF6E3;
          }
          
          .report-card:hover {
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
          
          .tab-button {
            transition: all 0.3s ease;
          }
          
          .tab-active {
            background: #667A62;
            color: white;
          }
          
          .tab-inactive {
            background: white;
            color: #4A5C46;
            border: 1px solid #EAF6E3;
          }
          
          .tab-inactive:hover {
            background: #EAF6E3;
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
          
          .report-watermark {
            position: relative;
            overflow: hidden;
          }
          
          .report-watermark::before {
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

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Audit Reports Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              TRANSPARENCY & ACCOUNTABILITY
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Reports Dashboard
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Access our comprehensive monthly, quarterly, half-yearly, and yearly reports
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

    

      {/* --- TAB NAVIGATION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`tab-button px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'monthly' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <FiCalendar size={14} />
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('quarterly')}
              className={`tab-button px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'quarterly' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <FiTrendingUp size={14} />
              Quarterly
            </button>
            <button
              onClick={() => setActiveTab('halfYearly')}
              className={`tab-button px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'halfYearly' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <FiPieChart size={14} />
              Half-Yearly
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={`tab-button px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'yearly' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              <FaChartLine size={14} />
              Yearly
            </button>
          </div>
          
          {/* Verification Status Badge */}
          {isVerified && (
            <div className="text-center">
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                ✓ Verified User: {userData?.name}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- REPORTS SECTION --- */}
      <section className="py-12 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mb-3">
              {getTabTitle()}
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              {getTabDescription()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentReports.map((report, index) => (
              <div 
                key={index} 
                className="report-card bg-white p-5 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center flex-shrink-0">
                    <FiFileText className="text-[#667A62] text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2C3E2B] text-sm">{report.title}</h3>
                    <p className="text-[9px] text-gray-500">{report.period}</p>
                    <p className="text-[10px] text-gray-600 mt-1">{report.description}</p>
                  </div>
                </div>
                
                <div className="bg-[#F7F9F5] p-2 mb-3 flex-1">
                  <p className="text-[9px] font-semibold text-[#667A62] mb-1">Key Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {report.highlights.map((highlight, i) => (
                      <span key={i} className="text-[8px] bg-white px-1.5 py-0.5 text-gray-600">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleViewReport(report, activeTab)}
                  className="w-full px-3 py-1.5 bg-[#667A62] text-white text-[10px] font-semibold hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-1"
                >
                  <FiEye size={12} /> View Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSPARENCY SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
                OUR COMMITMENT
              </span>
              <div className="w-16 h-0.5 bg-[#667A62] mb-5"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mb-4">
                Commitment to Transparency
              </h2>
              <p className="text-[#4A5C46] text-sm leading-relaxed mb-6">
                We believe in complete transparency and accountability. All our financial records 
                and activity reports are regularly updated and made available for public access.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Regular Monthly Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Quarterly Performance Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Half-Yearly Impact Assessments</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#667A62] text-sm" />
                  <span className="text-xs text-[#4A5C46]">Annual Comprehensive Reports</span>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="stagger-border">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="Transparency"
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
                For detailed queries or to request specific reports, please contact our documentation team.
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

      {/* --- REPORT MODAL --- */}
      {showModal && selectedReport && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#2C3E2B] p-4 text-white sticky top-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FiFileText className="text-xl" />
                  <div>
                    <h3 className="font-serif text-base font-bold">
                      {selectedReport.type === 'monthly' ? 'Monthly Report' : 
                       selectedReport.type === 'quarterly' ? 'Quarterly Report' :
                       selectedReport.type === 'halfYearly' ? 'Half-Yearly Report' : 'Yearly Report'}
                    </h3>
                    <p className="text-[9px] text-white/70">{selectedReport.title}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="w-7 h-7 bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                  <FiX size={14} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="report-watermark disable-select relative bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-[#667A62]">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#667A62]"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#667A62]"></div>
                </div>
                
                <div className="bg-[#667A62] text-white p-3 text-center">
                  <h2 className="font-serif text-xl font-bold">MSRS FOUNDATION</h2>
                  <p className="text-[9px] text-white/80">{selectedReport.title}</p>
                </div>
                
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1903/1903664.png" 
                      alt="Seal" 
                      className="w-16 h-16 mx-auto opacity-80"
                    />
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3">This report is verified for</p>
                  
                  <h3 className="font-serif text-xl font-bold text-[#2C3E2B] mb-2 border-b-2 border-[#667A62] inline-block pb-1">
                    {selectedReport.userData?.name || userData?.name || 'Verified User'}
                  </h3>
                  
                  <p className="text-gray-600 text-xs mt-4 mb-3">Report Details:</p>
                  
                  <div className="bg-white p-3 mb-4 shadow-sm border border-gray-200">
                    <p className="font-bold text-[#667A62] text-sm">{selectedReport.title}</p>
                    <p className="text-[9px] text-gray-500">{selectedReport.description}</p>
                    <p className="text-[8px] text-gray-400 mt-1">Period: {selectedReport.period}</p>
                  </div>
                  
                  <div className="my-4 border border-gray-200 overflow-hidden">
                    <img 
                      src={selectedReport.imageUrl}
                      alt={selectedReport.title}
                      className="w-full h-auto object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs text-left mt-4 p-3 bg-gray-50">
                    <div>
                      <span className="text-gray-500">Report Number:</span>
                      <p className="font-semibold text-[9px]">{Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date of Issue:</span>
                      <p className="font-semibold text-[9px]">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold text-[9px]">
                        {selectedReport.userData?.isIndian 
                          ? `${selectedReport.userData?.state}, ${selectedReport.userData?.district}, India`
                          : selectedReport.userData?.countryName || 'India'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <p className="font-semibold text-[9px]">{selectedReport.userData?.email || userData?.email}</p>
                    </div>
                  </div>
                  
                  {selectedReport.highlights && (
                    <div className="mt-3 p-2 bg-blue-50">
                      <p className="text-[8px] font-semibold text-blue-700 mb-1">Key Highlights:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {selectedReport.highlights.map((highlight, i) => (
                          <span key={i} className="text-[7px] bg-white px-1.5 py-0.5 text-gray-600">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-center">
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-[7px] text-gray-500">
                      QR Code
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-4">
                    <p className="text-center text-[7px] text-gray-400">
                      This is a digitally verified report. For verification, scan the QR code.
                    </p>
                    <p className="text-center text-[7px] text-gray-400 mt-0.5">
                      *Screenshots are disabled for security purposes*
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#2C3E2B] text-white p-2 text-center text-[7px]">
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

export default AuditReports;