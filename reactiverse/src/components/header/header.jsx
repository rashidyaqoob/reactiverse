import "./header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const logoText = "Reactiverse";
  const [state, setState] = useState("Sign In For Magic");
  function handleBtn() {
    setState("Whoa!");
  }
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
  return (
    <>
      <header className="header">
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
                  <Link to="/about" className="navbar-item__link">
                    About
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
              </ul>
            </nav>
            <div className="user-auth">
              <button className="user-auth__btn" onClick={handleBtn}>
                {state}
              </button>
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