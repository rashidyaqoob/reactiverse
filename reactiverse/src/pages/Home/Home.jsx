/* eslint-disable react-hooks/exhaustive-deps */
import "./Home.scss";
import HomepageBanner from "../../components/Homepage-banner/Homepage-banner.jsx";
import LatestUpdateCards from "../../components/Latest-update-cards/Latest-update-cards.jsx";
import { useEffect } from "react";
import { BASE_URL } from "../../utils/base-url/BASE_URL";

function Home() {
  const token = localStorage.getItem('jwtToken')
  console.log(token)
  const headers = { 'Authorization': token };
  useEffect(() => {
    fetch(`${BASE_URL}/login`,  { headers })
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);
 
  return (
    <>
      <HomepageBanner />
      <LatestUpdateCards />
    </>
  );
}
export default Home;
