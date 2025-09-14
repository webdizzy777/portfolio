import React from "react";
import Placeholder from "../assets/placeholder-image.png"
import {Link} from "react-router-dom";

function Home() {
  return (
    <section id="home" className="container text-center my-5">

      <img
        src={Placeholder} 
        alt="Profile"
        className="rounded-circle mb-4"
        width="150"
        height="150"
      />

      <h1 className="mb-3">Hi, I'm Carissa</h1>
      <p className="lead">
        Risk & Operations Manager turned Software Developer.  
        Skilled in React, Java, SQL, and building efficient solutions that bridge
        business and technology.
      </p>

      <div className="mt-4">
        <Link to="/Projects" className="btn btn-primary me-2">
          View Projects
        </Link>
        <Link to="/Contact" className="btn btn-outline-secondary">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Home;
