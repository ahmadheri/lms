import AboutUs from "../components/sections/AboutUs/AboutUs";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

export default function About() {
  return (
    <>
      <div className="body-content">
        <Header />
        <AboutUs />

        <Footer />
      </div>
    </>
  );
}
