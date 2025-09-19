import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
      const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <style>{`
        .contact-container {
          min-height: 100vh;
          background: transparent;
          display: flex;
          align-items: center;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .contact-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          pointer-events: none;
        }

        .contact-max-width {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          min-height: 600px;
        }

        .contact-info-section {
          background-color:  #2c003e;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .contact-info-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="70" r="1" fill="rgba(255,255,255,0.12)"/><circle cx="70" cy="10" r="1.2" fill="rgba(255,255,255,0.09)"/><circle cx="10" cy="60" r="0.8" fill="rgba(255,255,255,0.11)"/><circle cx="90" cy="80" r="1.8" fill="rgba(255,255,255,0.07)"/></svg>');
          opacity: 0.6;
          pointer-events: none;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0 0 16px 0;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 40px 0;
          line-height: 1.6;
          font-weight: 300;
        }

        .contact-info-list {
          space-y: 32px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .contact-icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px;
          flex-shrink: 0;
        }

        .contact-info-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin: 0 0 4px 0;
        }

        .contact-info-content p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.5;
        }

        .contact-form-section {
          background: rgba(255, 255, 255, 0.03);
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
          text-align: center;
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin: 0 0 40px 0;
          font-size: 1.125rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: rgba(99, 102, 241, 0.8);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
          font-family: inherit;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .submit-button {
          background-color:  #4d0868ff;
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          position: relative;
          overflow: hidden;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(129, 131, 243, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .success-message {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 16px;
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          animation: slideIn 0.3s ease;
        }

        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }
        
.contact-container {
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 1s ease, transform 1s ease;
}

.contact-container.animate-visible {
  opacity: 1;
  transform: scale(1);
}


        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          
          .contact-info-section,
          .contact-form-section {
            padding: 40px 24px;
          }
          
          .contact-title {
            font-size: 2.5rem;
          }
          
          .form-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-container {
            padding: 20px 16px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-title {
            font-size: 2rem;
          }
          
          .contact-info-section,
          .contact-form-section {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div id='contact' ref={sectionRef} className={`contact-container ${isVisible ? 'animate-visible' : ''}`}>

        <div className="contact-max-width">
          <div className="contact-grid">
            {/* Contact Information - Left Half */}
            <div className="contact-info-section">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Mail style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div className="contact-info-content">
                    <h3>Email Us</h3>
                    <p>hello@company.com</p>
                    <p>support@company.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Phone style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div className="contact-info-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <MapPin style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div className="contact-info-content">
                    <h3>Visit Us</h3>
                    <p>123 Business District</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <Clock style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div className="contact-info-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Half */}
            <div className="contact-form-section">
              <h3 className="form-title">Send Message</h3>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitStatus === 'success' ? (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <div className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name (Optional)"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        <Send style={{ width: '20px', height: '20px' }} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;