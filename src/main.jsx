import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Eula from "./components/Eula";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/discover",
    element: <Discover />
  },
  {
    path: "/eula",
    element: <Eula />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
