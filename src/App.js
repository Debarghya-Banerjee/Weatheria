import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Components/Weather";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=4cca2e42139bed2a8722abd2fe51b290`;

  return (
    <>
      <div className="App">
        <Weather />
      </div>
    </>
  );
}

export default App;
