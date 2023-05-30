import Image from "../Image/Image.jsx";
import "./Outfit-card.scss";

const Outfitcard = ({
  outfit_rate,
  outfit_brand,
  outfit_offer,
  outfit_size,
  outfit_color,
  outfit_image,
  outfit_image_text,
}) => {
  return (
    <div className="outfit-card">
      <Image
        extraClasses="outfit-card__image"
        src={outfit_image}
        alt={outfit_image_text}
      />
      <div className="outfit-card__content">
        <p className="outfit-card__offer">
          <strong>{outfit_offer}</strong>
          <span>Deal of the day</span>
        </p>
        <p className="outfit-card__brand">{outfit_brand}</p>
        <p className="outfit-card__rate">
          <b>${outfit_rate}</b>
        </p>
        <p className="outfit-card__size">{outfit_size}</p>
        <p className="outfit-card__color">{outfit_color}</p>
      </div>
    </div>
  );
};

export default Outfitcard;
