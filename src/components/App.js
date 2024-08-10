import "./App.css";
import React from "react";
import Topbar from "./Components/topbar.js";
import Sidebar from "./Components/Sidebar";
import { useRoutes } from "hookrouter";
import Home from "./Pages/home";
import Search from "./Pages/search";
import Signup from "./Components/signup";
import Login from "./Components/login";
const routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/search": () => <Search />,
  "/signup": () => <Signup />,
  "/login": () => <Login />,
};

function App() {
  const match = useRoutes(routes);

  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="Maincontainer">
        <Sidebar></Sidebar>
        {match}
       
    </div>
  );
}

export default App;
