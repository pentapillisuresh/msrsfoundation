import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiArrowRight, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const EventsInitiatives = () => {
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Annual Health Camp 2024",
      category: "healthcare",
      date: "March 15-20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Rural Districts, Maharashtra",
      description: "Free medical checkups, health awareness programs, and medicine distribution for underprivileged communities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      beneficiaries: "5000+ expected",
      status: "upcoming",
      registrationLink: "/volunteer"
    },
    {
      id: 2,
      title: "Women Entrepreneurship Summit",
      category: "women",
      date: "April 5, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Mumbai, India",
      description: "Empowering women through skill development, mentorship programs, and networking opportunities with successful entrepreneurs.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
      beneficiaries: "1000+ women",
      status: "upcoming",
      registrationLink: "/get-involved#corporate"
    },
    {
      id: 3,
      title: "Tree Plantation Drive 2024",
      category: "environment",
      date: "June 5, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Multiple Locations Across India",
      description: "Planting 10,000 trees to combat climate change and promote environmental sustainability.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600",
      beneficiaries: "Environmental impact",
      status: "upcoming",
      registrationLink: "/volunteer"
    },
    {
      id: 4,
      title: "Education for All - Book Donation Drive",
      category: "education",
      date: "January 15-30, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "50+ Schools in Rural Areas",
      description: "Distributing books, stationery, and educational materials to underprivileged students.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      beneficiaries: "10,000+ students",
      status: "completed",
      registrationLink: "/donate"
    },
    {
      id: 5,
      title: "Skill Development Workshop",
      category: "education",
      date: "February 10-25, 2024",
      time: "9:30 AM - 5:30 PM",
      location: "Pune, Maharashtra",
      description: "Vocational training in digital marketing, tailoring, and computer skills for youth.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
      beneficiaries: "500+ youth",
      status: "completed",
      registrationLink: "/get-involved#volunteer"
    },
    {
      id: 6,
      title: "Goshala Seva Program",
      category: "spiritual",
      date: "Every Saturday",
      time: "8:00 AM - 11:00 AM",
      location: "Goshala, Gujarat",
      description: "Cow feeding, shelter maintenance, and medical care for abandoned cattle.",
      image: "https://images.unsplash.com/photo-1546443046-1a6b8c2a7b8f?w=600",
      beneficiaries: "500+ cows",
      status: "ongoing",
      registrationLink: "/volunteer"
    },
    {
      id: 7,
      title: "Disaster Relief Camp",
      category: "disaster",
      date: "Ongoing",
      time: "24/7 Emergency Response",
      location: "Flood-affected regions",
      description: "Emergency food, shelter, and medical support for disaster victims.",
      image: "https://images.unsplash.com/photo-1598977127918-7f61be0bb7ac?w=600",
      beneficiaries: "10,000+ families",
      status: "ongoing",
      registrationLink: "/donate"
    },
    {
      id: 8,
      title: "Rural Development Conference",
      category: "rural",
      date: "December 5-7, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Delhi, India",
      description: "Bringing together stakeholders to discuss rural development strategies and sustainable solutions.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      beneficiaries: "Policy makers & NGOs",
      status: "upcoming",
      registrationLink: "/schedule-meeting"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: '🎯' },
    { id: 'upcoming', name: 'Upcoming', icon: '📅' },
    { id: 'ongoing', name: 'Ongoing', icon: '🔄' },
    { id: 'completed', name: 'Completed', icon: '✅' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'women', name: 'Women Empowerment', icon: '👩' },
    { id: 'environment', name: 'Environment', icon: '🌱' },
    { id: 'rural', name: 'Rural Development', icon: '🏘️' },
    { id: 'disaster', name: 'Disaster Relief', icon: '🚨' },
    { id: 'spiritual', name: 'Spiritual', icon: '🛕' }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : filter === 'upcoming' 
      ? events.filter(e => e.status === 'upcoming')
      : filter === 'ongoing'
        ? events.filter(e => e.status === 'ongoing')
        : filter === 'completed'
          ? events.filter(e => e.status === 'completed')
          : events.filter(e => e.category === filter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'ongoing': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'upcoming': return 'Upcoming';
      case 'ongoing': return 'Ongoing';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Events & Initiatives"
        subtitle="Driving Change Through Purposeful Engagements"
        description="Explore our curated events, awareness campaigns, and on-ground initiatives aimed at creating meaningful social impact and community participation."
      />
      
      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-secondary/10 to-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center" data-aos="fade-up">
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm text-gray-600 mt-2">Events Completed</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-secondary">25+</div>
              <div className="text-sm text-gray-600 mt-2">Ongoing Initiatives</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-secondary">100K+</div>
              <div className="text-sm text-gray-600 mt-2">Beneficiaries Reached</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-secondary">15+</div>
              <div className="text-sm text-gray-600 mt-2">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12" data-aos="fade-up">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    filter === cat.id
                      ? 'bg-secondary text-white shadow-lg transform scale-105'
                      : 'bg-primary text-dark hover:bg-secondary/20'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white text-sm space-x-3">
                      <div className="flex items-center space-x-1">
                        <FiCalendar className="text-xs" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin className="text-xs" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <FiClock />
                      <span>{event.time}</span>
                    </div>
                    {event.beneficiaries && (
                      <div className="flex items-center space-x-2 text-sm text-secondary">
                        <FiUsers />
                        <span>{event.beneficiaries}</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>View Details</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedEvent.status)}`}>
                  {getStatusText(selectedEvent.status)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark mb-4">{selectedEvent.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <FiCalendar className="text-secondary" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FiClock className="text-secondary" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FiMapPin className="text-secondary" />
                  <span>{selectedEvent.location}</span>
                </div>
                {selectedEvent.beneficiaries && (
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FiUsers className="text-secondary" />
                    <span>Beneficiaries: {selectedEvent.beneficiaries}</span>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-dark mb-2">About this Event</h4>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>
              
              <div className="flex gap-4">
                <Link to={selectedEvent.registrationLink} className="flex-1">
                  <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                    Register Now
                  </button>
                </Link>
                <Link to="/donate" className="flex-1">
                  <button className="w-full border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors">
                    Support This Cause
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 gradient-bg">
        <div className="container-custom text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4" data-aos="fade-up">
            Want to Partner or Sponsor an Event?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
            Collaborate with us to create meaningful impact through our events and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
            <Link to="/schedule-meeting">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Schedule a Meeting
              </button>
            </Link>
            <Link to="/get-involved#corporate">
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors">
                Become a Partner
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsInitiatives;