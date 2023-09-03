import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar.jsx";
import Body from "./Body";
import Footer from "./Footer";
import { useDataLayerValue } from "../DataLayer";

function Player({ spotify, track }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      {discover_weekly?.tracks.items.map((item) => (
        <Footer track={item.track} />
      ))}
    </div>
  );
}

export default Player;
