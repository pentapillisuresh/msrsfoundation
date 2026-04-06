import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
      title: 'My Image with Caption',
      subtitle: 'Capturing Moments, Creating Memories',
      description: 'Visual storytelling that inspires change',
    },
    {
      id: 2,
      image: './images/stronger.jpg',
      title: 'National Building',
      subtitle: 'Stronger Nation, Brighter Future',
      description: 'Contributing to India\'s growth story',
    },
    {
      id: 3,
      image: './images/education.jpg',
      title: 'Education & Empowerment',
      subtitle: 'Shaping Future Leaders',
      description: 'Quality education for every child',
    },
    {
      id: 4,
      image: './images/yoga.jpg',
      title: 'ESG & Infrastructure & Yoga',
      subtitle: 'Sustainable Development & Wellness',
      description: 'Environmental Social Governance | Infrastructure Development | Holistic Wellness',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1600&q=80',
      title: 'Social Drives & Health Care',
      subtitle: 'Caring for Communities',
      description: 'Free health camps | Blood donation drives | Mental wellness programs',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80',
      title: 'Trust & CSR Partnership',
      subtitle: 'Collaborating for Sustainable Impact',
      description: 'Join hands with us for meaningful change',
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap');

        .hero-title {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        .hero-subtitle, .hero-description, .btn-primary, .btn-outline {
          font-family: 'Inter', sans-serif;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.4) 40%,
            rgba(0,0,0,0.6) 100%
          );
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 10s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .swiper-slide-active .hero-bg {
          transform: scale(1.1);
        }

        /* PREMIUM BUTTONS */
        .btn-primary {
          background: linear-gradient(135deg, #7A8E6B 0%, #5A6E4A 100%);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.02em;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.2);
          display: inline-block;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #6B8060 0%, #4A5E3A 100%);
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.3);
        }

        .btn-outline {
          border: 2px solid rgba(255,255,255,0.9);
          color: white;
          padding: 0.95rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.02em;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
          display: inline-block;
        }

        .btn-outline:hover {
          background: white;
          color: #4A5E3A;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          border-color: white;
        }

        /* PAGINATION */
        .hero-pagination {
          bottom: 2rem !important;
          z-index: 20;
        }
        
        .hero-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.6);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .hero-pagination .swiper-pagination-bullet-active {
          background: #7A8E6B !important;
          width: 28px;
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(122,142,107,0.6);
        }

        /* NAV BUTTONS */
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          z-index: 20;
          color: white;
        }

        .custom-swiper-button-prev {
          left: 2rem;
        }

        .custom-swiper-button-next {
          right: 2rem;
        }

        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          background: #7A8E6B;
          border-color: #7A8E6B;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .custom-swiper-button-prev:active,
        .custom-swiper-button-next:active {
          transform: translateY(-50%) scale(0.98);
        }

        .custom-swiper-button-prev.swiper-button-disabled,
        .custom-swiper-button-next.swiper-button-disabled {
          opacity: 0.4;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* TEXT ANIMATIONS */
        .hero-content {
          animation: fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* CATEGORY TAGS */
        .category-tag {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(122, 142, 107, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(122, 142, 107, 0.5);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          color: #fff;
          text-transform: uppercase;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
          .hero-description {
            font-size: 0.95rem !important;
          }
          .btn-primary, .btn-outline {
            padding: 0.75rem 1.8rem;
            font-size: 0.9rem;
          }
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            width: 40px;
            height: 40px;
          }
          .custom-swiper-button-prev {
            left: 1rem;
          }
          .custom-swiper-button-next {
            right: 1rem;
          }
          .category-tag {
            font-size: 0.7rem;
            padding: 0.35rem 1rem;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 640px) {
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            display: none;
          }
        }
        `}
      </style>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        pagination={{ 
          clickable: true, 
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        autoplay={{ 
          delay: 6000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        speed={1200}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              
              <div
                className="hero-bg"
                style={{ backgroundImage: `url(${banner.image})` }}
              />

              <div className="hero-overlay" />

              <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <div className="max-w-4xl hero-content">
                  
                  {/* Category Tag */}
                
                  
                  <h1 className="hero-title text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.2]">
                    {banner.title}
                  </h1>

                  <h2 className="hero-subtitle text-white/95 text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold tracking-wide">
                    {banner.subtitle}
                  </h2>

                  {/* <p className="hero-description text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {banner.description}
                  </p> */}

                  <div className="flex flex-wrap gap-5 justify-center">
                    <Link to="/donate" className="btn-primary">
                      Donate Now
                    </Link>

                    <Link to="/get-involved#corporate" className="btn-outline">
                      Partner With Us
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <button 
        ref={prevRef}
        className="custom-swiper-button-prev"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={26} strokeWidth={2.2} />
      </button>

      <button 
        ref={nextRef}
        className="custom-swiper-button-next"
        aria-label="Next slide"
      >
        <FiChevronRight size={26} strokeWidth={2.2} />
      </button>

      <div className="swiper-pagination hero-pagination"></div>
    </section>
  );
};

export default Hero;