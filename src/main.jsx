import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import BlogHeader from "./Pages/Blog.jsx";
import Coursesbek from "./Pages/Coursesbek.jsx";
import EventPage from "./Components/Eventpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Coursesbek />,
      },
      {
        path: "/Blog",
        element: <BlogHeader />,
      },
      {
        path: "/courses",
        element: <Coursesbek />,
      },
      {
        path: "/Events",
        element: <EventPage />,
      },
      {
        path: "/Login",
        element: <p>login page</p>,
      },
      {
        path: "/Contacts",
        element: <p>Contact page</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
