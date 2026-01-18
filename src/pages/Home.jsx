import Hero from "../components/sections/Hero/Hero";
import ChampionSection from "../components/sections/ChampionSection/ChampionSection";
import ContactUs from "../components/sections/ContactUs/ContactUs";
import LeaderboardSection from "../components/sections/LeaderboardSection/LeaderboardSection";
import WhySection from "../components/sections/WhySection/WhySection";
import PageLayout from "../components/layout/PageLayout";

export default function Home() {
  return (
    <>
      <PageLayout>
        <Hero />
        <WhySection />
        <LeaderboardSection />
        <ChampionSection />
        <ContactUs />
      </PageLayout>
    </>
  );
}
