import React from "react";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Location from "./pages/Location.jsx";
import Locations from "./pages/Locations.jsx";
import Navigation from "./components/Navigation.jsx";
import { UseUserContext } from "./context/userContext.jsx";
import Blog from "./pages/Blog.jsx";
import "./App.css";

const App = () => {
  const { currentUser, userLoggedIn, loading } = UseUserContext();
  useEffect(() => {
    // handle user authentication and available resources
    console.log(currentUser);
    if (userLoggedIn == false) {
      console.log(userLoggedIn);
    }
  }, [loading]);
  let element = useRoutes([
    {
      path: "/",
      element: <Home title="Home Page" />,
    },
    {
      path: "/location",
      element: userLoggedIn ? (
        <Locations title="List of Locations" />
      ) : (
        <Home title="Home Page" />
      ),
    },
    {
      path: "/location/:location_id",
      element: userLoggedIn ? (
        <Location title="Location Page" />
      ) : (
        <Home title="Home Page" />
      ),
    },
    {
      path: "/blog/:blog_id",
      element: userLoggedIn ? (
        <Blog title="Blog Page" />
      ) : (
        <Home title="Home Page" />
      ),
    },
    {
      path: "/chat",
      element: userLoggedIn ? (
        <Chat title="List of Locations" />
      ) : (
        <Home title="Home Page" />
      ),
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
