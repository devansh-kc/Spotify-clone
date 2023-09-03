import React from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src=" data:image/jpeg;base64,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"
          alt=""
          className="footer_albumLogo"
        />
        <div className="footer__songInfo">
          <h4>six Days</h4>
          <p>pata Nahi</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;