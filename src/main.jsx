import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./Layout";

const Home = () => <h1 className="text-2xl font-semibold">Dom Mea Vita</h1>;
const About = () => <h1 className="text-2xl font-semibold">O nama</h1>;
const Gallery = () => <h1 className="text-2xl font-semibold">Galerija</h1>;
const Contact = () => <h1 className="text-2xl font-semibold">Kontakt</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "o-nama", element: <About /> },
      { path: "galerija", element: <Gallery /> },
      { path: "kontakt", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
