/* eslint-disable react-hooks/exhaustive-deps */
import "./Home.scss";
import HomepageBanner from "../../components/Homepage-banner/Homepage-banner.jsx";
import LatestUpdateCards from "../../components/Latest-update-cards/Latest-update-cards.jsx";
import { useEffect } from "react";
import { BASE_URL } from "../../utils/base-url/BASE_URL";

function Home() {
  // useEffect(() => {
  //   fetch(`${BASE_URL}/`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: process.env.JWT_SECRET_KEY,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error fetching JSON data:", error));
  // }, []);
  return (
    <>
      <HomepageBanner />
      <LatestUpdateCards />
    </>
  );
}
export default Home;
