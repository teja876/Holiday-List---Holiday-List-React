import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const places = ["Goa", "Darjeeling", "Lonavala"];
    return (
      <>
        <ol>
          {places.map((place, index) => {
            <li key={`location${index + 1}`}>{place}</li>;
          })}
        </ol>
      </>
    );
  }
}

export default App;
