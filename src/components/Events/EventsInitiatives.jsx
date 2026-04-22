import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiHeart, FiArrowRight, FiX, FiShare2, FiBell, FiStar, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaUserPlus, FaHandsHelping } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsInitiatives = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "Yogi Bhajan's Birthday 2026",
      date: "13 JUN",
      time: "8:00 AM - 6:00 PM",
      location: "Main Center, Vizag",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      description: "Celebrating the birth anniversary with special prayers, kirtan, and meditation sessions.",
      agenda: ["Morning Prayer: 8:00 AM", "Kirtan Session: 10:00 AM", "Lunch Prasad: 12:30 PM"],
      speakers: ["Swami Ji", "Gurudev Singh"],
      capacity: 500,
      registered: 320,
      category: "Spiritual"
    },
    {
      id: 2,
      title: "Gong Yoga Relaxation",
      date: "06 MAY",
      time: "8:00 AM - 5:00 PM",
      location: "Wellness Center, Hyderabad",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      description: "Experience healing power through a unique combination of yoga and sound therapy.",
      agenda: ["Opening: 8:00 AM", "Gong Bath: 11:00 AM", "Sound Healing: 2:00 PM"],
      speakers: ["Gong Healer", "Yoga Acharya"],
      capacity: 300,
      registered: 245,
      category: "Wellness"
    },
    {
      id: 3,
      title: "New Moon Meditation",
      date: "19 MAY",
      time: "8:00 AM - 7:00 PM",
      location: "Sacred Sound Temple",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80",
      description: "Harness the energy of the new moon for deep personal growth and inner transformation.",
      agenda: ["Ritual: 8:00 AM", "Meditation: 10:00 AM", "Healing Circle: 3:00 PM"],
      speakers: ["Moon Priestess", "Gong Master"],
      capacity: 400,
      registered: 378,
      category: "Healing"
    }
  ];

  const upcomingEvents = [
    { date: "13 JUN", title: "Yogi Bhajan B-day", time: "8:00 AM" },
    { date: "06 MAY", title: "Gong Yoga Session", time: "8:00 AM" },
    { date: "19 MAY", title: "New Moon Ritual", time: "8:00 AM" }
  ];


  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="bg-[#FCFDFB] font-sans selection:bg-[#667A62] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Mulish', sans-serif; }
        
        .event-card { transition: all 0.3s ease; height: 160px; }
        .event-card:hover { transform: translateX(8px); box-shadow: 0 10px 25px rgba(44, 62, 43, 0.08); }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }
      `}</style>

      {/* Premium Banner Section - Redesigned */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Events Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              JOIN OUR JOURNEY
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-serif" data-aos="fade-up" data-aos-delay="200">
            Events & Initiatives
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            Discover transformative experiences through our spiritual events, wellness programs, and community initiatives.
            Join us on a journey of growth and connection.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

   

      {/* Content Section */}
      <section className="py-20 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              UPCOMING PROGRAMS
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              Featured Events
            </h2>
            <p className="text-[#4A5C46] text-sm max-w-2xl mx-auto">
              Join us in these transformative spiritual journeys
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* LEFT SIDE: Fixed Height Cards */}
            <div className="lg:col-span-2 space-y-4">
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="event-card flex bg-white border border-[#EAF6E3] overflow-hidden"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {/* Small Image Thumbnail */}
                  <div className="w-40 md:w-52 h-full flex-shrink-0 relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#667A62] text-white text-[8px] font-bold px-2 py-0.5 uppercase">
                      {event.category}
                    </div>
                  </div>

                  {/* Concise Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-[#2C3E2B] text-lg line-clamp-1">{event.title}</h4>
                        <div className="text-right ml-2">
                          <span className="text-[#667A62] font-bold text-sm block">{event.date.split(" ")[0]}</span>
                          <span className="text-gray-400 text-[9px] block leading-none">{event.date.split(" ")[1]}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 mt-1 mb-2">
                        <div className="flex items-center text-gray-400 text-[10px]">
                          <FiClock className="mr-1" /> {event.time.split(" - ")[0]}
                        </div>
                        <div className="flex items-center text-gray-400 text-[10px]">
                          <FiMapPin className="mr-1" /> {event.location.split(",")[0]}
                        </div>
                      </div>
                      
                      <p className="text-[#4A5C46] text-xs line-clamp-2 leading-relaxed mb-2">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#667A62]" 
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-gray-400">{event.registered} joined</span>
                      </div>
                      <button 
                        onClick={() => handleViewEvent(event)}
                        className="text-[#667A62] text-[11px] font-bold flex items-center gap-1 hover:text-[#2C3E2B] transition-colors"
                      >
                        DETAILS <FiArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: Sidebar */}
            <div className="space-y-6">
              {/* Volunteer Sticky Card */}
              <div className="bg-[#2C3E2B] p-6 text-white shadow-xl">
                <FaHandsHelping className="text-[#667A62] text-3xl mb-4" />
                <h3 className="font-serif text-xl mb-2">Want to lead?</h3>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">Join MSRS Foundation as a coordinator and help us organize impactful community events.</p>
                <Link to="/volunteer">
                  <button className="w-full bg-[#667A62] text-white py-2 text-xs font-bold hover:bg-[#7a8f76] transition-all flex items-center justify-center gap-2">
                    <FaUserPlus /> JOIN THE TEAM
                  </button>
                </Link>
              </div>

              {/* Upcoming Mini List */}
              <div className="bg-white p-5 border border-[#EAF6E3]">
                <h4 className="text-[#2C3E2B] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FiBell className="text-[#667A62]" /> Next in Calendar
                </h4>
                <div className="space-y-4">
                  {upcomingEvents.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                      <div className="bg-[#F7F9F5] p-2 text-center min-w-[45px] border border-transparent group-hover:border-[#667A62] transition-all">
                        <div className="text-[10px] font-bold text-[#2C3E2B]">{item.date.split(" ")[0]}</div>
                        <div className="text-[8px] text-gray-400">{item.date.split(" ")[1]}</div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#2C3E2B] line-clamp-1">{item.title}</p>
                        <p className="text-[9px] text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Attend Card */}
              <div className="bg-white p-5 border border-[#EAF6E3]">
                <h4 className="font-bold text-[#2C3E2B] text-sm mb-3 flex items-center gap-2">
                  <FiHeart className="text-[#667A62]" size={14} />
                  Why Attend?
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#667A62] text-[10px] mt-0.5" />
                    <p className="text-[10px] text-[#4A5C46]">Transformative spiritual experiences</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#667A62] text-[10px] mt-0.5" />
                    <p className="text-[10px] text-[#4A5C46]">Learn from renowned teachers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#667A62] text-[10px] mt-0.5" />
                    <p className="text-[10px] text-[#4A5C46]">Connect with like-minded community</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Don't Miss Out on Upcoming Events
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Subscribe to stay updated about our latest events and spiritual gatherings.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <button className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm hover:bg-[#667A62] hover:text-white transition-all shadow-md">
                Subscribe Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </button>
              <Link to="/contact" className="px-5 py-2.5 border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#2C3E2B] transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-white max-w-xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="h-48 relative">
              <img src={selectedEvent.image} className="w-full h-full object-cover" alt="Event" />
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full hover:bg-black/40">
                <FiX />
              </button>
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl text-[#2C3E2B] mb-2">{selectedEvent.title}</h2>
              <div className="flex gap-4 text-gray-500 text-xs mb-4">
                <span className="flex items-center gap-1"><FiCalendar /> {selectedEvent.date}</span>
                <span className="flex items-center gap-1"><FiMapPin /> {selectedEvent.location}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{selectedEvent.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-[10px] uppercase text-gray-400 mb-2">Schedule</h4>
                  <ul className="text-xs space-y-1 text-gray-600">
                    {selectedEvent.agenda.map((a, i) => <li key={i}>• {a}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase text-gray-400 mb-2">Speakers</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedEvent.speakers.map((s, i) => <span key={i} className="bg-gray-100 px-2 py-0.5 text-[10px]">{s}</span>)}
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#667A62] text-white py-3 font-bold text-sm tracking-widest hover:bg-[#2C3E2B] transition-all">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsInitiatives;