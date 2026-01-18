import Button from "../components/Button";
import ChampionSection from "../components/ChampionSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/layout/Footer";
import GreetingCard from "../components/GreetingCard";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/layout/Header";
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
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
