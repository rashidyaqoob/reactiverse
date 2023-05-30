import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/base-url/BASE_URL";
import Select from "react-select";
import Outfitcard from "./Outfit-card";

const Outfit = () => {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [filterValue, setFiltervalue] = useState("");
  console.log(filterValue);
  const options = [
    { value: "", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
  ];

  useEffect(() => {
    fetch(`${BASE_URL}/outfit`)
      .then((res) => res.json())
      .then((data) => {
        setMen(data.men);
        setWomen(data.women);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  return (
    <div className="outfits-container">
      <div className="outfit-dropdown">
        <label for="gender">Filter</label>
        <Select
          options={options}
          onChange={(opt) => setFiltervalue(opt.value)}
        />
      </div>
      <h2>OUTFITS</h2>
      <div>
        {(filterValue === "men" || filterValue === "") && (
          <>
            <h3>Men</h3>
            <ul className="outfits-jeans">
              {men.map((item, key) => (
                <li id={key} className="outfit-list-item">
                  <Outfitcard
                    outfit_brand={item.brand}
                    outfit_rate={item.rate}
                    outfit_size={item.size}
                    outfit_color={item.color}
                    outfit_offer={item.offer}
                    outfit_image={item.image}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
        {(filterValue === "women" || filterValue === "") && (
          <>
            <h3>Women</h3>
            <ul className="outfits-jackets">
              {women.map((item, key) => (
                <li id={key} className="outfit-list-item">
                  <Outfitcard
                    outfit_brand={item.brand}
                    outfit_rate={item.rate}
                    outfit_size={item.size}
                    outfit_color={item.color}
                    outfit_offer={item.offer}
                    outfit_image={item.image}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Outfit;
