import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h3>Rick and Morty Fansite</h3>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}