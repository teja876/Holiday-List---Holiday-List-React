import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const places = ["Goa", "Darjeeling", "Lonavala"];
    return (
      <>
        <ol>
          {places.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
