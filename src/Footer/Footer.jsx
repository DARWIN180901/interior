import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left Section - Logo & Name */}
      <div className="footer-left">
        <img src="/logo.png" alt="Company Logo" className="footer-logo" />
        <span className="footer-company">MyCompany</span>
      </div>

      {/* Right Section - Icons + Info */}
      <div className="footer-right">
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="mailto:example@mail.com">
            <MdEmail />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="footer-info">
          <p>📍 123 Main Street, City, Country</p>
          <p>📞 +91 9876543210</p>
        </div>
      </div>
    </footer>
  );
}
