import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Subscriptionform from "../Forms/SubscriptionForm.jsx";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-primary">
        <div className="footer-primary__logo">
          <h1 className="footer-primary__logo-title">
            <Link to="/">Reactiverse</Link>
          </h1>
          <p className="footer-primary__logo-description">
            A React learning App for beginners
          </p>
        </div>
        <div className="footer-primary__links">
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
          </ul>
        </div>
        <div className="footer-primary__links">
          <h2>Other</h2>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/cookies-policy">Cookies Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Condition</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="footer-primary__form">
          <Subscriptionform />
        </div>
        <div className="footer-secondary">
          <ul className="footer-secondary__socail-links">
            <li>
              <Link to="https://github.com/tehreemfazili">
                <FaGithub size={22} color="#f8e578" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaFacebook size={22} color="#f8e578" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaInstagram size={22} color="#f8e578" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaLinkedin size={22} color="#f8e578" />
              </Link>
            </li>
          </ul>
        </div>
        <p className="footer-secondary__description">
          Copyright &#169;Reactiverse. Designed by Us
        </p>
      </div>
    </div>
  );
};

export default Footer;
