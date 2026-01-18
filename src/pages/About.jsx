import AboutUs from "../components/AboutUs";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

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
