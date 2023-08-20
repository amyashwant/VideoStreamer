import React from "react";
import { useSelector } from "react-redux";
// import store from "../Utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const buttonToggle = useSelector((store) => store.app.buttonToggle);
  // if (buttonToggle === false) return null;
  if (!buttonToggle) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
