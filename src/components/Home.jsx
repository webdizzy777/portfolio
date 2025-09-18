import React from "react";
import Placeholder from "../assets/placeholder-image.png";
import { Link } from "react-router-dom";
import books from "../assets/kobu-agency-ipARHaxETRk-unsplash.jpg";

function Home() {
  return (
    <section id="home" className="container text-center my-5">
      <img
        src={books}
        alt="Profile"
        className="rounded-4 mb-4 img-fluid"
        width="300"
      />
      <h1 className="mb-3">Hi, I'm Carissa</h1>
      <p className="lead text-start py-5">
        I’m a former Risk & Operations Manager who transitioned into software development. I work with Java, JavaScript, React, Spring Boot, Bootstrap, and MySQL Workbench to build applications that simplify workflows and create real impact. Take a look at my published projects here, and check out my GitHub repositories for examples of my coding style and technical skills.
      </p>

      <div className="mt-4">
        <Link to="/projects" className="btn btn-gradient me-2">View Projects</Link>
        <Link to="/contact" className="btn btn-outline-glow">Contact Me</Link>
      </div>
    </section>
  );
}

export default Home;