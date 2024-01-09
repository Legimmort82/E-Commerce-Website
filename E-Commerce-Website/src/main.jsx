import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-lg">Hello world!</div>,
  },
  {
    path:"/header",
    element:<Header/>
  },
  {
    path:"/footer",
    element:<Footer/>

  },
  {
    path: "*",
    element: <Page404/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
