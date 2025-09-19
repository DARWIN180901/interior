import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Toggle visibility whenever footer enters/leaves viewport
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 } // 10% visibility
  );

  if (footerRef.current) {
    observer.observe(footerRef.current);
  }

  return () => {
    if (footerRef.current) {
      observer.unobserve(footerRef.current);
    }
  };
}, []);


  return (
    <footer ref={footerRef} className={`footer ${isVisible ? 'animate' : ''}`}>
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-section company-section">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-icon">🚀</span>
              <h2 className="company-name">UrbanNest</h2>
            </div>
            <p className="company-description">
               We provide top-notch services that are thoughtfully designed to cater
            to the unique requirements of each client, ensuring that every
            project reflects both creativity and precision.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services-section">
          <h3 className="section-title">Our Services</h3>
          <ul className="footer-links">
            <li><a href="#web-dev">Commercial Design</a></li>
            <li><a href="#mobile-app">Residential  Design</a></li>
            <li><a href="#ui-design">Furniture & Decor</a></li>
            <li><a href="#digital-marketing">Renovations</a></li>
            <li><a href="#consulting">Space Planning</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h3 className="section-title">Get in Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>123 Innovation Street, Saibaba Colony, Coimbatore - 625579.</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+91 7200733442</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p>darwinkumar18emglitz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="footer-bottom">
        <div className="social-newsletter">
          <div className="social-media">
            <h4>Follow Us</h4>
           <div className="social-icons">
  <a href="#facebook" className="social-icon facebook">
    <FaFacebookF />
  </a>
  <a href="#twitter" className="social-icon twitter">
    <FaTwitter />
  </a>
  <a href="#instagram" className="social-icon instagram">
    <FaInstagram />
  </a>
  <a href="#linkedin" className="social-icon linkedin">
    <FaLinkedinIn />
  </a>
  <a href="#youtube" className="social-icon youtube">
    <FaYoutube />
  </a>
  <a href="#whatsapp" className="social-icon whatsapp">
    <FaWhatsapp />
  </a>
</div>

          </div>

         
        </div>

        <div className="footer-divider"></div>

        <div className="copyright">
          <div className="copyright-text">
            <p>&copy; 2025 UrbanNest. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;