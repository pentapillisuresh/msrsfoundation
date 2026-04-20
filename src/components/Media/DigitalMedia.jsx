import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiPlay, 
  FiImage, FiUser, FiArrowRight, FiHeart, FiMessageCircle, 
  FiShare2, FiCalendar, FiEye, FiThumbsUp, FiLinkedin,
  FiTrendingUp, FiAward, FiGlobe, FiClock, FiCamera,
  FiFilm, FiGrid, FiDownload, FiExternalLink, FiBell,
  FiStar, FiCheckCircle, FiBarChart2, FiSmile,FiUsers
} from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DigitalMedia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [activeMedia, setActiveMedia] = useState('videos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const videos = [
    { id: 1, title: "MSRS Foundation - Transforming Lives", videoId: "dQw4w9WgXcQ", duration: "3:45", views: "15.2K", date: "March 2024", category: "Impact Story" },
    { id: 2, title: "Education for All Initiative", videoId: "dQw4w9WgXcQ", duration: "2:30", views: "8.5K", date: "February 2024", category: "Education" },
    { id: 3, title: "Women Empowerment Success Stories", videoId: "dQw4w9WgXcQ", duration: "4:15", views: "12.8K", date: "January 2024", category: "Empowerment" },
    { id: 4, title: "Rural Healthcare Camp Highlights", videoId: "dQw4w9WgXcQ", duration: "3:20", views: "6.2K", date: "December 2023", category: "Healthcare" },
    { id: 5, title: "Sustainable Agriculture Project", videoId: "dQw4w9WgXcQ", duration: "5:00", views: "4.8K", date: "November 2023", category: "Sustainability" },
    { id: 6, title: "Volunteer Appreciation Day", videoId: "dQw4w9WgXcQ", duration: "2:45", views: "3.5K", date: "October 2023", category: "Volunteer" }
  ];

  const photos = [
    { id: 1, title: "Rural Health Camp", category: "Healthcare", location: "Maharashtra", date: "March 2024", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { id: 2, title: "Green Initiative", category: "Environment", location: "Telangana", date: "February 2024", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
    { id: 3, title: "Digital Classroom", category: "Education", location: "Karnataka", date: "January 2024", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
    { id: 4, title: "Skill Workshop", category: "Skills", location: "Tamil Nadu", date: "December 2023", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
    { id: 5, title: "Community Meeting", category: "Rural", location: "Andhra Pradesh", date: "November 2023", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" },
    { id: 6, title: "Women Entrepreneurs", category: "Women", location: "Gujarat", date: "October 2023", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" }
  ];

  const socialFeeds = [
    { platform: "Instagram", icon: <FaInstagram />, color: "#E4405F", content: "Amazing response at our health camp! Over 500 patients treated. #MSRSCares", likes: 1245, comments: 89, shares: 34, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { platform: "Facebook", icon: <FaFacebookF />, color: "#1877F2", content: "Proud moment as we inaugurate our new learning center. Education changes lives!", likes: 876, comments: 45, shares: 23, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
    { platform: "Twitter", icon: <FaTwitter />, color: "#1DA1F2", content: "Celebrating 5 years of impactful service! Thank you to all our supporters.", likes: 543, comments: 28, shares: 67, image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" },
    { platform: "LinkedIn", icon: <FaLinkedinIn />, color: "#0A66C2", content: "Our CSR partnership with leading corporations is creating sustainable impact.", likes: 432, comments: 34, shares: 56, image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" }
  ];

  const stats = [
    { number: "50+", label: "Videos", icon: <FiFilm />, delay: 100 },
    { number: "500+", label: "Photos", icon: <FiCamera />, delay: 200 },
    { number: "100K+", label: "Views", icon: <FiEye />, delay: 300 },
    { number: "25K+", label: "Followers", icon: <FiUsers />, delay: 400 }
  ];

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
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
          
          .media-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .media-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1920&q=80');
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
          
          .video-card, .photo-card, .feed-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .video-card:hover, .photo-card:hover, .feed-card:hover {
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
          
          .social-icon {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
          }
          
          .tab-button {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
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
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="media-bg" />
        <div className="media-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Digital Presence
            </span>
            <h1 className="banner-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Digital Media
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Stories that Inspire Action - Stay connected through our latest updates, videos, campaigns, and digital outreach initiatives.
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

      {/* Social Media Links Section */}
      <section className="py-12 bg-gradient-to-r from-[#EAF6E3] to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Connect With Us
            </span>
            <h2 className="section-title text-2xl md:text-3xl font-bold text-[#2C3E2B]">
              Follow Us on Social Media
            </h2>
            <div className="w-12 h-0.5 bg-[#667A62] mx-auto mt-3"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#FF0000" }}>
              <FaYoutube size={26} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "linear-gradient(45deg, #f09433, #d62976, #962fbf)" }}>
              <FaInstagram size={26} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#1877F2" }}>
              <FaFacebookF size={26} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#1DA1F2" }}>
              <FaTwitter size={26} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: "#0A66C2" }}>
              <FaLinkedinIn size={26} />
            </a>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <button
              onClick={() => setActiveMedia('videos')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeMedia === 'videos'
                  ? 'bg-[#667A62] text-white shadow-lg'
                  : 'bg-[#EAF6E3] text-[#2C3E2B] hover:bg-[#667A62]/20'
              }`}
            >
              <FiFilm size={18} /> Videos
            </button>
            <button
              onClick={() => setActiveMedia('photos')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeMedia === 'photos'
                  ? 'bg-[#667A62] text-white shadow-lg'
                  : 'bg-[#EAF6E3] text-[#2C3E2B] hover:bg-[#667A62]/20'
              }`}
            >
              <FiCamera size={18} /> Photos
            </button>
          </div>

          {/* Videos Section */}
          {activeMedia === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div 
                  key={video.id} 
                  className="video-card bg-white rounded-2xl overflow-hidden shadow-lg group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-[#2C3E2B] to-[#667A62] flex items-center justify-center">
                      <FaYoutube className="text-white text-6xl" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <FiPlay className="text-white text-3xl ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2 py-1 bg-[#667A62] text-white text-xs rounded-full">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#2C3E2B] mb-2 line-clamp-1">{video.title}</h3>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FiEye size={12} /> {video.views} views</span>
                      <span className="flex items-center gap-1"><FiCalendar size={12} /> {video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photos Section */}
          {activeMedia === 'photos' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div 
                    key={photo.id} 
                    className="photo-card bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onClick={() => openPhotoModal(photo)}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <FiEye className="text-[#667A62] text-xl" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-[#667A62] text-white text-xs rounded-full">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#2C3E2B] mb-1">{photo.title}</h3>
                      <p className="text-xs text-gray-500">{photo.location} • {photo.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12" data-aos="fade-up">
                <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#667A62] text-white font-semibold rounded-full hover:bg-[#4A5C46] transition-all">
                  <FiGrid /> View All Photos
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Social Media Feeds Section */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Latest Updates
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3">
              Social Media Feeds
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialFeeds.map((feed, index) => (
              <div 
                key={index} 
                className="feed-card bg-white rounded-2xl overflow-hidden shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 p-4 border-b border-[#EAF6E3]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: feed.color }}>
                    {feed.icon}
                  </div>
                  <span className="font-bold text-[#2C3E2B]">{feed.platform}</span>
                </div>
                <div className="h-56 overflow-hidden">
                  <img src={feed.image} alt={feed.platform} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[#4A5C46] text-sm leading-relaxed mb-4">{feed.content}</p>
                  <div className="flex items-center gap-5 text-sm">
                    <span className="flex items-center gap-1 text-gray-500"><FiHeart className="text-red-500" /> {feed.likes} likes</span>
                    <span className="flex items-center gap-1 text-gray-500"><FiMessageCircle /> {feed.comments} comments</span>
                    <span className="flex items-center gap-1 text-gray-500"><FiShare2 /> {feed.shares} shares</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10" data-aos="fade-up">
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#667A62] text-[#667A62] font-semibold rounded-full hover:bg-[#667A62] hover:text-white transition-all">
              <FiBell /> Follow Us for More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FaYoutube className="text-5xl mx-auto mb-4 floating-element" style={{ color: "#FF0000" }} />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-3">
              Subscribe to Our Channel
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              Get regular updates on our initiatives, success stories, and impact videos.
            </p>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all"
            >
              <FaYoutube /> Subscribe Now
            </a>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {showModal && selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-3xl w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-96 object-cover" />
              <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition">
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#2C3E2B] mb-2">{selectedPhoto.title}</h3>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <span><FiCamera className="inline mr-1" /> {selectedPhoto.category}</span>
                <span><FiGlobe className="inline mr-1" /> {selectedPhoto.location}</span>
                <span><FiCalendar className="inline mr-1" /> {selectedPhoto.date}</span>
              </div>
              <p className="text-[#4A5C46] leading-relaxed">
                This photo captures a moment from our {selectedPhoto.title.toLowerCase()} initiative, 
                where we worked with the community to create lasting impact.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 py-2 bg-[#667A62] text-white rounded-lg hover:bg-[#4A5C46] transition flex items-center justify-center gap-2">
                  <FiDownload /> Download
                </button>
                <button className="flex-1 py-2 border border-[#667A62] text-[#667A62] rounded-lg hover:bg-[#667A62] hover:text-white transition flex items-center justify-center gap-2">
                  <FiExternalLink /> Share
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