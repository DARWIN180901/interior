import { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Play, Pause } from "lucide-react";


import "./Testimonials.css"





const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);        // reference to container
const [isVisible, setIsVisible] = useState(false);  // track visibility

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting); // true when section is visible
      });
    },
    { threshold: 0.2 } // 20% visible = trigger
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) {
      observer.unobserve(containerRef.current);
    }
  };
}, []);


  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This product has completely transformed our workflow. The intuitive design and powerful features have increased our team's productivity by 40%. I can't imagine working without it now!",
      highlight: "Increased productivity by 40%"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a developer, I'm quite picky about tools. This platform exceeded all my expectations with its robust API, excellent documentation, and responsive support team. Highly recommended!",
      highlight: "Exceeded all expectations"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Managing complex projects became effortless with this solution. The real-time collaboration features and insightful analytics have been game-changers for our agency.",
      highlight: "Game-changing solution"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CEO & Founder",
      company: "StartupVenture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From day one, this platform has been instrumental in scaling our business. The customer support is phenomenal, and the feature updates consistently address our evolving needs.",
      highlight: "Instrumental in scaling"
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "UX Designer",
      company: "DesignHub",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The user experience is absolutely flawless. Every interaction feels natural and the design aesthetic is beautiful. It's rare to find a product that balances functionality with such elegant design.",
      highlight: "Absolutely flawless UX"
    },
    {
      id: 6,
      name: "Robert Anderson",
      role: "Operations Manager",
      company: "GlobalTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This tool has revolutionized how we handle our daily operations. The automation features save us hours each week, and the detailed reporting gives us insights we never had before.",
      highlight: "Revolutionized operations"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        style={{
          width: '20px',
          height: '20px',
          fill: i < rating ? '#fbbf24' : 'transparent',
          color: i < rating ? '#fbbf24' : '#d1d5db'
        }}
      />
    ));
  };

  return (
    <>
      <style>{`
        .testimonial-container {
          min-height: 100vh;
          background: transparent;
          padding: 80px 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        
        .testimonial-max-width {
          max-width: 1280px;
          margin: 0 auto;
        }
        
        .testimonial-header {
          text-align: center;
          margin-bottom: 64px;
        }
        
        .testimonial-title {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }
        
        .testimonial-subtitle {
          font-size: 1.25rem;
          color: #c7d2fe;
          max-width: 768px;
          margin: 0 auto 32px auto;
          line-height: 1.7;
        }
        
        .testimonial-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 12px 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .testimonial-stars-container {
          display: flex;
          gap: 2px;
        }
        
        .testimonial-rating-text {
          color: white;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .testimonial-wrapper {
          position: relative;
          margin-bottom: 32px;
        }
        
        .testimonial-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .testimonial-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 48px;
        }
        
        .testimonial-user-section {
          flex-shrink: 0;
          text-align: center;
          min-width: 200px;
        }
        
        .testimonial-image-wrapper {
          position: relative;
          margin-bottom: 24px;
          display: inline-block;
        }
        
        .testimonial-user-image {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 4px solid rgba(255, 255, 255, 0.3);
        }
        
        .testimonial-quote-icon {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .testimonial-user-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin: 0 0 8px 0;
        }
        
        .testimonial-user-role {
          color: #c7d2fe;
          margin: 0 0 8px 0;
          font-size: 1rem;
        }
        
        .testimonial-user-company {
          color: #a5b4fc;
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0;
        }
        
        .testimonial-text-section {
          flex: 1;
        }
        
        .testimonial-text {
          font-size: 1.25rem;
          color: white;
          line-height: 1.7;
          margin: 16px 0 24px 0;
          font-weight: 300;
          font-style: normal;
        }
        
        .testimonial-highlight {
          background: transparent;
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .testimonial-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          padding: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .testimonial-nav-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }
        
        .testimonial-nav-left {
          left: 16px;
        }
        
        .testimonial-nav-right {
          right: 16px;
        }
        
        .testimonial-dots-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 64px;
        }
        
        .testimonial-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }
        
        .testimonial-dot-active {
          background: white;
          transform: scale(1.25);
        }
        
        .testimonial-thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }
        
        .testimonial-thumbnail {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.5s ease;
          background: transparent;
        }
        
        .testimonial-thumbnail:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .testimonial-thumbnail-active {
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 4px solid white;
        }
        
        .testimonial-thumbnail-content {
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .testimonial-thumbnail-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 8px;
        }
        
        .testimonial-thumbnail-name {
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          margin: 0 0 4px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        
        .testimonial-thumbnail-role {
          color: #c7d2fe;
          font-size: 0.75rem;
          text-align: center;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        
        .testimonial-thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-controls-container {
          text-align: center;
        }
        
        .testimonial-control-button {
          color: #c7d2fe;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        
        .testimonial-control-button:hover {
          color: white;
        }
        
        @media (max-width: 1024px) {
          .testimonial-content {
            flex-direction: column;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          .testimonial-title {
            font-size: 2.5rem;
          }
          .testimonial-card {
            padding: 24px;
          }
          .testimonial-nav-button {
            display: none;
          }
          .testimonial-thumbnail-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .testimonial-container {
            padding: 40px 16px;
          }
          .testimonial-title {
            font-size: 2rem;
          }
          .testimonial-content {
            gap: 24px;
          }
        }
      `}</style>

      <div id="testimonial"
  ref={containerRef} 
  className={`testimonial-container ${isVisible ? "animate-visible" : ""}`}
>

        <div className="testimonial-max-width">
          {/* Header */}
          <div className="testimonial-header">
            <h2 className="testimonial-title">
              What Our Users Say
            </h2>
            <p className="testimonial-subtitle">
              Join thousands of satisfied customers who have transformed their workflow with our platform
            </p>
            
          </div>

          {/* Main Testimonial Display */}
          <div className="testimonial-wrapper">
            <div className="testimonial-card">
              <div className="testimonial-content">
                {/* User Image and Info */}
                <div className="testimonial-user-section">
                  <div className="testimonial-image-wrapper">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="testimonial-user-image"
                    />
                    <div className="testimonial-quote-icon">
                      <Quote style={{ width: '24px', height: '24px', color: 'white' }} />
                    </div>
                  </div>
                  <h3 className="testimonial-user-name">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="testimonial-user-role">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="testimonial-user-company">
                    {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Testimonial Text */}
                <div className="testimonial-text-section">
                  <div className="testimonial-stars-container">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="testimonial-highlight">
                    {testimonials[currentIndex].highlight}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial} 
              className="testimonial-nav-button testimonial-nav-left"
            >
              <ChevronLeft style={{ width: '24px', height: '24px', color: 'white' }} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="testimonial-nav-button testimonial-nav-right"
            >
              <ChevronRight style={{ width: '24px', height: '24px', color: 'white' }} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="testimonial-dots-container">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-dot ${index === currentIndex ? 'testimonial-dot-active' : ''}`}
              />
            ))}
          </div>

          {/* Thumbnail Grid */}
          <div className="testimonial-thumbnail-grid">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`testimonial-thumbnail ${index === currentIndex ? 'testimonial-thumbnail-active' : ''}`}
              >
                <div className="testimonial-thumbnail-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-thumbnail-image"
                  />
                  <p className="testimonial-thumbnail-name">
                    {testimonial.name}
                  </p>
                  <p className="testimonial-thumbnail-role">
                    {testimonial.role}
                  </p>
                </div>
                <div 
                  className="testimonial-thumbnail-overlay"
                  style={{ opacity: index === currentIndex ? 1 : 0 }}
                />
              </button>
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="testimonial-controls-container">
           <button
  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
  className="testimonial-control-button"
>
  {isAutoPlaying ? <Pause size={30} /> : <Play size={30} />}
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;