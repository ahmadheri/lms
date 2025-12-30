import Button from "../components/Button";
import ChampionSection from "../components/ChampionSection";
import GreetingCard from "../components/GreetingCard";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LeaderboardSection from "../components/LeaderboardSection";
import WhySection from "../components/WhySection";

export default function Home() {
  return (
    <>
      <div className="body-content">
        <Header />
        <HamburgerMenu />
        <Hero />
        <WhySection />
        <LeaderboardSection />
        <ChampionSection />
        {/* <div>
          <GreetingCard name="Herry" />
        </div> */}
      </div>
    </>
  );
}
