import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/About";
import Contacts from "@/pages/About";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
]);

export default router;
