import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import About from "../pages/About";
import Faq from "../pages/Faq";

export const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "*",
    element: <div> 404 page not found</div>,
  },
];
