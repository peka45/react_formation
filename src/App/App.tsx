import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {

  return (
    <div className="App">
      Hello world
      
      <Button
        text="bouton 2"
        bgColor="blue"
        eventOnClick={() => {
          console.log("click button");
        }}
      >
        <div>Mon bouton</div>
        <div>suite</div>
      </Button>
      
      <Button
        text="bouton 2"
        type="submit"
        eventOnClick={() => {
          console.log("click button 2");
        }}
      >
        <div>Mon bouton</div>
        <div>suite</div>
      </Button>
    </div>
  );
}

export default App;
