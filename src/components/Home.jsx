import React from "react";
import Placeholder from "../assets/placeholder-image.png";
import { Link } from "react-router-dom";

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
        I’m a former Risk & Operations Manager who transitioned into software development. I work with Java, JavaScript, React, Spring Boot, Bootstrap, and MySQL Workbench to build applications that simplify workflows and create real impact. Take a look at my published projects here, and check out my GitHub repositories for examples of my coding style and technical skills.
      </p>

      <div className="mt-4">
        <Link to="/projects" className="btn btn-primary me-2">View Projects</Link>
        <Link to="/contact" className="btn btn-outline-secondary">Contact Me</Link>
      </div>
    </section>
  );
}

export default Home;
