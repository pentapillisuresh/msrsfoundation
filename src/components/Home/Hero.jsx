import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Button from '../Common/Button';

const Hero = () => {
  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200',
      title: 'Transforming Communities. Empowering Lives.',
      subtitle: 'Driving Sustainable Impact.',
      description: 'MAHA SHREE RUDRA SAMSTHANAM FOUNDATION is a Government-registered, CSR-eligible organization committed to delivering scalable, transparent, and high-impact social development initiatives across India.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200',
      title: 'Building a Better Nation',
      subtitle: 'Through Education & Empowerment',
      description: 'Join us in our mission to create sustainable development and inclusive growth for all communities.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
      title: 'Education & Empowerment',
      subtitle: 'Shaping Future Leaders',
      description: 'Providing quality education and skill development opportunities to underprivileged children and youth.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
      title: 'Environmental & Social Governance',
      subtitle: 'Sustainable Infrastructure Development',
      description: 'Creating eco-friendly and sustainable solutions for community development.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
      title: 'Healthcare & Social Drives',
      subtitle: 'Wellness for All',
      description: 'Comprehensive healthcare initiatives and awareness campaigns for rural communities.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
      title: 'Trusted CSR Partnership',
      subtitle: 'Collaborate for Impact',
      description: 'Join hands with us for meaningful corporate social responsibility initiatives.',
    },
  ];

  return (
    <section className="relative h-screen mt-16">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div 
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="container-custom px-4">
                  <div data-aos="fade-up" className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
                      {banner.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-secondary font-semibold mb-6">
                      {banner.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                      {banner.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button to="/donate" variant="primary" size="lg">
                        Donate Now
                      </Button>
                      <Button to="/get-involved#corporate" variant="outline" size="lg">
                        Partner With Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;