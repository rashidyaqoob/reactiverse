/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import Outfitcard from "./Outfit-card";
import { CheckAuthExpiry } from "../../utils/check-auth/CheckAuth.jsx";
import { BASE_URL } from "../../utils/base-url/BASE_URL";
import { AuthContext } from "../../pages/Login/Logincontext";
import Login from "../../pages/Login/Login";

const Outfit = () => {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [filterValue, setFiltervalue] = useState("");
  const [filterBrand, setBrandvalue] = useState("");
  const [status, setStatus] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

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

  const handleAuthCheck = async () => {
    try {
      const auth = await CheckAuthExpiry();
      if (auth === 200) {
        setStatus(200);
      } else {
        setStatus(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAuthCheck();
    fetch(`${BASE_URL}/outfit`)
      .then((res) => res.json())
      .then((data) => {
        setMen(data.men);
        setWomen(data.women);
      })
      .catch((error) => console.error("Error fetching JSON data:", error));

    // Set filter value to URL
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

  return (
    <>
      {status === 200 && isLoggedIn ? (
        <>
          <div className="outfits-container">
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
                        (item) =>
                          item.brand === filterBrand || filterBrand === ""
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
                        (item) =>
                          item.brand === filterBrand || filterBrand === ""
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
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Outfit;
