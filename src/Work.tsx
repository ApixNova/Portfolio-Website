import Quote from "../public/Quote.png";
import ChoroMap from "../public/Map.png";
import Clock from "../public/Clock.png";
import MusicApp from "../public/MusicApp.png";

export default function Work() {
  return (
    <>
      <div className="work-flex">
        <div>
          <h2>
            <i className="fa-solid fa-chevron-right"></i> Music App:
          </h2>
          <p>
            A fully functional music app, with multiple functionalities such as
            controls, a playlist feature and liked songs. Responsive . Built
            with React
          </p>
        </div>
        <a href="https://apix-music.glitch.me" target="_blank">
          <img className="work-image" src={MusicApp}></img>
        </a>
      </div>
      <div className="division"></div>
      <div className="work-flex">
        <div>
          <h2>
            <i className="fa-solid fa-chevron-right"></i> Choropleth map:
          </h2>
          <p>
            In this project, I used the Javascript Library D3.js to generate a
            map and to dynamically set the color of each US county according to
            a JSON API data (percentage of adults with a bachelor's degree or
            higher).
            <br />
            Using the same library, I also created a tree map and many graphs.
          </p>
        </div>
        <a href="https://codepen.io/ApixNova/pen/abRXagZ" target="_blank">
          <img className="work-image" src={ChoroMap}></img>
        </a>
      </div>
      <div className="division"></div>
    </>
  );
}
