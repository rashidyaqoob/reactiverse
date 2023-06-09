/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../../utils/base-url/BASE_URL";
import Select from "react-select";
import Outfitcard from "./Outfit-card";
import { CheckAuthExpiry }  from "../../utils/check-auth/CheckAuth.jsx";

const Outfit = () => {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [filterValue, setFiltervalue] = useState("");
  const [filterBrand, setBrandvalue] = useState("");
  const [status, setStatus] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const optionsGender = [
    { value: "", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
  ];
  const optionsBrand = [
    { value: "", label: "All" },
    { value: "puma", label: "Puma" },
    { value: "nike", label: "Nike" },
  ];

  const token = localStorage.getItem('jwtToken')
  const auth = CheckAuthExpiry();
  console.log("auth",auth)

  useEffect(() => {
    // Update local storage when token changes
  //  console.log(auth)
  });

  useEffect(() => {
    fetch(`${BASE_URL}/outfit`)
      .then((res) => res.json())
      .then((data) => {
        setMen(data.men);
        setWomen(data.women);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  function handleFilter(opt) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("gender", opt.value);

    navigate({
      search: `?${searchParams.toString()}`,
    });
    setFiltervalue(opt.value);
  }

  function handleFilterBrand(brand) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("brand", brand.value);

    navigate({
      search: `?${searchParams.toString()}`,
    });
    setBrandvalue(brand.value);
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.has("option")) {
      const newSearchParams = new URLSearchParams();
      window.history.replaceState(
        {},
        "",
        `${location.pathname}${newSearchParams.toString()}`
      );
    }
  }, []);

  return (
    <>
    {status == 200 ? (<div className="outfits-container">
      <div className="outfit-dropdown">
        <label for="gender">Filter Gender</label>
        <Select
          options={optionsGender}
          touchUi={false}
          onChange={handleFilter}
        />
        <label for="gender">Filter Brand</label>
        <Select
          options={optionsBrand}
          touchUi={false}
          onChange={handleFilterBrand}
        />
      </div>
      <h2>OUTFITS</h2>
      <div>
        {(filterValue === "men" || filterValue === "") && (
          <>
            <h3>Men</h3>
            <ul className="outfits-jeans">
              {men
                .filter(
                  (item) => item.brand === filterBrand || filterBrand === ""
                )
                .map((item, key) => (
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
              {women
                .filter(
                  (item) => item.brand === filterBrand || filterBrand === ""
                )
                .map((item, key) => (
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
    </div>) : navigate('/login')}
    </>
    
  );
};

export default Outfit;
