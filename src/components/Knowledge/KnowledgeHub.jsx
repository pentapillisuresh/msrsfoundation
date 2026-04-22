import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFileText, FiDownload, FiEye, FiArrowRight, FiTrendingUp, 
  FiUsers, FiBookOpen, FiHeart, FiStar, FiCheckCircle, 
  FiBarChart2, FiAward, FiGlobe, FiCalendar, FiSearch
} from 'react-icons/fi';
import { FaFilePdf, FaFileAlt, FaNewspaper, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KnowledgeHub = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const [activeTab, setActiveTab] = useState('reports');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tabs = [
    { id: 'reports', label: 'CSR Reports', icon: <FaFilePdf />, count: 12 },
    { id: 'research', label: 'Research Papers', icon: <FaFileAlt />, count: 8 },
    { id: 'case', label: 'Case Studies', icon: <FaNewspaper />, count: 10 },
    { id: 'stories', label: 'Impact Stories', icon: <FaChartLine />, count: 15 }
  ];

  const knowledgeHubData = {
    reports: [
      { 
        title: 'Annual CSR Impact Report 2024', 
        description: 'Comprehensive report on our CSR initiatives, impact metrics, and success stories from the past year.',
        date: 'March 2024', 
        pages: 45, 
        size: '2.5 MB',
        category: 'Annual Report',
        downloads: 1250,
        icon: <FaFilePdf />
      },
      { 
        title: 'Sustainability Report 2023', 
        description: 'Detailed analysis of our environmental sustainability programs and carbon footprint reduction.',
        date: 'December 2023', 
        pages: 38, 
        size: '2.1 MB',
        category: 'Sustainability',
        downloads: 890,
        icon: <FaFilePdf />
      },
      { 
        title: 'Quarterly Progress Report Q4 2023', 
        description: 'Quarterly update on project milestones, financial utilization, and beneficiary reach.',
        date: 'January 2024', 
        pages: 28, 
        size: '1.8 MB',
        category: 'Progress Report',
        downloads: 567,
        icon: <FaFilePdf />
      },
      { 
        title: 'Healthcare Initiative Impact Report', 
        description: 'Special report on rural healthcare programs covering 100+ villages.',
        date: 'October 2023', 
        pages: 32, 
        size: '2.3 MB',
        category: 'Sector Report',
        downloads: 723,
        icon: <FaFilePdf />
      },
      { 
        title: 'Education Program Annual Review', 
        description: 'Comprehensive review of digital education initiatives and student outcomes.',
        date: 'September 2023', 
        pages: 40, 
        size: '2.7 MB',
        category: 'Education',
        downloads: 634,
        icon: <FaFilePdf />
      },
      { 
        title: 'Women Empowerment Report', 
        description: 'Impact assessment of women skill development and entrepreneurship programs.',
        date: 'August 2023', 
        pages: 35, 
        size: '2.0 MB',
        category: 'Gender Equality',
        downloads: 892,
        icon: <FaFilePdf />
      }
    ],
    research: [
      { 
        title: 'Digital Divide in Rural India', 
        description: 'Research paper on challenges and opportunities in bridging the digital gap in rural communities.',
        date: 'February 2024', 
        pages: 52, 
        size: '3.1 MB',
        category: 'Technology',
        downloads: 456,
        icon: <FaFileAlt />
      },
      { 
        title: 'Sustainable Agriculture Practices', 
        description: 'Study on adoption of sustainable farming methods and their impact on crop yield.',
        date: 'January 2024', 
        pages: 48, 
        size: '2.9 MB',
        category: 'Agriculture',
        downloads: 389,
        icon: <FaFileAlt />
      }
    ],
    case: [
      { 
        title: 'Transforming Rural Healthcare', 
        description: 'Case study on successful implementation of mobile medical units in remote areas.',
        date: 'March 2024', 
        pages: 25, 
        size: '1.5 MB',
        category: 'Healthcare',
        downloads: 567,
        icon: <FaNewspaper />
      },
      { 
        title: 'Digital Classroom Success Story', 
        description: 'How smart classrooms improved learning outcomes in government schools.',
        date: 'February 2024', 
        pages: 22, 
        size: '1.3 MB',
        category: 'Education',
        downloads: 678,
        icon: <FaNewspaper />
      }
    ],
    stories: [
      { 
        title: 'From Village to Entrepreneur', 
        description: 'Inspirational journey of a woman who transformed her life through skill development.',
        date: 'March 2024', 
        pages: 15, 
        size: '1.2 MB',
        category: 'Success Story',
        downloads: 1234,
        icon: <FaChartLine />
      },
      { 
        title: 'A New Dawn: Education Changes Lives', 
        description: 'How access to digital education opened new opportunities for rural children.',
        date: 'January 2024', 
        pages: 18, 
        size: '1.4 MB',
        category: 'Impact Story',
        downloads: 987,
        icon: <FaChartLine />
      }
    ]
  };



  const currentData = knowledgeHubData[activeTab] || [];
  const filteredData = currentData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePreview = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
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

          .knowledge-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
            border: 1px solid #EAF6E3;
          }
          
          .knowledge-card:hover {
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
          
          .tab-button.active {
            background: #667A62;
            color: white;
          }
          
          .tab-button:hover:not(.active) {
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
          
          .search-input {
            transition: all 0.3s ease;
            border: 1px solid #E5E7EB;
          }
          
          .search-input:focus {
            outline: none;
            border-color: #667A62;
            box-shadow: 0 0 0 3px rgba(102, 122, 98, 0.1);
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Knowledge Hub Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              KNOWLEDGE HUB
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Insights & Resources
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Explore articles, reports, and resources focused on social impact, CSR trends, and community development.
            Access our latest research and impact documentation.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

    

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              RESOURCE LIBRARY
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              Explore Our Resources
            </h2>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              Access reports, research papers, case studies, and impact stories
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10" data-aos="fade-up">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667A62] text-sm" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input w-full pl-9 pr-3 py-2 bg-white text-sm"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'active bg-[#667A62] text-white'
                    : 'bg-white text-[#4A5C46] hover:bg-[#EAF6E3]'
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                {tab.label}
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#EAF6E3] text-[#667A62]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Content Grid */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <div 
                  key={index} 
                  className="knowledge-card bg-white p-5"
                  data-aos="fade-up"
                  data-aos-delay={(index % 6) * 100}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center">
                      <div className="text-xl text-[#667A62]">{item.icon}</div>
                    </div>
                    <span className="text-[9px] font-semibold text-[#667A62] bg-[#EAF6E3] px-2 py-0.5 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-[#2C3E2B] text-base mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#4A5C46] text-xs leading-relaxed mb-3 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={10} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiFileText size={10} />
                      <span>{item.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDownload size={10} />
                      <span>{item.downloads}+</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-[#EAF6E3]">
                    <button 
                      onClick={() => handlePreview(item)}
                      className="flex items-center gap-1 text-[#667A62] font-semibold text-[10px] hover:gap-2 transition-all group"
                    >
                      <FiEye size={10} /> Preview
                    </button>
                    <button className="flex items-center gap-1 text-[#667A62] font-semibold text-[10px] hover:gap-2 transition-all group">
                      <FiDownload size={10} /> Download ({item.size})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-aos="fade-up">
              <div className="text-5xl text-[#667A62] mb-3">📚</div>
              <h3 className="font-serif text-xl text-[#2C3E2B] mb-1">No Resources Found</h3>
              <p className="text-[#4A5C46] text-xs">Try adjusting your search term</p>
            </div>
          )}
        </div>
      </section>

      {/* --- FEATURED SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#F7F9F5] p-8 border border-[#EAF6E3]" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-[9px] font-bold tracking-[0.2em] text-[#667A62] uppercase bg-white">
                  Featured Resource
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2C3E2B] mb-3">
                  Annual CSR Impact Report 2024
                </h3>
                <p className="text-[#4A5C46] text-sm mb-4 leading-relaxed">
                  Our most comprehensive report yet, featuring detailed impact metrics, success stories, 
                  and future roadmap for sustainable development.
                </p>
                <div className="flex items-center gap-4 text-xs text-[#4A5C46] mb-5">
                  <span>📄 45 pages</span>
                  <span>📥 1,250+ downloads</span>
                  <span>⭐ 4.8/5 rating</span>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2 bg-[#667A62] text-white font-semibold text-sm hover:bg-[#4A5C46] transition-all">
                  Download Now <FiDownload size={12} />
                </button>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 mx-auto bg-[#667A62]/10 flex items-center justify-center floating-element">
                  <FaFilePdf className="text-4xl text-[#667A62]" />
                </div>
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
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Get the latest reports, research papers, and impact stories delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <button className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md">
                Subscribe Now 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </button>
              <Link 
                to="/contact"
                className="px-5 py-2.5 border border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[#2C3E2B] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREVIEW MODAL --- */}
      {showModal && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#2C3E2B] p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{selectedItem.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{selectedItem.title}</h3>
                  <p className="text-[10px] text-white/70">{selectedItem.category}</p>
                </div>
              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 w-7 h-7 bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                ✕
              </button>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Published:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.date}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Pages:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.pages}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">File Size:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.size}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Downloads:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.downloads}+</span>
                </div>
                <div className="pt-3">
                  <p className="text-[#4A5C46] text-xs leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
              <button className="w-full mt-5 py-2.5 bg-[#667A62] text-white font-semibold text-sm hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2">
                <FiDownload size={12} /> Download Full Report ({selectedItem.size})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeHub;