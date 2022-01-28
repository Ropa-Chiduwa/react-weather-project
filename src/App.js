import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Harare" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Ropa-Chiduwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Belinda Chiduwa
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ropa-Chiduwa/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
