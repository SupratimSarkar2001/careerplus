import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import videoBg from "../assest/videoBg.mp4";
function Home() {
  return (
    <div className="hero">
      <video src={videoBg} autoPlay loop muted />
      <div className="main">
        <h1>Welcome Greek!</h1>
        <Typewriter
          options={{
            strings: [
              "Navigate Your Carrer.",
              "Reach Your Goals.",
              "Upgrade Yourself.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
