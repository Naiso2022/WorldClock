import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import SingleClock from "./SingleClock";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


  const router = createBrowserRouter([
    {
      element: <Root />,
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "clock/:cityKey",
          element: <SingleClock />,
        },
      ],
    },
  ]);


export default Root;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);
