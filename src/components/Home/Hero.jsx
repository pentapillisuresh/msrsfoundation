import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
      title: 'My Image with Caption',
      subtitle: 'Capturing Moments, Creating Memories',
      description: 'Visual storytelling that inspires change',
      animationType: 'splitVertical',
    },
    {
      id: 2,
      image: './images/stronger.jpg',
      title: 'National Building',
      subtitle: 'Stronger Nation, Brighter Future',
      description: "Contributing to India's growth story",
      animationType: 'revealFromCenter',
    },
    {
      id: 3,
      image: './images/education.jpg',
      title: 'Education & Empowerment',
      subtitle: 'Shaping Future Leaders',
      description: 'Quality education for every child',
      animationType: 'blurScale',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
      title: 'ESG & Infrastructure & Yoga',
      subtitle: 'Sustainable Development & Wellness',
      description: 'Environmental Social Governance | Infrastructure Development | Holistic Wellness',
      animationType: 'sliceHorizontal',
    },
    {
      id: 5,
      image: './images/doctor2.avif',
      title: 'Social Drives & Health Care',
      subtitle: 'Caring for Communities',
      description: 'Free health camps | Blood donation drives | Mental wellness programs',
      animationType: 'waveReveal',
    },
    {
      id: 6,
      image: './images/hands.jpg',
      title: 'Trust & CSR Partnership',
      subtitle: 'Collaborating for Sustainable Impact',
      description: 'Join hands with us for meaningful change',
      animationType: 'rotateFlip',
    },
  ];

  const handlePrev = useCallback(() => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slidePrev();
      setTimeout(() => setIsAnimating(false), 1200);
    }
  }, [swiperInstance, isAnimating]);

  const handleNext = useCallback(() => {
    if (swiperInstance && !isAnimating) {
      setIsAnimating(true);
      swiperInstance.slideNext();
      setTimeout(() => setIsAnimating(false), 1200);
    }
  }, [swiperInstance, isAnimating]);

  useEffect(() => {
    if (swiperInstance) {
      const handleSlideChange = () => {
        setActiveIndex(swiperInstance.realIndex);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1200);
      };
      swiperInstance.on('slideChange', handleSlideChange);
      return () => {
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, [swiperInstance]);

  const renderImageAnimation = (banner, idx) => {
    const isActive = activeIndex === idx;
    const animationType = banner.animationType;

    switch (animationType) {
      case 'splitVertical':
        return (
          <div className="split-image-container">
            <div className={`split-half split-half-left ${isActive ? 'animate-merge-left' : 'animate-split-left'}`}>
              <div
                className="split-bg split-bg-left"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
            <div className={`split-half split-half-right ${isActive ? 'animate-merge-right' : 'animate-split-right'}`}>
              <div
                className="split-bg split-bg-right"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
          </div>
        );

      case 'revealFromCenter':
        return (
          <div className="reveal-center-container">
            <div className={`reveal-center-overlay ${isActive ? 'animate-reveal-center' : 'animate-reveal-center-out'}`}>
              <div
                className="reveal-bg"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
          </div>
        );

      case 'blurScale':
        return (
          <div className="blur-scale-container">
            <div
              className={`blur-scale-bg ${isActive ? 'animate-blur-scale-in' : 'animate-blur-scale-out'}`}
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            />
          </div>
        );

      case 'sliceHorizontal':
        return (
          <div className="slice-horizontal-container">
            <div className={`slice-top ${isActive ? 'animate-slice-top-in' : 'animate-slice-top-out'}`}>
              <div
                className="slice-bg slice-bg-top"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
            <div className={`slice-bottom ${isActive ? 'animate-slice-bottom-in' : 'animate-slice-bottom-out'}`}>
              <div
                className="slice-bg slice-bg-bottom"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
          </div>
        );

      case 'waveReveal':
        return (
          <div className="wave-reveal-container">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`wave-strip ${isActive ? `animate-wave-${i + 1}` : 'animate-wave-out'}`}
                style={{
                  backgroundImage: `url(${banner.image})`,
                  backgroundPosition: `${(i / 11) * 100}% center`,
                  backgroundSize: '1200% 100%',
                }}
              />
            ))}
          </div>
        );

      case 'rotateFlip':
        return (
          <div className="rotate-flip-container">
            <div className={`rotate-flip-inner ${isActive ? 'animate-rotate-flip-in' : 'animate-rotate-flip-out'}`}>
              <div
                className="rotate-flip-bg"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
              />
            </div>
          </div>
        );

      default:
        return (
          <div
            className="default-bg"
            style={{
              backgroundImage: `url(${banner.image})`,
            }}
          />
        );
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap');

          * {
            font-family: 'Mulish', sans-serif;
          }

          .hero-title {
            font-family: 'Mulish', sans-serif;
            font-weight: 800;
            letter-spacing: -0.02em;
          }

          .hero-subtitle {
            font-family: 'Mulish', sans-serif;
            font-weight: 500;
            letter-spacing: -0.01em;
          }

          /* ========== ANIMATION 1: SPLIT VERTICAL ========== */
          .split-image-container {
            position: absolute;
            inset: 0;
            display: flex;
            overflow: hidden;
          }

          .split-half {
            position: relative;
            width: 50%;
            height: 100%;
            overflow: hidden;
          }

          .split-bg {
            position: absolute;
            top: 0;
            width: 200%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .split-bg-left {
            left: 0;
            background-position: left center;
          }

          .split-bg-right {
            right: 0;
            background-position: right center;
          }

          .animate-split-left {
            animation: splitLeftOut 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          .animate-split-right {
            animation: splitRightOut 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          .animate-merge-left {
            animation: mergeLeftIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          .animate-merge-right {
            animation: mergeRightIn 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          @keyframes splitLeftOut {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          @keyframes splitRightOut {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }

          @keyframes mergeLeftIn {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          @keyframes mergeRightIn {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }

          /* ========== ANIMATION 2: REVEAL FROM CENTER ========== */
          .reveal-center-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .reveal-center-overlay {
            position: absolute;
            inset: 0;
          }

          .reveal-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .animate-reveal-center {
            animation: revealCenter 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-reveal-center-out {
            animation: revealCenterOut 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes revealCenter {
            0% {
              clip-path: circle(0% at center);
              opacity: 0;
            }
            100% {
              clip-path: circle(150% at center);
              opacity: 1;
            }
          }

          @keyframes revealCenterOut {
            0% {
              clip-path: circle(150% at center);
              opacity: 1;
            }
            100% {
              clip-path: circle(0% at center);
              opacity: 0;
            }
          }

          /* ========== ANIMATION 3: BLUR SCALE ========== */
          .blur-scale-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }

          .blur-scale-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .animate-blur-scale-in {
            animation: blurScaleIn 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-blur-scale-out {
            animation: blurScaleOut 1.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes blurScaleIn {
            0% {
              transform: scale(1.3);
              filter: blur(20px);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              filter: blur(0);
              opacity: 1;
            }
          }

          @keyframes blurScaleOut {
            0% {
              transform: scale(1);
              filter: blur(0);
              opacity: 1;
            }
            100% {
              transform: scale(1.3);
              filter: blur(20px);
              opacity: 0;
            }
          }

          /* ========== ANIMATION 4: SLICE HORIZONTAL ========== */
          .slice-horizontal-container {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .slice-top, .slice-bottom {
            position: relative;
            width: 100%;
            height: 50%;
            overflow: hidden;
          }

          .slice-bg {
            position: absolute;
            width: 100%;
            height: 200%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }

          .slice-bg-top {
            top: 0;
            left: 0;
            background-position: center top;
          }

          .slice-bg-bottom {
            bottom: 0;
            left: 0;
            background-position: center bottom;
          }

          .animate-slice-top-in {
            animation: sliceTopIn 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-slice-top-out {
            animation: sliceTopOut 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-slice-bottom-in {
            animation: sliceBottomIn 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-slice-bottom-out {
            animation: sliceBottomOut 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes sliceTopIn {
            0% { 
              transform: translateY(-100%);
              opacity: 0;
            }
            100% { 
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes sliceTopOut {
            0% { 
              transform: translateY(0);
              opacity: 1;
            }
            100% { 
              transform: translateY(-100%);
              opacity: 0;
            }
          }

          @keyframes sliceBottomIn {
            0% { 
              transform: translateY(100%);
              opacity: 0;
            }
            100% { 
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes sliceBottomOut {
            0% { 
              transform: translateY(0);
              opacity: 1;
            }
            100% { 
              transform: translateY(100%);
              opacity: 0;
            }
          }

          /* ========== ANIMATION 5: WAVE REVEAL ========== */
          .wave-reveal-container {
            position: absolute;
            inset: 0;
            display: flex;
            overflow: hidden;
          }

          .wave-strip {
            flex: 1;
            height: 100%;
            position: relative;
            background-size: 1200% 100%;
            background-repeat: no-repeat;
            transform: translateY(-100%);
            opacity: 0;
            margin-left: -1px;
          }

          .animate-wave-1 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0s; }
          .animate-wave-2 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.07s; }
          .animate-wave-3 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.14s; }
          .animate-wave-4 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.21s; }
          .animate-wave-5 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.28s; }
          .animate-wave-6 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.35s; }
          .animate-wave-7 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.42s; }
          .animate-wave-8 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.49s; }
          .animate-wave-9 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.56s; }
          .animate-wave-10 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.63s; }
          .animate-wave-11 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.70s; }
          .animate-wave-12 { animation: waveIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.77s; }

          .animate-wave-out {
            animation: waveOut 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes waveIn {
            0% { 
              transform: translateY(-100%);
              opacity: 0;
            }
            100% { 
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes waveOut {
            0% { 
              transform: translateY(0);
              opacity: 1;
            }
            100% { 
              transform: translateY(-100%);
              opacity: 0;
            }
          }

          /* ========== ANIMATION 6: ROTATE FLIP ========== */
          .rotate-flip-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
            perspective: 1200px;
          }

          .rotate-flip-inner {
            position: absolute;
            inset: 0;
            transform-style: preserve-3d;
          }

          .rotate-flip-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            backface-visibility: hidden;
          }

          .animate-rotate-flip-in {
            animation: rotateFlipIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-rotate-flip-out {
            animation: rotateFlipOut 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes rotateFlipIn {
            0% {
              transform: rotateY(180deg) scale(1.2);
              opacity: 0;
            }
            100% {
              transform: rotateY(0) scale(1);
              opacity: 1;
            }
          }

          @keyframes rotateFlipOut {
            0% {
              transform: rotateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: rotateY(-180deg) scale(1.2);
              opacity: 0;
            }
          }

          .default-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          /* Gradient Overlay */
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.75) 0%,
              rgba(0, 0, 0, 0.4) 50%,
              rgba(0, 0, 0, 0.6) 100%
            );
            pointer-events: none;
            z-index: 5;
          }

          /* Premium Text Reveal Animation - Slower */
          .hero-content {
            opacity: 0;
            animation: premiumReveal 1s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
            animation-delay: 0.4s;
          }

          @keyframes premiumReveal {
            0% {
              opacity: 0;
              transform: translateY(40px);
              filter: blur(12px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          /* Staggered Text Animations - Slower */
          .category-tag {
            opacity: 0;
            animation: fadeSlideUp 0.7s ease forwards;
            animation-delay: 0.5s;
          }

          .hero-title {
            opacity: 0;
            animation: fadeSlideUp 0.8s ease forwards;
            animation-delay: 0.6s;
          }

          .hero-subtitle {
            opacity: 0;
            animation: fadeSlideUp 0.8s ease forwards;
            animation-delay: 0.8s;
          }

          .hero-description {
            opacity: 0;
            animation: fadeSlideUp 0.8s ease forwards;
            animation-delay: 1.0s;
          }

          .button-group {
            opacity: 0;
            animation: fadeSlideUp 0.8s ease forwards;
            animation-delay: 1.2s;
          }

          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Premium Buttons */
          .btn-primary {
            background: linear-gradient(135deg, #7A8E6B 0%, #5A6E4A 100%);
            color: white;
            padding: 0.9rem 2.4rem;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.03em;
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.15);
            display: inline-block;
            backdrop-filter: blur(4px);
            position: relative;
            overflow: hidden;
            z-index: 10;
          }

          .btn-primary::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.25);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .btn-primary:hover::before {
            width: 300px;
            height: 300px;
          }

          .btn-primary:hover {
            background: linear-gradient(135deg, #6B8060 0%, #4A5E3A 100%);
            transform: translateY(-3px);
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.25);
          }

          .btn-outline {
            border: 2px solid rgba(255, 255, 255, 0.9);
            color: white;
            padding: 0.87rem 2.4rem;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.03em;
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(8px);
            display: inline-block;
            position: relative;
            overflow: hidden;
            z-index: 10;
          }

          .btn-outline::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s;
          }

          .btn-outline:hover::before {
            left: 100%;
          }

          .btn-outline:hover {
            background: white;
            color: #4A5E3A;
            transform: translateY(-3px);
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
          }

          /* Premium Navigation Buttons */
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 52px;
            height: 52px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            z-index: 20;
            color: white;
          }

          .custom-swiper-button-prev {
            left: 2.5rem;
          }

          .custom-swiper-button-next {
            right: 2.5rem;
          }

          .custom-swiper-button-prev:hover,
          .custom-swiper-button-next:hover {
            background: #7A8E6B;
            border-color: #7A8E6B;
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          }

          .custom-swiper-button-prev:active,
          .custom-swiper-button-next:active {
            transform: translateY(-50%) scale(0.95);
          }

          /* Progress Bar */
          .hero-progress-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(255, 255, 255, 0.15);
            z-index: 30;
            overflow: hidden;
          }

          .hero-progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #7A8E6B, #A8C4A0);
            width: 0%;
            transition: width 0.1s linear;
          }

          .swiper-slide {
            overflow: hidden;
          }

          /* Ensure content stays above animations */
          .relative.z-10 {
            z-index: 15;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem !important;
            }
            .hero-subtitle {
              font-size: 1rem !important;
            }
            .hero-description {
              font-size: 0.85rem !important;
            }
            .btn-primary, .btn-outline {
              padding: 0.7rem 1.6rem;
              font-size: 0.85rem;
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
          }

          @media (max-width: 640px) {
            .custom-swiper-button-prev,
            .custom-swiper-button-next {
              display: none;
            }
          }
        `}
      </style>

      {/* Progress Bar */}
      <div className="hero-progress-bar">
        <div className="hero-progress-bar-fill" />
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChangeTransitionStart={() => setIsAnimating(true)}
        onSlideChangeTransitionEnd={() => setIsAnimating(false)}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1200}
        className="h-full w-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full">
              {/* Dynamic Image Animation Based on Type */}
              {renderImageAnimation(banner, idx)}

              {/* Gradient Overlay */}
              <div className="hero-overlay" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <div className="max-w-4xl hero-content">
                  {/* Category Tag */}
                  <div className="category-tag inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                    {idx === 0 && 'Featured Story'}
                    {idx === 1 && 'National Initiative'}
                    {idx === 2 && 'Education First'}
                    {idx === 3 && 'Sustainable Future'}
                    {idx === 4 && 'Community Care'}
                    {idx === 5 && 'Partnership'}
                  </div>

                  <h1
                    className="hero-title text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.2]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {banner.title}
                  </h1>

                  <h2 className="hero-subtitle text-white/95 text-xl md:text-2xl lg:text-3xl mb-4 font-medium tracking-wide">
                    {banner.subtitle}
                  </h2>

                  <p className="hero-description text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    {banner.description}
                  </p>

                  <div className="button-group flex flex-wrap gap-5 justify-center">
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

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="custom-swiper-button-prev"
        aria-label="Previous slide"
        onClick={handlePrev}
      >
        <FiChevronLeft size={24} strokeWidth={2.5} />
      </button>

      <button
        ref={nextRef}
        className="custom-swiper-button-next"
        aria-label="Next slide"
        onClick={handleNext}
      >
        <FiChevronRight size={24} strokeWidth={2.5} />
      </button>
    </section>
  );
};

export default Hero;