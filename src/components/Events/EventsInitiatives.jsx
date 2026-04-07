import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import { FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const EventsInitiatives = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Honoring Yogi Bhajan's Birthday 2020",
      date: "13 JUN",
      time: "8:00 am",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
    },
    {
      id: 2,
      title: "Gong Yoga Relaxation and Meditation",
      date: "06 MAY",
      time: "8:00 am",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
    },
    {
      id: 3,
      title: "September New Moon Gong",
      date: "19 MAY",
      time: "8:00 am",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600",
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader 
        title="EVENTS"
        subtitle="Upcoming Events And Invitations"
      />

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE EVENTS */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
              >
                {/* IMAGE + DATE */}
                <div className="relative">
                  <img
                    src={event.image}
                    className="w-28 h-20 object-cover rounded-xl"
                  />

                  {/* DATE BADGE */}
                  <div className="absolute -bottom-3 left-3 bg-white shadow-md rounded-full px-3 py-1 text-center">
                    <div className="text-sm font-bold text-dark">
                      {event.date.split(" ")[0]}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase">
                      {event.date.split(" ")[1]}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-5">
                  <h3 className="font-semibold text-dark text-lg">
                    {event.title}
                  </h3>

                  <div className="flex items-center text-secondary text-sm mt-1">
                    <FiCalendar className="mr-2" />
                    {event.time}
                  </div>
                </div>

                {/* INFO BUTTON */}
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="bg-dark text-white px-5 py-2 rounded-full text-sm hover:bg-secondary transition"
                >
                  Info
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE VOLUNTEER CARD */}
          <div>
            <div className="bg-secondary rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">Join Our Mission</h3>

              <p className="text-white/90 text-sm mb-6">
                Be part of our spiritual and social initiatives.
              </p>

              <Link to="/volunteer">
                <button className="w-full bg-white text-secondary py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                  Become a Volunteer
                </button>
              </Link>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm mb-3">Upcoming This Month</p>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold">13 JUN</span>
                    <p className="text-white/80">Yogi Bhajan's Birthday</p>
                  </div>
                  <div>
                    <span className="font-bold">06 MAY</span>
                    <p className="text-white/80">Gong Yoga Relaxation</p>
                  </div>
                  <div>
                    <span className="font-bold">19 MAY</span>
                    <p className="text-white/80">New Moon Meditation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EventsInitiatives;