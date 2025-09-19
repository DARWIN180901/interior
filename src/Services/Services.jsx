import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Services.css";
import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Residential Design", desc: "Crafting cozy, stylish, and functional living spaces.", icon: "🏡" },
  { title: "Commercial Design", desc: "Designing impactful offices and retail spaces.", icon: "🏢" },
  { title: "Space Planning", desc: "Smart layouts that maximize functionality.", icon: "📐" },
  { title: "Furniture & Decor", desc: "Curating furniture, lighting, and accessories.", icon: "🛋️" },
  { title: "Renovation", desc: "Breathing new life into old spaces.", icon: "🔨" },
];

export default function Services() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            // Reset scroll lock when leaving section
            if (isScrollLocked) {
              setIsScrollLocked(false);
              document.body.style.overflow = 'auto';
              document.body.classList.remove('locked');
            }
          }
        });
      },
      { threshold: 0.6 } // trigger when 60% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Cleanup: ensure scroll is unlocked
      document.body.style.overflow = 'auto';
      document.body.classList.remove('locked');
    };
  }, [isScrollLocked]);

  useEffect(() => {
    let scrollTimeout;
    
    const handleWheel = (e) => {
      if (!isVisible || !swiperRef.current) return;

      const swiper = swiperRef.current.swiper;
      
      // Prevent multiple rapid events
      if (swiper.animating) return;
      
      e.preventDefault();

      // Clear any pending scroll unlock
      clearTimeout(scrollTimeout);

      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSlide < services.length - 1) {
          // Lock scroll and move to next slide
          if (!isScrollLocked) {
            setIsScrollLocked(true);
            document.body.style.overflow = 'hidden';
            document.body.classList.add('locked');
          }
          swiper.slideNext();
        } else {
          // At last slide, unlock and continue scrolling
          setIsScrollLocked(false);
          document.body.style.overflow = 'auto';
          document.body.classList.remove('locked');
          
          scrollTimeout = setTimeout(() => {
            window.scrollBy({ top: 100, behavior: 'smooth' });
          }, 50);
        }
      } else {
        // Scrolling up
        if (currentSlide > 0) {
          // Lock scroll and move to previous slide
          if (!isScrollLocked) {
            setIsScrollLocked(true);
            document.body.style.overflow = 'hidden';
            document.body.classList.add('locked');
          }
          swiper.slidePrev();
        } else {
          // At first slide, unlock and continue scrolling
          setIsScrollLocked(false);
          document.body.style.overflow = 'auto';
          document.body.classList.remove('locked');
          
          scrollTimeout = setTimeout(() => {
            window.scrollBy({ top: -100, behavior: 'smooth' });
          }, 50);
        }
      }
    };

    if (isVisible) {
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isVisible, currentSlide, isScrollLocked, services.length]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <section id="services"
      ref={sectionRef}
      className={`services-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="services-heading">Services We Offer</h2>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onSlideChange={handleSlideChange}
        className="services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              {/* SVG Animated Border */}
              <svg className="border-anim" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff00ff" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <rect
                  x="3"
                  y="3"
                  width="calc(100% - 6px)"
                  height="calc(100% - 6px)"
                  rx="15"
                  ry="15"
                />
              </svg>

              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}