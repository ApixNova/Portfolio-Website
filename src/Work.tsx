import choroMap from "../public/Map.png";
import musicApp from "../public/MusicApp.png";
import starsAbove from "../public/StarsAbove.png";

export default function Work() {
  return (
    <>
      <div className="work-flex">
        <div>
          <h2>Music App:</h2>
          <p>
            Using React, I’ve built a responsive music app. It includes many
            features such as handling a playlist, music controls, and liked
            songs. I focused on keeping a clean interface to make the UI
            aesthetically pleasing and simple.
          </p>
        </div>
        <a href="https://apix-music.glitch.me" target="_blank">
          <img className="work-image" id="music-app-img" src={musicApp}></img>
        </a>
      </div>
      <div className="division"></div>
      <div className="work-flex">
        <div>
          <h2>Choropleth map:</h2>
          <p>
            In this project, I used the Javascript library D3.js to generate a
            map that dynamically colors each US county according to a JSON API
            data (percentage of adults with a bachelor's degree or higher).
            <br />
            Using the same library, I also created a tree map and many graphs.
          </p>
        </div>
        <a href="https://codepen.io/ApixNova/pen/abRXagZ" target="_blank">
          <img
            className="work-image"
            id="choropleth-map-img"
            src={choroMap}
          ></img>
        </a>
      </div>
      <div className="division"></div>
      <div className="work-flex" id="stars-above">
        <div>
          <h2>StarsAbove.me</h2>
          <p>
            <a
              href="https://starsabove.me/"
              target="_blank"
              style={{
                display: "inline-block",
                color: "#0b0b0d",
              }}
            >
              StarsAbove.me
            </a>{" "}
            is a personal project about the Solar System and space.
            <br />
            It uses WordPress and the Divi builder to present an illustrated
            documentation, a gallery and a playable simulation of the Solar
            System and the galaxy.
          </p>
        </div>
        <a href="https://starsabove.me/" target="_blank">
          <img
            className="work-image"
            id="stars-above-img"
            src={starsAbove}
          ></img>
        </a>
      </div>
    </>
  );
}
