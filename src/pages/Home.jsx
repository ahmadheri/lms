import ChampionSection from "../components/ChampionSection";
import ContactUs from "../components/ContactUs";
import HamburgerMenu from "../components/HamburgerMenu";
import Hero from "../components/Hero";
import LeaderboardSection from "../components/LeaderboardSection";
import WhySection from "../components/WhySection";
import PageLayout from "../components/layout/PageLayout";

export default function Home() {
  return (
    <>
      <PageLayout>
        <HamburgerMenu />
        <Hero />
        <WhySection />
        <LeaderboardSection />
        <ChampionSection />
        <ContactUs />
      </PageLayout>
    </>
  );
}
