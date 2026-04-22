import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';

const EventsInitiatives = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: 'Annual Health Camp 2024',
      date: '13',
      month: 'JUN',
      time: '9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Free health checkup and medicine distribution',
      location: 'Community Health Center, Delhi',
    },
    {
      id: 2,
      title: 'Women Entrepreneurship Summit',
      date: '06',
      month: 'MAY',
      time: '10:00 AM - 4:00 PM',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Empowering women through skill development',
      location: 'Convention Hall, Mumbai',
    },
    {
      id: 3,
      title: 'Tree Plantation Drive',
      date: '19',
      month: 'MAY',
      time: '7:00 AM - 11:00 AM',
      image: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Planting 5000 trees for a greener future',
      location: 'City Forest Area, Bangalore',
    },
    {
      id: 4,
      title: 'Education for All Campaign',
      date: '25',
      month: 'JUL',
      time: '8:00 AM - 3:00 PM',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Free books and stationery distribution',
      location: 'Government School, Pune',
    },
  ];

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  const handleViewAllEvents = () => {
    navigate('/events');
  };

  const handleRegisterClick = (event, e) => {
    e.stopPropagation();
    navigate('/get-involved/volunteer', { 
      state: { 
        eventId: event.id,
        eventTitle: event.title,
        eventDate: `${event.date} ${event.month}`,
        eventTime: event.time,
        eventLocation: event.location
      } 
    });
  };

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header - Centered like other pages */}
        <div className="mb-12 text-center">
          <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
            UPCOMING EVENTS
          </span>
          
          <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm">
            Join us in our mission to create lasting change through these impactful events and initiatives
          </p>
        </div>

        {/* Event List */}
        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-center bg-white rounded-[40px] shadow-md border border-[#EAF6E3] p-2 pr-6 hover:shadow-xl transition-all duration-300 hover:border-[#667A62]/30 cursor-pointer"
              onClick={() => handleEventClick(event.id)}
            >
              {/* Image Section with Date Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-full md:w-56 h-36 rounded-[30px] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-[#2C3E2B] rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-2xl font-bold text-white leading-none">{event.date}</span>
                  <span className="text-[10px] font-bold text-[#667A62] uppercase tracking-tighter">{event.month}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow mt-4 md:mt-0 md:ml-14 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#2C3E2B] mb-2 hover:text-[#667A62] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2 hidden md:block">
                  {event.description}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#667A62] text-sm">
                  <FiClock className="w-4 h-4" />
                  <span className="font-medium text-gray-600">{event.time}</span>
                </div>
              </div>

              {/* Action Button - Navigates to Volunteer Page */}
              <div className="mt-4 md:mt-0" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={(e) => handleRegisterClick(event, e)}
                  className="bg-[#EAF6E3] hover:bg-[#2C3E2B] text-[#2C3E2B] hover:text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllEvents}
            className="border-2 border-[#2C3E2B] text-[#2C3E2B] hover:bg-[#2C3E2B] hover:text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsInitiatives;