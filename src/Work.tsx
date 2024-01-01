import cosmo from "../public/Cosmo.png";
import musicApp from "../public/MusicApp.png";
import starsAbove from "../public/StarsAbove.png";

export default function Work() {
  return (
    <>
      <div className="work-flex">
        <div>
          <h2>Cosmo</h2>
          <p>
            Cosmo is a social media app for artists. It is a full stack app
            powered by React and Firebase. It has many features such as handling
            profiles, posting content and interacting with other posts.
          </p>
        </div>
        <a href="https://apixcosmo.com/" target="_blank">
          <img className="work-image" src={cosmo}></img>
        </a>
      </div>
      <div className="division"></div>
      <div className="work-flex">
        <div>
          <h2>Music App</h2>
          <p>
            Using React, I’ve built a responsive music app. I focused on keeping
            a clean interface to make the UI aesthetically pleasing and simple.
          </p>
        </div>
        <a href="https://apix-music.glitch.me" target="_blank">
          <img className="work-image" id="music-app-img" src={musicApp}></img>
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
            is a personal project about the Solar System and Space.
            <br />
            It uses WordPress and the Divi builder to present an illustrated
            documentation, a gallery and a playable simulation of the Solar
            System and the galaxy.
          </p>
        </div>
        <a href="https://starsabove.me/" target="_blank">
          <img className="work-image full" src={starsAbove}></img>
        </a>
      </div>
    </>
  );
}
