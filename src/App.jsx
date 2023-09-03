import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash;
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        })
      );
    }
    spotify.getPlaylist("1pYTazAFwwoB9p9zFGHjw2").then(response=>
      dispatch({
        type:"SET_DISCOVER_WEEKLY",

        discover_weekly:response
      }))

  }, []);
  console.log(user);
  console.log("token :", token);

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
