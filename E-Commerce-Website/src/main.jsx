import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Page13 from "./pages/Page13";



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
    path:"page13",
    element:<Page13/>
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
