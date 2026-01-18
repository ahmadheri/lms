import Header from "./Header";
import Footer from "./Footer";

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
