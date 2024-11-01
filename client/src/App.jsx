import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Location from "./pages/Location.jsx";
import Navigation from "./components/Navigation.jsx";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home title="Location Hero" />,
    },
    {
      path: "/location",
      element: <Location title="List of Locations" />,
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
