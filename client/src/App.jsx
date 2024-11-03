import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Location from "./pages/Location.jsx";
import Locations from "./pages/Locations.jsx";
import Navigation from "./components/Navigation.jsx";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home title="Home Page" />,
    },
    {
      path: "/location",
      element: <Locations title="List of Locations" />,
    },
    {
      path: "/location/:location_id",
      element: <Location title="Location Page" />,
    },
    {
      path: "/chat",
      element: <Chat title="List of Locations" />,
    },
  ]);

  return (
    <div className="app">
      <Navigation />
      {element}
    </div>
  );
};

export default App;
