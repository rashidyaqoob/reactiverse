import "./header.scss";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import HandleSignInBtn from "../Signup/Signup.jsx";

function Header() {
  const logoText = "Reactiverse";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleHamburger() {
    setNavbarOpen((prev) => !prev);
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 767;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
    if (!isMobile) {
      document
        .querySelector(".navbar-container")
        .classList.remove("hamburger-open");
      document
        .querySelector(".navbar-container")
        .classList.remove("hamburger-close");
      setNavbarOpen(false);
    }
  }, [isMobile]);

  // To check whether the page is Homepage or not
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsSticky(true); // Change background color on scroll
      } else {
        setIsSticky(false); // Reset to transparent
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header ${isHomePage ? "header-transparent" : ""} ${
          isSticky ? "sticky" : ""
        }`}
        style={{ position: isSticky ? "fixed" : "" }}
      >
        <div className="main-container">
          <div className="header-logo">
            <Link to="/" className="header-logo__link">
              <p className="header-logo-text">{logoText}</p>
            </Link>
          </div>
          <div
            className={`navbar-container ${
              navbarOpen ? "hamburger-open" : "hamburger-close"
            }`}
          >
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/" className="navbar-item__link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/outfit" className="navbar-item__link">
                    Outfits
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact-us" className="navbar-item__link">
                    Contact Us
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/hooks" className="navbar-item__link">
                    Hooks
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/misc" className="navbar-item__link">
                    Misc
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="user-auth">
              <HandleSignInBtn />
              <Link to="/sign-up" className="user-auth__register">
                Register with us
              </Link>
            </div>
          </div>
          <div className="mobile-hamburger" onClick={handleHamburger}>
            {navbarOpen ? (
              <RxCross1 size={30} className="hamburger-icon-close"></RxCross1>
            ) : (
              <RxHamburgerMenu
                size={30}
                className="hamburger-icon-open"
              ></RxHamburgerMenu>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
