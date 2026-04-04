import React from 'react';
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

const EventsInitiatives = () => {
  const events = [
    {
      title: 'Annual Health Camp 2024',
      date: 'March 15-20, 2024',
      location: 'Rural Districts, Maharashtra',
      description: 'Free medical checkups and health awareness programs',
    },
    {
      title: 'Women Entrepreneurship Summit',
      date: 'April 5, 2024',
      location: 'Mumbai, India',
      description: 'Empowering women through skill development and mentorship',
    },
    {
      title: 'Tree Plantation Drive',
      date: 'June 5, 2024',
      location: 'Multiple Locations',
      description: 'Planting 10,000 trees for environmental sustainability',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Events & Initiatives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving Change Through Purposeful Engagements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-primary to-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center space-x-2 text-secondary mb-4">
                <FiCalendar />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary mb-4">
                <FiMapPin />
                <span className="text-sm">{event.location}</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsInitiatives;