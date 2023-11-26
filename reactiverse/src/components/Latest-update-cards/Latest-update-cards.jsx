import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { LatestUpdateList } from "./latest-update";
import "./Latest-update-cards.scss";

const LatestUpdateCards = () => {
  return (
    <div className="cards-wrapper">
      <h1 className="cards-title">Latest blogs</h1>
      <div className="latest-update-cards">
        {LatestUpdateList.map((item) => {
          return (
            <Link className="latest-update-cards__item" to={item.url}>
              <Image
                src={item.image}
                alt="latest-card-image"
                extraClasses="latest-update-cards__item-image"
              />
              <p className="latest-update-cards__item-title">{item.title}</p>
              <p className="latest-update-cards__item-description">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestUpdateCards;
