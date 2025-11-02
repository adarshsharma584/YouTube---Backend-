
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Home from "./pages/Home.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import Subscription from "./pages/Subscription.jsx";
import Shorts from "./pages/Shorts.jsx";
import History from "./pages/History.jsx";
import WatchLater from "./pages/WatchLater.jsx";
import PlayList from "./pages/PlayList.jsx";
import YourCourses from "./pages/YourCourses.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "liked",
        element: <LikedVideos />,
      },
      {
        path: "subscriptions",
        element: <Subscription />,
      },
      {
        path: "shorts",
        element: <Shorts />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "watch-later",
        element: <WatchLater />,
      },
      {
        path: "playlists",
        element: <PlayList />,
      },
      {
        path: "courses",
        element: <YourCourses />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
  
);
