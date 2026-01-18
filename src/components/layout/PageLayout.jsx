import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main id="main-content">{children}</main>

      <Footer />
    </>
  );
};

export default PageLayout;
