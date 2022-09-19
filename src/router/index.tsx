import { createBrowserRouter, redirect } from "react-router-dom";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Blog from "@/pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
]);

export default router;
