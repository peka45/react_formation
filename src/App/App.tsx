import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      Hello world
      <Button
        text="bouton 1"
        bgColor="blue"
        eventOnClick={() => {
          console.log("click button 1");
        }}
      />
      <Button text="bouton 2" />
      <Button text="bouton 3" />
      <Button text="bouton 3" />
    </div>
  );
}

export default App;
