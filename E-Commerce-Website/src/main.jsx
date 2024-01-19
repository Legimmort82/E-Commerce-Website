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
<<<<<<< Updated upstream
=======
import Account from "./pages/Account";
>>>>>>> Stashed changes

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
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/signUp",
        element: <SingUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
