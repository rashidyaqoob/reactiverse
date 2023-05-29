import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/base-url/BASE_URL";

const Outfit = () => {
  const [jeans, setJeans] = useState([]);
  const [jackets, setJackets] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/outfit`)
      .then((res) => res.json())
      .then((data) => {
        setJeans(data.jeans);
        setJackets(data.jackets);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  return (
    <div>
      <h2>OUTFITS</h2>
      <div>
        <h3>Jeans</h3>
        {jeans.map((item, key) => (
          <li id={key}>
            <span>{item.color}</span>
            <br />
            <span>{item.brand}</span>
            <br />
            <span>{item.size}</span>
          </li>
        ))}
        <h3>Jackets</h3>
        {jackets.map((item, key) => (
          <li id={key}>
            <span>{item.color}</span>
            <br />
            <span>{item.brand}</span>
            <br />
            <span>{item.size}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Outfit;
