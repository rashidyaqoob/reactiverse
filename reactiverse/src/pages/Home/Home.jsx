/* eslint-disable react-hooks/exhaustive-deps */
import "./Home.scss";
import HomepageBanner from "../../components/Homepage-banner/Homepage-banner.jsx";
import LatestUpdateCards from "../../components/Latest-update-cards/Latest-update-cards.jsx";
import ScrollComp from "../../components/Scroll-comp/Scroll-comp";
import DateTimezone from "../../components/Data-timezone/Data-timezone.jsx";

function Home() {
  return (
    <>
      <HomepageBanner />
      <DateTimezone />
      <LatestUpdateCards />
      <ScrollComp />
    </>
  );
}
export default Home;
