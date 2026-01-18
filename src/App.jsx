import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./styles/variables.css";
import "./styles/globals.css";
import { Helmet } from "react-helmet";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>MSC Body Transformation</title>
        <meta
          name="description"
          content="A brief description of my web page for search engines."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="script.js"></script>
      </Helmet>

      {routing}
    </>
  );
}

export default App;
