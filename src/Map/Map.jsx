import { useEffect, useRef, useState } from "react";
import "./Map.css";

export default function MapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ padding: "60px 20px", background: "transparent", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", color: "#ffffffff" }}>
        📍 Find Us on the Map
      </h2>
      <p style={{ color: "#ffffffff", marginBottom: "30px" }}>
        Our office location is shown below. Come visit us anytime!
      </p>
      <div className="map-container">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.1027207174593!2d76.94269949153741!3d11.030926787407568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8592ca59c2f83%3A0xaab46139fed5e20c!2semglitz%20technologies!5e0!3m2!1sen!2sin!4v1758199685537!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}