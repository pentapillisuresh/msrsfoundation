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
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
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

  const stats = [
    { number: "14+", label: "Reports", icon: <FaFileInvoice />, delay: 100 },
    { number: "100%", label: "Audited", icon: <FiCheckCircle />, delay: 200 },
    { number: "4+", label: "Years", icon: <FiCalendar />, delay: 300 },
    { number: "100%", label: "Transparent", icon: <FiShield />, delay: 400 }
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
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .banner-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.02em; }
          .section-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.01em; }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .hero-bg {
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
          
          .report-card, .stat-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .report-card:hover, .stat-card:hover {
            transform: translateY(-8px);
          }
          
          .tab-active {
            background: linear-gradient(135deg, #667A62 0%, #2C3E2B 100%);
            color: white;
          }
          
          .tab-inactive {
            background: #EAF6E3;
            color: #2C3E2B;
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
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
            .tab-button { font-size: 0.8rem !important; padding: 0.5rem 1rem !important; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Transparency & Accountability
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Reports Dashboard
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Access our comprehensive monthly, quarterly, half-yearly, and yearly reports
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

      {/* Tab Navigation */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`tab-button px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'monthly' ? 'tab-active' : 'tab-inactive hover:bg-[#667A62] hover:text-white'
              }`}
            >
              <FiCalendar size={18} />
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('quarterly')}
              className={`tab-button px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'quarterly' ? 'tab-active' : 'tab-inactive hover:bg-[#667A62] hover:text-white'
              }`}
            >
              <FiTrendingUp size={18} />
              Quarterly
            </button>
            <button
              onClick={() => setActiveTab('halfYearly')}
              className={`tab-button px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'halfYearly' ? 'tab-active' : 'tab-inactive hover:bg-[#667A62] hover:text-white'
              }`}
            >
              <FiPieChart size={18} />
              Half-Yearly
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={`tab-button px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'yearly' ? 'tab-active' : 'tab-inactive hover:bg-[#667A62] hover:text-white'
              }`}
            >
              <FaChartLine size={18} />
              Yearly
            </button>
          </div>
          
          {/* Verification Status Badge */}
          {isVerified && (
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                ✓ Verified User: {userData?.name}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-12 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              {getTabTitle()}
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              {getTabDescription()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentReports.map((report, index) => (
              <div 
                key={index} 
                className="report-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center">
                    <FiFileText className="text-[#667A62] text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2C3E2B] text-lg">{report.title}</h3>
                    <p className="text-xs text-gray-500">{report.period}</p>
                    <p className="text-sm text-gray-600 mt-2">{report.description}</p>
                  </div>
                </div>
                
                <div className="bg-[#EAF6E3] rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-[#667A62] mb-2">Key Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {report.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleViewReport(report, activeTab)}
                  className="w-full px-4 py-2 bg-[#667A62] text-white rounded-lg hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <FiEye size={16} /> View Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Our Commitment
              </span>
              <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-4">
                Commitment to Transparency
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-6"></div>
              <p className="text-[#4A5C46] leading-relaxed mb-6">
                We believe in complete transparency and accountability. All our financial records 
                and activity reports are regularly updated and made available for public access.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Regular Monthly Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Quarterly Performance Reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Half-Yearly Impact Assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#667A62]" />
                  <span className="text-sm text-[#4A5C46]">Annual Comprehensive Reports</span>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-5 -right-5 w-full h-full bg-[#EAF6E3] rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                alt="Transparency"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in">
            <FiShield className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Need More Information?
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              For detailed queries or to request specific reports, please contact our documentation team.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all">
                Contact Us <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Report Modal */}
      {showModal && selectedReport && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#667A62] to-[#4A5C46] p-4 text-white sticky top-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FiFileText className="text-2xl" />
                  <div>
                    <h3 className="text-lg font-bold">
                      {selectedReport.type === 'monthly' ? 'Monthly Report' : 
                       selectedReport.type === 'quarterly' ? 'Quarterly Report' :
                       selectedReport.type === 'halfYearly' ? 'Half-Yearly Report' : 'Yearly Report'}
                    </h3>
                    <p className="text-xs opacity-90">{selectedReport.title}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <FiX size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="report-watermark disable-select relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl overflow-hidden shadow-2xl border-4 border-[#667A62]">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-[#667A62]"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-[#667A62]"></div>
                </div>
                
                <div className="bg-[#667A62] text-white p-4 text-center">
                  <h2 className="text-2xl font-bold">MSRS FOUNDATION</h2>
                  <p className="text-sm opacity-90">{selectedReport.title}</p>
                </div>
                
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1903/1903664.png" 
                      alt="Seal" 
                      className="w-20 h-20 mx-auto opacity-80"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-4">This report is verified for</p>
                  
                  <h3 className="text-2xl font-bold text-[#2C3E2B] mb-2 border-b-2 border-[#667A62] inline-block pb-2">
                    {selectedReport.userData?.name || userData?.name || 'Verified User'}
                  </h3>
                  
                  <p className="text-gray-600 mt-6 mb-4">Report Details:</p>
                  
                  <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
                    <p className="font-bold text-[#667A62] text-lg">{selectedReport.title}</p>
                    <p className="text-sm text-gray-500">{selectedReport.description}</p>
                    <p className="text-xs text-gray-400 mt-2">Period: {selectedReport.period}</p>
                  </div>
                  
                  <div className="my-6 border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={selectedReport.imageUrl}
                      alt={selectedReport.title}
                      className="w-full h-auto object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-left mt-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="text-gray-500">Report Number:</span>
                      <p className="font-semibold text-xs">{Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date of Issue:</span>
                      <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold text-sm">
                        {selectedReport.userData?.isIndian 
                          ? `${selectedReport.userData?.state}, ${selectedReport.userData?.district}, India`
                          : selectedReport.userData?.countryName || 'India'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <p className="font-semibold text-xs">{selectedReport.userData?.email || userData?.email}</p>
                    </div>
                  </div>
                  
                  {selectedReport.highlights && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs font-semibold text-blue-700 mb-2">Key Highlights:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {selectedReport.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 flex justify-center">
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                      QR Code
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <p className="text-center text-xs text-gray-400">
                      This is a digitally verified report. For verification, scan the QR code.
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

      {/* Verification Popup */}
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