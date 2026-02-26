import React from "react";
import { Nav } from "./Nav";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <h1>Home</h1>
        </section>
        <section id="about">
          <h2>About</h2>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
