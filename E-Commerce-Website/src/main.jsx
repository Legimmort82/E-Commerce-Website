import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./pages/Layout";
import SingUp from "./pages/SingUp";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";
import Acount from "./pages/Acount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path:"/product",
        element:<ProductDetails/>
      },
      {
        path:"/signUp",
        element:<SingUp/>
      },
      {
        path:"/signIn",
        element:<SignIn/>
      },
      {
        path:"/wishlist",
        element:<WishList/>
      },
      {
        path:"/account",
        element:<Acount/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
