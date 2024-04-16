import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Eula from "./components/Eula";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
      path: "/home",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
