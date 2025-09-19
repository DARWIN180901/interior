import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutVideooo from "../assets/DEMO2.mp4"; // adjust path

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section ref={aboutRef} className="about-section" id="about">
      <div className="about-heading">
        <h2>Our Services</h2>
      </div>

      <div className="about-content">
        <div className={`video-container ${isVisible ? "slide-in-left" : ""}`}>
          <video src={aboutVideooo} autoPlay loop muted />
        </div>

        <div className={`content-container ${isVisible ? "slide-in-right" : ""}`}>
          <p>
            We provide top-notch services that are thoughtfully designed to cater
            to the unique requirements of each client, ensuring that every
            project reflects both creativity and precision. Our dedicated team
            of experts combines innovative ideas with practical solutions to
            deliver outcomes that exceed expectations, paying meticulous
            attention to every detail from the initial concept to final
            execution. By leveraging the latest tools and industry best
            practices, we ensure high-quality delivery across all phases of a
            project, while maintaining clear communication and collaboration
            throughout. From design and planning to implementation and
            refinement, our commitment to excellence drives us to create
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
