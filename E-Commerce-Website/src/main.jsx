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
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import { CommentProvider } from "./Providers/CommentProvider";
import { AuthProvider } from "./Providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
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
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CommentProvider>
        <RouterProvider router={router} />
      </CommentProvider>
    </AuthProvider>
  </React.StrictMode>
);
