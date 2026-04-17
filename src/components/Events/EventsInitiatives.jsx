import React, { useState, useEffect } from 'react';
import PageHeader from '../Common/PageHeader';
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiHeart, FiArrowRight, FiX, FiShare2, FiBell, FiStar, FiTrendingUp, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaRegCalendarAlt, FaUserPlus, FaRegClock, FaHandsHelping, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsInitiatives = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "Honoring Yogi Bhajan's Birthday 2020",
      date: "13 JUN",
      fullDate: "June 13, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Meditation Hall, Main Center",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      description: "Join us in celebrating the birth anniversary of Yogi Bhajan with special prayers, kirtan, and meditation sessions. A day dedicated to peace, love, and spiritual growth.",
      agenda: [
        "Morning Prayer: 8:00 AM",
        "Kirtan Session: 10:00 AM",
        "Lunch Prasad: 12:30 PM",
        "Meditation Workshop: 2:00 PM",
        "Evening Aarti: 5:00 PM"
      ],
      speakers: ["Swami Ji", "Gurudev Singh", "Yogini Mataji"],
      capacity: 500,
      registered: 320,
      category: "Spiritual"
    },
    {
      id: 2,
      title: "Gong Yoga Relaxation and Meditation",
      date: "06 MAY",
      fullDate: "May 6, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Yoga Hall, Wellness Center",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      description: "Experience the healing power of Gong Yoga. This unique combination of yoga and sound therapy helps in deep relaxation and stress relief.",
      agenda: [
        "Opening Ceremony: 8:00 AM",
        "Yoga Session: 9:00 AM",
        "Gong Bath: 11:00 AM",
        "Lunch Break: 1:00 PM",
        "Sound Healing: 2:00 PM",
        "Closing Meditation: 4:00 PM"
      ],
      speakers: ["Master Gong Healer", "Yoga Acharya", "Sound Therapist"],
      capacity: 300,
      registered: 245,
      category: "Wellness"
    },
    {
      id: 3,
      title: "September New Moon Gong",
      date: "19 MAY",
      fullDate: "May 19, 2024",
      time: "8:00 AM - 7:00 PM",
      location: "Sacred Sound Temple",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80",
      description: "A special New Moon Gong event focusing on inner transformation and manifestation. Harness the energy of the new moon for personal growth.",
      agenda: [
        "New Moon Ritual: 8:00 AM",
        "Gong Meditation: 10:00 AM",
        "Intention Setting: 12:00 PM",
        "Vegetarian Lunch: 1:00 PM",
        "Healing Circle: 3:00 PM",
        "Closing Ceremony: 6:00 PM"
      ],
      speakers: ["Moon Priestess", "Gong Master", "Healing Expert"],
      capacity: 400,
      registered: 378,
      category: "Healing"
    }
  ];

  const upcomingEvents = [
    { date: "13 JUN", title: "Yogi Bhajan's Birthday", time: "8:00 AM" },
    { date: "06 MAY", title: "Gong Yoga Relaxation", time: "8:00 AM" },
    { date: "19 MAY", title: "New Moon Meditation", time: "8:00 AM" },
    { date: "25 JUN", title: "Summer Solstice Celebration", time: "7:00 AM" },
    { date: "15 JUL", title: "Guru Purnima Festival", time: "9:00 AM" }
  ];

  const initiatives = [
    { number: "50+", label: "Events Completed", icon: <FiAward /> },
    { number: "10K+", label: "Participants", icon: <FiUsers /> },
    { number: "25+", label: "Volunteers", icon: <FaHandsHelping /> },
    { number: "100%", label: "Positive Feedback", icon: <FiStar /> }
  ];

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * { font-family: 'Mulish', sans-serif; }
          
          h1, h2, h3, h4, .heading-font { font-family: 'Cormorant Garamond', serif; }
          
          .event-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .event-card:hover {
            transform: translateY(-8px);
          }
          
          .initiative-card {
            transition: all 0.4s ease;
          }
          
          .initiative-card:hover {
            transform: translateY(-5px);
            background: linear-gradient(135deg, #667A62 0%, #2C3E2B 100%);
            color: white;
          }
          
          .initiative-card:hover .initiative-icon,
          .initiative-card:hover .initiative-number,
          .initiative-card:hover .initiative-label {
            color: white;
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
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          .floating-element { animation: float 6s ease-in-out infinite; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .btn-glow:hover {
            box-shadow: 0 0 20px rgba(102, 122, 98, 0.5);
          }
          
          @media (max-width: 768px) {
            .event-card { flex-direction: column; }
          }
        `}
      </style>

      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
            alt="Events Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E2B]/90 to-[#667A62]/70"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div data-aos="fade-up" data-aos-duration="1000">
            <span className="inline-block px-6 py-2 mb-5 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg">
              Join Our Journey
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 heading-font">
              Events & Initiatives
            </h1>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto">
              Discover transformative experiences through our spiritual events, wellness programs, and community initiatives
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Initiatives Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3 heading-font">
              Our Impact
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Making a difference through spiritual and social initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {initiatives.map((item, index) => (
              <div 
                key={index} 
                className="initiative-card bg-gradient-to-br from-[#EAF6E3] to-white rounded-2xl p-6 text-center shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="initiative-icon text-4xl text-[#667A62] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="initiative-number text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-1">
                  {item.number}
                </div>
                <div className="initiative-label text-sm text-gray-600 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Events Section */}
      <section className="py-20 bg-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#667A62] uppercase bg-white rounded-full">
              Upcoming Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-3 heading-font">
              Featured Events
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#4A5C46] max-w-2xl mx-auto text-sm">
              Join us in these transformative spiritual journeys
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events List - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              {events.map((event, index) => (
                <div 
                  key={event.id}
                  className="event-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative md:w-64 h-48 md:h-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#667A62] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {event.category}
                      </div>
                      <div className="absolute -bottom-4 left-4 bg-white shadow-lg rounded-lg px-4 py-2 text-center">
                        <div className="text-xl font-bold text-[#2C3E2B]">
                          {event.date.split(" ")[0]}
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase">
                          {event.date.split(" ")[1]}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <h3 className="font-bold text-[#2C3E2B] text-xl mb-2">
                        {event.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center text-gray-500 text-sm">
                          <FiClock className="mr-2 text-[#667A62]" size={14} />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FiMapPin className="mr-2 text-[#667A62]" size={14} />
                          {event.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <FiUsers className="mr-1 text-[#667A62]" size={14} />
                            <span>{event.registered}/{event.capacity} Registered</span>
                          </div>
                          <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#667A62] rounded-full"
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleViewEvent(event)}
                          className="bg-[#667A62] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4A5C46] transition-all flex items-center gap-2 btn-glow"
                        >
                          View Details <FiArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Volunteer Card & Upcoming Events */}
            <div className="space-y-6">
              {/* Volunteer Card */}
              <div 
                className="bg-gradient-to-br from-[#667A62] to-[#2C3E2B] rounded-2xl p-6 text-white shadow-xl"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaHandsHelping className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Join Our Mission</h3>
                </div>
                
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  Be part of our spiritual and social initiatives. Your contribution can make a difference in someone's life.
                </p>
                
                <Link to="/volunteer">
                  <button className="w-full bg-white text-[#667A62] py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <FaUserPlus size={16} /> Become a Volunteer
                  </button>
                </Link>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <FiBell /> Upcoming This Month
                  </p>
                  
                  <div className="space-y-3">
                    {upcomingEvents.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="min-w-[60px] bg-white/20 rounded-lg px-2 py-1 text-center">
                          <div className="font-bold">{item.date.split(" ")[0]}</div>
                          <div className="text-[9px] uppercase">{item.date.split(" ")[1]}</div>
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-white/70 text-xs">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/events">
                    <button className="w-full mt-4 bg-white/10 text-white py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all">
                      View All Events
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Quick Stats Card */}
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h4 className="font-bold text-[#2C3E2B] mb-4 flex items-center gap-2">
                  <FiHeart className="text-[#667A62]" />
                  Why Attend Our Events?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#EAF6E3] rounded-full flex items-center justify-center mt-0.5">
                      <FiCheckCircle className="text-[#667A62] text-xs" />
                    </div>
                    <p className="text-sm text-gray-600">Transformative spiritual experiences</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#EAF6E3] rounded-full flex items-center justify-center mt-0.5">
                      <FiCheckCircle className="text-[#667A62] text-xs" />
                    </div>
                    <p className="text-sm text-gray-600">Learn from renowned spiritual teachers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#EAF6E3] rounded-full flex items-center justify-center mt-0.5">
                      <FiCheckCircle className="text-[#667A62] text-xs" />
                    </div>
                    <p className="text-sm text-gray-600">Connect with like-minded community</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#EAF6E3] rounded-full flex items-center justify-center mt-0.5">
                      <FiCheckCircle className="text-[#667A62] text-xs" />
                    </div>
                    <p className="text-sm text-gray-600">Free meditation and yoga sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in">
            <FiHeart className="text-5xl text-[#667A62] mx-auto mb-4 floating-element" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 heading-font">
              Don't Miss Out on Upcoming Events
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-4"></div>
            <p className="text-[#EAF6E3] text-base mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new events, workshops, and spiritual gatherings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all btn-glow">
                Subscribe Now <FiArrowRight />
              </button>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#667A62] text-white font-semibold rounded-full hover:bg-[#667A62] transition-all">
                  Contact Us <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <FiShare2 className="text-white" />
                </button>
                <button onClick={closeModal} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <FiX className="text-white" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#667A62] text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{selectedEvent.date.split(" ")[0]}</div>
                <div className="text-xs">{selectedEvent.date.split(" ")[1]}</div>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2C3E2B] mb-3">{selectedEvent.title}</h2>
              
              <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center text-gray-500 text-sm">
                  <FiClock className="mr-2 text-[#667A62]" />
                  {selectedEvent.time}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <FiMapPin className="mr-2 text-[#667A62]" />
                  {selectedEvent.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <FiUsers className="mr-2 text-[#667A62]" />
                  {selectedEvent.registered}/{selectedEvent.capacity} Registered
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedEvent.description}
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold text-[#2C3E2B] mb-3">Event Agenda</h3>
                <div className="space-y-2">
                  {selectedEvent.agenda.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#667A62] rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-[#2C3E2B] mb-3">Speakers & Facilitators</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.speakers.map((speaker, idx) => (
                    <span key={idx} className="bg-[#EAF6E3] text-[#667A62] px-3 py-1 rounded-full text-sm">
                      {speaker}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#EAF6E3] rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#2C3E2B]">Registration Progress</span>
                  <span className="text-sm text-[#667A62] font-bold">{Math.round((selectedEvent.registered / selectedEvent.capacity) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div 
                    className="h-full bg-[#667A62] rounded-full"
                    style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">
                  Only {selectedEvent.capacity - selectedEvent.registered} spots remaining!
                </p>
              </div>
              
              <button className="w-full bg-[#667A62] text-white py-3 rounded-lg font-semibold hover:bg-[#4A5C46] transition-all flex items-center justify-center gap-2 btn-glow">
                Register Now <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsInitiatives;