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
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
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

  const stats = [
    { number: "50+", label: "Reports Published", icon: <FiFileText />, delay: 100 },
    { number: "10K+", label: "Downloads", icon: <FiDownload />, delay: 200 },
    { number: "100%", label: "Transparency", icon: <FiCheckCircle />, delay: 300 },
    { number: "25+", label: "Research Papers", icon: <FiBookOpen />, delay: 400 },
  ];

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
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .banner-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.02em; }
          .section-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: -0.01em; }
          
          .knowledge-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .knowledge-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&q=80');
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
          
          .tab-button {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .tab-button::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background: #667A62;
            transition: width 0.3s ease;
          }
          
          .tab-button.active::before {
            width: 100%;
          }
          
          .knowledge-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .knowledge-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.05), transparent);
            transition: left 0.6s ease;
          }
          
          .knowledge-card:hover::before {
            left: 100%;
          }
          
          .knowledge-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.12);
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
            transform: scale(1.1) rotate(5deg);
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
            background: rgba(0, 0, 0, 0.8);
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
            animation: slideUp 0.3s ease;
          }
          
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
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
          
          @media (max-width: 768px) {
            .banner-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="knowledge-bg" />
        <div className="knowledge-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Knowledge Hub
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Insights & Resources
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Explore articles, reports, and resources focused on social impact, CSR trends, and community development.
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

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12" data-aos="fade-up">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#667A62]" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input w-full pl-11 pr-4 py-3 rounded-xl bg-white shadow-md focus:shadow-lg transition-all"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#667A62] text-white shadow-lg'
                    : 'bg-white text-[#2C3E2B] hover:bg-[#EAF6E3] shadow-sm'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#EAF6E3] text-[#667A62]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Content Grid */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item, index) => (
                <div 
                  key={index} 
                  className="knowledge-card bg-white rounded-2xl overflow-hidden shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF6E3] flex items-center justify-center">
                        <div className="text-2xl text-[#667A62]">{item.icon}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-[#667A62] bg-[#EAF6E3] px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#2C3E2B] mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#4A5C46] text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={12} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiFileText size={12} />
                        <span>{item.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDownload size={12} />
                        <span>{item.downloads}+</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-[#EAF6E3]">
                      <button 
                        onClick={() => handlePreview(item)}
                        className="flex items-center gap-2 text-[#667A62] font-semibold text-sm hover:gap-3 transition-all group"
                      >
                        <FiEye size={14} /> Preview
                      </button>
                      <button className="flex items-center gap-2 text-[#667A62] font-semibold text-sm hover:gap-3 transition-all group">
                        <FiDownload size={14} /> Download ({item.size})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-aos="fade-up">
              <div className="text-6xl text-[#667A62] mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#2C3E2B] mb-2">No Resources Found</h3>
              <p className="text-[#4A5C46]">Try adjusting your search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-[#EAF6E3] to-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
                  Featured Resource
                </span>
                <h3 className="section-title text-2xl md:text-3xl font-bold text-[#2C3E2B] mb-3">
                  Annual CSR Impact Report 2024
                </h3>
                <p className="text-[#4A5C46] text-sm mb-4">
                  Our most comprehensive report yet, featuring detailed impact metrics, success stories, 
                  and future roadmap for sustainable development.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#4A5C46] mb-6">
                  <span>📄 45 pages</span>
                  <span>📥 1,250+ downloads</span>
                  <span>⭐ 4.8/5 rating</span>
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-[#4A5C46] transition-all">
                  Download Now <FiDownload size={14} />
                </button>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-[#667A62]/10 rounded-full flex items-center justify-center floating-element">
                  <FaFilePdf className="text-5xl text-[#667A62]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-lg w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#667A62] to-[#4A5C46] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{selectedItem.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <p className="text-sm opacity-90">{selectedItem.category}</p>
                </div>
              </div>
              <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Published:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pages:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.pages}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">File Size:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Downloads:</span>
                  <span className="text-[#2C3E2B] font-semibold">{selectedItem.downloads}+</span>
                </div>
                <div className="pt-4">
                  <p className="text-[#4A5C46] text-sm leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-[#667A62] text-white font-semibold rounded-full hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2">
                <FiDownload /> Download Full Report ({selectedItem.size})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FiBookOpen className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              Get the latest reports, research papers, and impact stories delivered to your inbox.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all">
                Subscribe Now <FiArrowRight />
              </button>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] transition-all">
                  Contact Us <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHub;