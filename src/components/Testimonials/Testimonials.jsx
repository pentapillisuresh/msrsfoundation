import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by beneficiaries, partners, and donors alike</p>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <FaQuoteLeft className="text-secondary text-3xl mb-4 opacity-50" />
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;