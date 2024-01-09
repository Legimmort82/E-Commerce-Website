import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-lg">Hello world!</div>,
  },
  {
    path: "*",
    element: <Page404/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
