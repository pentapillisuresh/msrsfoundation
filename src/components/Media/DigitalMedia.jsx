import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiPlay, 
  FiImage, FiUser, FiArrowRight, FiHeart, FiMessageCircle, 
  FiShare2, FiCalendar, FiEye, FiThumbsUp, FiLinkedin,
  FiTrendingUp, FiAward, FiGlobe, FiClock, FiCamera,
  FiFilm, FiGrid, FiDownload, FiExternalLink, FiBell,
  FiStar, FiCheckCircle, FiBarChart2, FiSmile, FiUsers,
  FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DigitalMedia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const [activeMedia, setActiveMedia] = useState('videos');
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Video Categories
  const videoCategories = ['all', 'Impact Story', 'Education', 'Empowerment', 'Healthcare', 'Sustainability', 'Volunteer'];
  
  // Extended Videos Data with multiple items per category
  const allVideos = [
    // Impact Stories (5 videos)
    { id: 1, title: "MSRS Foundation - Transforming Lives", videoId: "dQw4w9WgXcQ", duration: "3:45", views: "15.2K", date: "March 2024", category: "Impact Story" },
    { id: 2, title: "Success Stories from Rural India", videoId: "dQw4w9WgXcQ", duration: "4:20", views: "12.1K", date: "February 2024", category: "Impact Story" },
    { id: 3, title: "Changing Lives Through Education", videoId: "dQw4w9WgXcQ", duration: "5:10", views: "18.5K", date: "January 2024", category: "Impact Story" },
    { id: 4, title: "Community Development Success", videoId: "dQw4w9WgXcQ", duration: "3:55", views: "9.8K", date: "December 2023", category: "Impact Story" },
    { id: 5, title: "Annual Impact Report 2023", videoId: "dQw4w9WgXcQ", duration: "6:30", views: "22.3K", date: "November 2023", category: "Impact Story" },
    // Education (5 videos)
    { id: 6, title: "Education for All Initiative", videoId: "dQw4w9WgXcQ", duration: "2:30", views: "8.5K", date: "February 2024", category: "Education" },
    { id: 7, title: "Digital Classroom Project", videoId: "dQw4w9WgXcQ", duration: "3:15", views: "6.2K", date: "January 2024", category: "Education" },
    { id: 8, title: "Scholarship Distribution Drive", videoId: "dQw4w9WgXcQ", duration: "2:45", views: "5.1K", date: "December 2023", category: "Education" },
    { id: 9, title: "Teacher Training Program", videoId: "dQw4w9WgXcQ", duration: "4:00", views: "4.8K", date: "November 2023", category: "Education" },
    { id: 10, title: "School Infrastructure Development", videoId: "dQw4w9WgXcQ", duration: "3:30", views: "7.2K", date: "October 2023", category: "Education" },
    // Empowerment (5 videos)
    { id: 11, title: "Women Empowerment Success Stories", videoId: "dQw4w9WgXcQ", duration: "4:15", views: "12.8K", date: "January 2024", category: "Empowerment" },
    { id: 12, title: "Skill Development Workshop", videoId: "dQw4w9WgXcQ", duration: "3:45", views: "9.3K", date: "December 2023", category: "Empowerment" },
    { id: 13, title: "Women Entrepreneurship Program", videoId: "dQw4w9WgXcQ", duration: "5:20", views: "11.2K", date: "November 2023", category: "Empowerment" },
    { id: 14, title: "Financial Literacy Campaign", videoId: "dQw4w9WgXcQ", duration: "2:50", views: "7.5K", date: "October 2023", category: "Empowerment" },
    { id: 15, title: "Self-Help Group Success", videoId: "dQw4w9WgXcQ", duration: "4:10", views: "8.9K", date: "September 2023", category: "Empowerment" },
    // Healthcare (5 videos)
    { id: 16, title: "Rural Healthcare Camp Highlights", videoId: "dQw4w9WgXcQ", duration: "3:20", views: "6.2K", date: "December 2023", category: "Healthcare" },
    { id: 17, title: "Mobile Medical Unit Launch", videoId: "dQw4w9WgXcQ", duration: "2:55", views: "5.8K", date: "November 2023", category: "Healthcare" },
    { id: 18, title: "Health Awareness Campaign", videoId: "dQw4w9WgXcQ", duration: "4:30", views: "7.1K", date: "October 2023", category: "Healthcare" },
    { id: 19, title: "Free Eye Checkup Camp", videoId: "dQw4w9WgXcQ", duration: "3:10", views: "4.5K", date: "September 2023", category: "Healthcare" },
    { id: 20, title: "Vaccination Drive Success", videoId: "dQw4w9WgXcQ", duration: "2:40", views: "6.9K", date: "August 2023", category: "Healthcare" },
    // Sustainability (4 videos)
    { id: 21, title: "Sustainable Agriculture Project", videoId: "dQw4w9WgXcQ", duration: "5:00", views: "4.8K", date: "November 2023", category: "Sustainability" },
    { id: 22, title: "Tree Plantation Drive", videoId: "dQw4w9WgXcQ", duration: "2:30", views: "3.9K", date: "October 2023", category: "Sustainability" },
    { id: 23, title: "Water Conservation Initiative", videoId: "dQw4w9WgXcQ", duration: "3:45", views: "4.2K", date: "September 2023", category: "Sustainability" },
    { id: 24, title: "Solar Energy Project", videoId: "dQw4w9WgXcQ", duration: "4:15", views: "5.1K", date: "August 2023", category: "Sustainability" },
    // Volunteer (4 videos)
    { id: 25, title: "Volunteer Appreciation Day", videoId: "dQw4w9WgXcQ", duration: "2:45", views: "3.5K", date: "October 2023", category: "Volunteer" },
    { id: 26, title: "Volunteer Training Program", videoId: "dQw4w9WgXcQ", duration: "3:20", views: "2.8K", date: "September 2023", category: "Volunteer" },
    { id: 27, title: "Community Outreach by Volunteers", videoId: "dQw4w9WgXcQ", duration: "4:00", views: "3.2K", date: "August 2023", category: "Volunteer" },
    { id: 28, title: "Volunteer Impact Stories", videoId: "dQw4w9WgXcQ", duration: "3:35", views: "2.5K", date: "July 2023", category: "Volunteer" }
  ];

  // Get videos based on selected category
  const getFilteredVideos = () => {
    if (activeCategory === 'all') return allVideos;
    return allVideos.filter(video => video.category === activeCategory);
  };

  const filteredVideos = getFilteredVideos();
  const displayedVideos = filteredVideos.slice(0, visibleItems);
  const hasMore = visibleItems < filteredVideos.length;

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  const loadLess = () => {
    setVisibleItems(6);
  };

  // Extended Photos Data with multiple categories
  const photoCategories = ['all', 'Healthcare', 'Environment', 'Education', 'Skills', 'Rural', 'Women'];
  
  const allPhotos = [
    // Healthcare (6 photos)
    { id: 1, title: "Rural Health Camp", category: "Healthcare", location: "Maharashtra", date: "March 2024", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { id: 2, title: "Free Medical Checkup", category: "Healthcare", location: "Telangana", date: "February 2024", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80" },
    { id: 3, title: "Eye Care Camp", category: "Healthcare", location: "Karnataka", date: "January 2024", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" },
    { id: 4, title: "Dental Health Drive", category: "Healthcare", location: "Tamil Nadu", date: "December 2023", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80" },
    { id: 5, title: "Immunization Camp", category: "Healthcare", location: "Andhra Pradesh", date: "November 2023", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
    { id: 6, title: "Health Awareness Session", category: "Healthcare", location: "Gujarat", date: "October 2023", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    // Environment (5 photos)
    { id: 7, title: "Green Initiative", category: "Environment", location: "Telangana", date: "February 2024", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
    { id: 8, title: "Tree Plantation Drive", category: "Environment", location: "Kerala", date: "January 2024", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80" },
    { id: 9, title: "Clean Water Project", category: "Environment", location: "Rajasthan", date: "December 2023", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80" },
    { id: 10, title: "Solar Panel Installation", category: "Environment", location: "Gujarat", date: "November 2023", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" },
    { id: 11, title: "Waste Management Workshop", category: "Environment", location: "Maharashtra", date: "October 2023", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80" },
    // Education (5 photos)
    { id: 12, title: "Digital Classroom", category: "Education", location: "Karnataka", date: "January 2024", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
    { id: 13, title: "Smart Learning Session", category: "Education", location: "Telangana", date: "December 2023", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
    { id: 14, title: "Computer Lab Inauguration", category: "Education", location: "Andhra", date: "November 2023", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" },
    { id: 15, title: "Scholarship Distribution", category: "Education", location: "Tamil Nadu", date: "October 2023", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" },
    { id: 16, title: "Library Setup", category: "Education", location: "Kerala", date: "September 2023", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80" },
    // Skills (4 photos)
    { id: 17, title: "Skill Workshop", category: "Skills", location: "Tamil Nadu", date: "December 2023", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
    { id: 18, title: "Vocational Training", category: "Skills", location: "Karnataka", date: "November 2023", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
    { id: 19, title: "Computer Training", category: "Skills", location: "Telangana", date: "October 2023", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
    { id: 20, title: "Tailoring Workshop", category: "Skills", location: "Maharashtra", date: "September 2023", image: "https://images.unsplash.com/photo-1548624313-9f12a3b4f4e6?w=600&q=80" },
    // Rural (4 photos)
    { id: 21, title: "Community Meeting", category: "Rural", location: "Andhra Pradesh", date: "November 2023", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" },
    { id: 22, title: "Village Development", category: "Rural", location: "Rajasthan", date: "October 2023", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80" },
    { id: 23, title: "Farmers Meeting", category: "Rural", location: "Punjab", date: "September 2023", image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80" },
    { id: 24, title: "Rural Infrastructure", category: "Rural", location: "Madhya Pradesh", date: "August 2023", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80" },
    // Women (4 photos)
    { id: 25, title: "Women Entrepreneurs", category: "Women", location: "Gujarat", date: "October 2023", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
    { id: 26, title: "Self-Help Group Meeting", category: "Women", location: "Telangana", date: "September 2023", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80" },
    { id: 27, title: "Women Leadership Program", category: "Women", location: "Karnataka", date: "August 2023", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80" },
    { id: 28, title: "Skill Training for Women", category: "Women", location: "Maharashtra", date: "July 2023", image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80" }
  ];

  const [photoCategory, setPhotoCategory] = useState('all');
  const [visiblePhotos, setVisiblePhotos] = useState(6);

  const getFilteredPhotos = () => {
    if (photoCategory === 'all') return allPhotos;
    return allPhotos.filter(photo => photo.category === photoCategory);
  };

  const filteredPhotos = getFilteredPhotos();
  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMorePhotos = visiblePhotos < filteredPhotos.length;

  const loadMorePhotos = () => {
    setVisiblePhotos(prev => prev + 6);
  };

  const loadLessPhotos = () => {
    setVisiblePhotos(6);
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

 
  const socialFeeds = [
    { platform: "Instagram", icon: <FaInstagram />, color: "#E4405F", content: "Amazing response at our health camp! Over 500 patients treated. #MSRSCares", likes: 1245, comments: 89, shares: 34, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { platform: "Facebook", icon: <FaFacebookF />, color: "#1877F2", content: "Proud moment as we inaugurate our new learning center. Education changes lives!", likes: 876, comments: 45, shares: 23, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
    { platform: "Twitter", icon: <FaTwitter />, color: "#1DA1F2", content: "Celebrating 5 years of impactful service! Thank you to all our supporters.", likes: 543, comments: 28, shares: 67, image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" },
    { platform: "LinkedIn", icon: <FaLinkedinIn />, color: "#0A66C2", content: "Our CSR partnership with leading corporations is creating sustainable impact.", likes: 432, comments: 34, shares: 56, image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" }
  ];

  // Get category count for display
  const getCategoryCount = (category) => {
    if (category === 'all') return allVideos.length;
    return allVideos.filter(v => v.category === category).length;
  };

  const getPhotoCategoryCount = (category) => {
    if (category === 'all') return allPhotos.length;
    return allPhotos.filter(p => p.category === category).length;
  };

  return (
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .video-card, .photo-card, .feed-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border: 1px solid #EAF6E3;
          }
          
          .video-card:hover, .photo-card:hover, .feed-card:hover {
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
          
          .social-icon {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
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
          
          .category-chip {
            transition: all 0.3s ease;
          }
          
          .category-chip.active {
            background: #667A62;
            color: white;
            border-color: #667A62;
          }
          
          .category-chip:hover:not(.active) {
            background: #EAF6E3;
            border-color: #667A62;
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
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Digital Media Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              DIGITAL PRESENCE
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Digital Media
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Stories that Inspire Action - Stay connected through our latest updates, videos, campaigns, and digital outreach initiatives.
            Follow our journey of impact and transformation.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

   

      {/* --- SOCIAL MEDIA LINKS SECTION --- */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              CONNECT WITH US
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#2C3E2B] mt-4">
              Follow Us on Social Media
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#FF0000" }}>
              <FaYoutube size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "linear-gradient(45deg, #f09433, #d62976, #962fbf)" }}>
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#1877F2" }}>
              <FaFacebookF size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#1DA1F2" }}>
              <FaTwitter size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#0A66C2" }}>
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* --- MEDIA TABS --- */}
      <section className="py-20 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up">
            <button
              onClick={() => setActiveMedia('videos')}
              className={`tab-button flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeMedia === 'videos'
                  ? 'active bg-[#667A62] text-white'
                  : 'bg-white text-[#4A5C46] hover:bg-[#EAF6E3]'
              }`}
            >
              <FiFilm size={14} /> Videos ({allVideos.length})
            </button>
            <button
              onClick={() => setActiveMedia('photos')}
              className={`tab-button flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeMedia === 'photos'
                  ? 'active bg-[#667A62] text-white'
                  : 'bg-white text-[#4A5C46] hover:bg-[#EAF6E3]'
              }`}
            >
              <FiCamera size={14} /> Photos ({allPhotos.length})
            </button>
          </div>

          {/* Videos Section */}
          {activeMedia === 'videos' && (
            <>
              {/* Video Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
                {videoCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleItems(6);
                    }}
                    className={`category-chip px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all duration-300 ${
                      activeCategory === category
                        ? 'active bg-[#667A62] text-white border-[#667A62]'
                        : 'bg-white text-[#4A5C46] border-gray-200 hover:border-[#667A62]'
                    }`}
                  >
                    {category === 'all' ? 'All Videos' : category} ({getCategoryCount(category)})
                  </button>
                ))}
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedVideos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className="video-card bg-white overflow-hidden group"
                    data-aos="fade-up"
                    data-aos-delay={(index % 6) * 100}
                  >
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-[#2C3E2B] to-[#667A62] flex items-center justify-center">
                        <FaYoutube className="text-white text-5xl" />
                      </div>
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <FiPlay className="text-white text-xl ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-0.5 bg-[#667A62] text-white text-[9px] font-bold uppercase tracking-wider">
                          {video.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[9px] px-1.5 py-0.5">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-[#2C3E2B] text-sm mb-2 line-clamp-1">{video.title}</h3>
                      <div className="flex justify-between text-[10px] text-gray-400">
                        <span className="flex items-center gap-1"><FiEye size={10} /> {video.views} views</span>
                        <span className="flex items-center gap-1"><FiCalendar size={10} /> {video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More / Show Less Buttons */}
              {filteredVideos.length > 6 && (
                <div className="text-center mt-10" data-aos="fade-up">
                  {hasMore ? (
                    <button onClick={loadMore} className="inline-flex items-center gap-2 px-5 py-2 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition-all">
                      Load More ({visibleItems} of {filteredVideos.length}) <FiArrowRight size={12} />
                    </button>
                  ) : (
                    <button onClick={loadLess} className="inline-flex items-center gap-2 px-5 py-2 border border-[#667A62] text-[#667A62] text-xs font-semibold hover:bg-[#667A62] hover:text-white transition-all">
                      Show Less <FiChevronLeft size={12} />
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Photos Section */}
          {activeMedia === 'photos' && (
            <>
              {/* Photo Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
                {photoCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setPhotoCategory(category);
                      setVisiblePhotos(6);
                    }}
                    className={`category-chip px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all duration-300 ${
                      photoCategory === category
                        ? 'active bg-[#667A62] text-white border-[#667A62]'
                        : 'bg-white text-[#4A5C46] border-gray-200 hover:border-[#667A62]'
                    }`}
                  >
                    {category === 'all' ? 'All Photos' : category} ({getPhotoCategoryCount(category)})
                  </button>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPhotos.map((photo, index) => (
                  <div 
                    key={photo.id} 
                    className="photo-card bg-white overflow-hidden group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={(index % 6) * 100}
                    onClick={() => openPhotoModal(photo)}
                  >
                    <div className="relative overflow-hidden h-56">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-white flex items-center justify-center">
                          <FiEye className="text-[#667A62] text-base" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-0.5 bg-[#667A62] text-white text-[9px] font-bold uppercase tracking-wider">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-[#2C3E2B] text-xs mb-1">{photo.title}</h3>
                      <p className="text-[9px] text-gray-400">{photo.location} • {photo.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More / Show Less Buttons */}
              {filteredPhotos.length > 6 && (
                <div className="text-center mt-10" data-aos="fade-up">
                  {hasMorePhotos ? (
                    <button onClick={loadMorePhotos} className="inline-flex items-center gap-2 px-5 py-2 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition-all">
                      Load More ({visiblePhotos} of {filteredPhotos.length}) <FiArrowRight size={12} />
                    </button>
                  ) : (
                    <button onClick={loadLessPhotos} className="inline-flex items-center gap-2 px-5 py-2 border border-[#667A62] text-[#667A62] text-xs font-semibold hover:bg-[#667A62] hover:text-white transition-all">
                      Show Less <FiChevronLeft size={12} />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- SOCIAL MEDIA FEEDS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              LATEST UPDATES
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              Social Media Feeds
            </h2>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              Stay updated with our latest posts and activities across social platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialFeeds.map((feed, index) => (
              <div 
                key={index} 
                className="feed-card bg-white border border-[#EAF6E3] overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 p-3 border-b border-[#EAF6E3]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ background: feed.color }}>
                    {feed.icon}
                  </div>
                  <span className="font-bold text-[#2C3E2B] text-sm">{feed.platform}</span>
                </div>
                <div className="h-48 overflow-hidden">
                  <img src={feed.image} alt={feed.platform} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-[#4A5C46] text-xs leading-relaxed mb-3">{feed.content}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1 text-gray-400 text-[10px]"><FiHeart className="text-red-400" size={10} /> {feed.likes} likes</span>
                    <span className="flex items-center gap-1 text-gray-400 text-[10px]"><FiMessageCircle size={10} /> {feed.comments} comments</span>
                    <span className="flex items-center gap-1 text-gray-400 text-[10px]"><FiShare2 size={10} /> {feed.shares} shares</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10" data-aos="fade-up">
            <button className="inline-flex items-center gap-2 px-5 py-2 border border-[#667A62] text-[#667A62] text-xs font-semibold hover:bg-[#667A62] hover:text-white transition-all">
              <FiBell size={12} /> Follow Us for More
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Subscribe to Our Channel
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Get regular updates on our initiatives, success stories, and impact videos.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                <FaYoutube size={14} /> Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO MODAL --- */}
      {showModal && selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white max-w-3xl w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-80 object-cover" />
              <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition">
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-[#2C3E2B] mb-2">{selectedPhoto.title}</h3>
              <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
                <span><FiCamera className="inline mr-1" size={12} /> {selectedPhoto.category}</span>
                <span><FiGlobe className="inline mr-1" size={12} /> {selectedPhoto.location}</span>
                <span><FiCalendar className="inline mr-1" size={12} /> {selectedPhoto.date}</span>
              </div>
              <p className="text-[#4A5C46] text-sm leading-relaxed">
                This photo captures a moment from our {selectedPhoto.title.toLowerCase()} initiative, 
                where we worked with the community to create lasting impact.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 py-2 bg-[#667A62] text-white text-xs font-semibold hover:bg-[#4A5C46] transition flex items-center justify-center gap-2">
                  <FiDownload size={12} /> Download
                </button>
                <button className="flex-1 py-2 border border-[#667A62] text-[#667A62] text-xs font-semibold hover:bg-[#667A62] hover:text-white transition flex items-center justify-center gap-2">
                  <FiExternalLink size={12} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMedia;