import "./Homepage-banner.scss";
import Image from "../Image/Image.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Heading1 from "../Headings/Heading-1";

function HomepageBanner() {
  const [homepage_banner, setHomepageBanner] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => {
        setHomepageBanner(data.homepage_banner_content);
      });
  }, []);

  return (
    <>
      <div className="homepage-banner">
        <div className="homepage-banner__img-container">
          <Image
            extraClasses="homepage-banner__img"
            src={require("../../assets/images/homepage-banner.jpeg")}
            altText="HomePage Banner"
          />
        </div>
        <div className="homepage-banner__content-container">
          <Heading1
            heading1_text={homepage_banner.homepage_banner_title}
            extra_heading1_classes="homepage-banner__title"
          />
          <p className="homepage-banner__description">
            {"A platform to dive into React"}
          </p>
          <div className="homepage-banner__btn-container">
            <Link
              to="https://react.dev/learn"
              className="homepage-banner__react-link"
            >
              Learn React
            </Link>
            <Link to="/blogs" className="homepage-banner__react-link">
              Our Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageBanner;
