import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
