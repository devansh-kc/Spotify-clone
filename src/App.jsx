import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

function App() {
  const spotify = new SpotifyWebApi();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash;
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
    // console.log("token :", hash);
  }, []);
  return <div>{token ? <Player /> : <Login />}</div>;
}

export default App;