import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFileText, FiEye, FiCheckCircle, FiArrowRight, FiShield, 
  FiAward, FiTrendingUp, FiUsers, FiGlobe, FiCalendar, 
  FiClock, FiLock, FiCreditCard, FiHome, FiBriefcase, FiX,
  FiPieChart, FiBarChart2, FiDollarSign, FiBookOpen, FiHeart
} from 'react-icons/fi';
import { 
  FaRegFilePdf, FaCertificate, FaShieldAlt, FaChartLine, 
  FaBalanceScale, FaHandHoldingHeart, FaUniversity, FaRegBuilding,
  FaChartPie, FaFileInvoice, FaGavel, FaHandsHelping
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ComplianceGovernance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

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

  const governanceStats = [
    { number: "100%", label: "Compliance Rate", icon: <FiCheckCircle />, delay: 100 },
    { number: "10+", label: "Certifications", icon: <FaCertificate />, delay: 200 },
    { number: "6+", label: "Govt Approvals", icon: <FiShield />, delay: 300 },
    { number: "₹5Cr+", label: "Funds Utilized", icon: <FiDollarSign />, delay: 400 }
  ];

  const governanceStructure = [
    {
      title: "Board of Directors",
      description: "Our board provides strategic direction and oversight",
      responsibilities: [
        "Strategic planning and policy formulation",
        "Financial oversight and budget approval",
        "Ensuring legal and regulatory compliance",
        "Appointment of key management personnel"
      ],
      icon: <FaUniversity />
    },
    {
      title: "Executive Committee",
      description: "Day-to-day management and implementation",
      responsibilities: [
        "Implementation of board decisions",
        "Program management and execution",
        "Resource allocation and monitoring",
        "Stakeholder relationship management"
      ],
      icon: <FiBriefcase />
    },
    {
      title: "Advisory Board",
      description: "Expert guidance and strategic advice",
      responsibilities: [
        "Subject matter expertise",
        "Industry best practices guidance",
        "Network and partnership development",
        "Impact assessment and evaluation"
      ],
      icon: <FiUsers />
    },
    {
      title: "Audit Committee",
      description: "Financial transparency and accountability",
      responsibilities: [
        "Financial audit oversight",
        "Risk assessment and management",
        "Internal control systems review",
        "Compliance monitoring"
      ],
      icon: <FaBalanceScale />
    }
  ];

  const fundAllocation = [
    { category: "Program Implementation", percentage: 75, amount: "₹3.75 Cr", color: "bg-[#667A62]" },
    { category: "Administrative Costs", percentage: 15, amount: "₹75 Lakhs", color: "bg-[#4A5C46]" },
    { category: "Fundraising & Communications", percentage: 5, amount: "₹25 Lakhs", color: "bg-[#2C3E2B]" },
    { category: "Reserve & Contingency", percentage: 5, amount: "₹25 Lakhs", color: "bg-[#8A9C86]" }
  ];

  const complianceHighlights = [
    {
      title: "Legal Compliance",
      items: [
        "Section 8 Company registration under Companies Act",
        "FCRA registration for foreign contributions",
        "CSR-1 registration with Ministry of Corporate Affairs",
        "12A & 80G tax exemptions",
        "GST & TAN registrations"
      ]
    },
    {
      title: "Financial Transparency",
      items: [
        "Annual statutory audits by independent CA firms",
        "Quarterly financial reviews by audit committee",
        "Public disclosure of annual reports",
        "Donor reporting and impact assessment",
        "Zero tolerance for financial irregularities"
      ]
    },
    {
      title: "Operational Governance",
      items: [
        "Standard operating procedures for all programs",
        "Regular staff and volunteer training",
        "Child protection and safety policies",
        "Anti-harassment and whistleblower policy",
        "Environmental and social safeguards"
      ]
    }
  ];

  const annualReports = [
    { year: "2023-24", title: "Annual Report 2023-24", size: "2.5 MB" },
    { year: "2022-23", title: "Annual Report 2022-23", size: "2.3 MB" },
    { year: "2021-22", title: "Annual Report 2021-22", size: "2.1 MB" },
    { year: "2020-21", title: "Annual Report 2020-21", size: "1.9 MB" }
  ];

  const handlePreview = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
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
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.9) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.9) 100%);
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
          
          .card-hover {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .card-hover:hover {
            transform: translateY(-8px);
          }
          
          .stat-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
          }
          
          .governance-card {
            transition: all 0.4s ease;
          }
          
          .governance-card:hover {
            transform: translateY(-5px);
            background: linear-gradient(135deg, #667A62 0%, #2C3E2B 100%);
            color: white;
          }
          
          .governance-card:hover .governance-icon,
          .governance-card:hover .governance-title,
          .governance-card:hover .governance-desc,
          .governance-card:hover .governance-list {
            color: white;
          }
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .btn-glow:hover {
            box-shadow: 0 0 20px rgba(102, 122, 98, 0.5);
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
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Built on Trust. Backed by Transparency.
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Compliance & Governance
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              MSRS Foundation strictly adheres to all statutory and regulatory compliances as mandated by the Government of India, 
              ensuring transparency and accountability in all operations.
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {governanceStats.map((stat, index) => (
              <div key={index} className="stat-card text-center" data-aos="zoom-in" data-aos-delay={stat.delay}>
                <div className="text-4xl text-[#667A62] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure Section */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Our Framework
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Governance Structure
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              A robust governance framework ensuring accountability, transparency, and ethical operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceStructure.map((item, index) => (
              <div 
                key={index}
                className="governance-card bg-white rounded-2xl p-6 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="governance-icon text-4xl text-[#667A62] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="governance-title text-lg font-bold text-[#2C3E2B] mb-2 text-center">{item.title}</h3>
                <p className="governance-desc text-xs text-gray-500 mb-3 text-center">{item.description}</p>
                <ul className="governance-list space-y-1">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                      <FiCheckCircle className="text-[#667A62] text-xs mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
                Our Process
              </span>
              <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-4">
                How We Work
              </h2>
              <div className="w-16 h-0.5 bg-[#667A62] mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our foundation operates with complete transparency and accountability. Every decision, 
                every rupee spent, and every project implemented follows a rigorous process.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#EAF6E3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#667A62] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E2B] text-sm">Needs Assessment & Planning</h4>
                    <p className="text-xs text-gray-500">Identify community needs through surveys and stakeholder consultations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#EAF6E3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#667A62] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E2B] text-sm">Board Approval & Budget Allocation</h4>
                    <p className="text-xs text-gray-500">Present proposals to board for approval and allocate resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#EAF6E3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#667A62] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E2B] text-sm">Project Implementation & Monitoring</h4>
                    <p className="text-xs text-gray-500">Execute projects with regular monitoring and course correction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#EAF6E3] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#667A62] font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E2B] text-sm">Impact Assessment & Reporting</h4>
                    <p className="text-xs text-gray-500">Measure outcomes and share reports with stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="absolute -top-5 -right-5 w-full h-full bg-[#EAF6E3] rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                alt="How We Work"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation Section */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Financial Transparency
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              How Your Donations Are Used
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              Every rupee is accounted for and directed towards maximum social impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-4 flex items-center gap-2">
                  <FiPieChart className="text-[#667A62]" /> Fund Allocation (2023-24)
                </h3>
                <div className="space-y-4">
                  {fundAllocation.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-[#2C3E2B]">{item.category}</span>
                        <span className="text-gray-600">{item.percentage}% ({item.amount})</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-[#EAF6E3] rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FiHeart className="text-[#667A62]" />
                    <span className="text-sm font-semibold text-[#2C3E2B]">Our Commitment</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    75% of funds go directly to programs, ensuring maximum impact. We maintain 
                    minimal administrative costs through efficient operations and volunteer support.
                  </p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-4 flex items-center gap-2">
                  <FiBarChart2 className="text-[#667A62]" /> Impact Metrics (2023-24)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-[#EAF6E3] rounded-xl">
                    <div className="text-2xl font-bold text-[#667A62]">10,000+</div>
                    <div className="text-xs text-gray-600">Lives Impacted</div>
                  </div>
                  <div className="text-center p-3 bg-[#EAF6E3] rounded-xl">
                    <div className="text-2xl font-bold text-[#667A62]">50+</div>
                    <div className="text-xs text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 bg-[#EAF6E3] rounded-xl">
                    <div className="text-2xl font-bold text-[#667A62]">25+</div>
                    <div className="text-xs text-gray-600">Partner Organizations</div>
                  </div>
                  <div className="text-center p-3 bg-[#EAF6E3] rounded-xl">
                    <div className="text-2xl font-bold text-[#667A62]">500+</div>
                    <div className="text-xs text-gray-600">Active Volunteers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Our Standards
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Compliance Highlights
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              We maintain the highest standards of legal and regulatory compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceHighlights.map((item, index) => (
              <div 
                key={index}
                className="bg-[#EAF6E3] rounded-2xl p-6 shadow-lg card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-[#2C3E2B] text-lg mb-4 flex items-center gap-2">
                  <FiShield className="text-[#667A62]" /> {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="text-[#667A62] text-xs mt-0.5 flex-shrink-0" />
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section - View Only */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Legal Documents
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Statutory Certificates
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              View our official certificates and registration documents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.slice(0, 6).map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#667A62] text-3xl">
                    <FaRegFilePdf />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2C3E2B] mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                    <button 
                      onClick={() => handlePreview(cert)}
                      className="bg-[#667A62] text-white px-4 py-2 rounded-lg hover:bg-[#4A5C46] transition-all flex items-center gap-2 text-sm font-semibold"
                    >
                      <FiEye size={16} /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/certificates">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-[#4A5C46] transition-all">
                View All Certificates <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Annual Disclosures
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Annual Reports
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              Download our annual reports for detailed insights into our work and finances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualReports.map((report, index) => (
              <div 
                key={index}
                className="bg-[#EAF6E3] rounded-xl p-6 text-center card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaFileInvoice className="text-4xl text-[#667A62] mx-auto mb-3" />
                <h3 className="font-semibold text-[#2C3E2B] text-sm mb-1">{report.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{report.size}</p>
                <button className="bg-[#667A62] text-white px-4 py-2 rounded-lg hover:bg-[#4A5C46] transition-all text-sm font-semibold w-full">
                  <FiEye className="inline mr-1" size={14} /> View Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in">
            <FaShieldAlt className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Need More Information?
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              For any queries regarding our compliance or governance framework, please contact our compliance officer.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all btn-glow">
                Contact Compliance Officer <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificate Preview Modal */}
      {showModal && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#667A62] to-[#4A5C46] p-5 text-white">
              <div className="flex items-center gap-3">
                <FaRegFilePdf className="text-2xl" />
                <div>
                  <h3 className="text-lg font-bold">{selectedCert.title}</h3>
                  <p className="text-xs opacity-90">{selectedCert.description}</p>
                </div>
              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <FiX size={16} />
              </button>
            </div>
            <div className="p-5">
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Document Type:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedCert.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date of Issue:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">File Size:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedCert.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Format:</span>
                  <span className="text-[#2C3E2B] font-semibold">PDF Document</span>
                </div>
              </div>
              <div className="bg-[#EAF6E3] p-4 rounded-xl mb-5">
                <img 
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg mb-3"
                />
                <p className="text-xs text-[#4A5C46] text-center">
                  This is an official document issued by the competent authority.
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="w-full py-2.5 bg-[#667A62] text-white font-semibold rounded-lg hover:bg-[#4A5C46] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceGovernance;