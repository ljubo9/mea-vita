import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Smjestaj from "./Smjestaj";
import OrganiziranoStanovanje from "./OrganiziranoStanovanje";
import PomocUKuci from "./PomocUKuci";

const Gallery = () => <h1 className="text-2xl font-semibold">Galerija</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "o-nama", element: <About /> },
      { path: "galerija", element: <Gallery /> },
      { path: "kontakt", element: <Contact /> },
      { path: "usluge/smjestaj-u-domu", element: <Smjestaj /> },
      { path: "usluge/organizirano-stanovanje", element: <OrganiziranoStanovanje /> },
      { path: "usluge/pomoc-u-kuci", element: <PomocUKuci /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
