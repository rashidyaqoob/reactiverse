import "./Home.scss";
import HomepageBanner from "../../components/Homepage-banner/Homepage-banner";
import LatestUpdateCards from "../../components/Latest-update-cards/Latest-update-cards";

function Home() {
  return (
    <>
        <HomepageBanner />
        <LatestUpdateCards/>
    </>
  );
}

export default Home;
