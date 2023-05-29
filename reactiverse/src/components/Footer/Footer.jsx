import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Subscriptionform from "../Forms/SubscriptionForm.jsx";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-primary">
        <div class="footer-primary__logo">
          <h1 class="footer-primary__logo-title">
            <Link to="/">Reactiverse</Link>
          </h1>
          <p class="footer-primary__logo-description">
            A React learning App for beginners
          </p>
        </div>
        <div class="footer-primary__links">
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
        <div class="footer-primary__links">
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
        <div class="footer-primary__form">
          <Subscriptionform />
        </div>
        <div class="footer-secondary">
          <ul class="footer-secondary__socail-links">
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
        <p class="footer-secondary__description">
          Copyright &#169;Reactiverse. Designed by Us
        </p>
      </div>
    </div>
  );
};

export default Footer;
