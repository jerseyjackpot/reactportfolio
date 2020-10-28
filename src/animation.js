import React from "react";
import ReactAnime from 'react-animejs'
import "./animation.css";

const {Anime, stagger} = ReactAnime

function Animation() {
  
    return (
    <div id="animation">
        <div className="center-content" id="animation-card">
          <Anime className="animation-wrapper">
            <div className="stagger-visualizer">
              <div className="dots-wrapper"></div>
            </div>
          </Anime>
        </div>
      </div>
  );
}

export default Animation;