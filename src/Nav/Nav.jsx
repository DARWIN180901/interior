import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop for mobile menu */}
      {open && (
        <div 
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
      
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Logo with gradient animation */}
          <div className="logo-wrapper">
            <h1 className="logo">UrbanNest</h1>
            <div className="logo-glow" />
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="nav-item-wrapper"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a href={link.href} className="nav-link-desktop">
                  <span className="nav-text">{link.name}</span>
                  <ArrowRight size={16} className="nav-arrow" />
                </a>
                
                {/* Animated underline */}
                <div className="nav-underline" />
                
                {/* Hover glow effect */}
                <div className="nav-glow" />
              </div>
            ))}
            
            {/* CTA Button */}
            <button className="cta-button">
              <span className="cta-text">Get Started</span>
              <div className="cta-gradient" />
              <div className="cta-shine" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="menu-toggle"
          >
            <div className="menu-icon">
              {open ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className="menu-toggle-glow" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-nav-items">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="mobile-nav-item"
                  style={{ 
                    transitionDelay: open ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="mobile-nav-link"
                  >
                    <span className="mobile-nav-text">{link.name}</span>
                    <ArrowRight size={18} className="mobile-nav-arrow" />
                    <div className="mobile-nav-bg" />
                  </a>
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div 
                className="mobile-cta-wrapper"
                style={{ 
                  transitionDelay: open ? `${navLinks.length * 100}ms` : '0ms' 
                }}
              >
                <button className="mobile-cta-button">
                  <span className="mobile-cta-text">Get Started</span>
                  <div className="mobile-cta-gradient" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

     
    </>
  );
}