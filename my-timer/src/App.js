 
import { useState } from "react";
import "./App.css";
import TimerComponent from "./components/timer";
import ScrollComponent from "./components/scrollEvent";

function App() {
  let [showTimer,setShowTimer]=useState(true)

  const toggleTimer= ()=>{
    setShowTimer(!showTimer)
  }


  return <div className="App"> 
  {showTimer && <TimerComponent/>}
  <button onClick={toggleTimer}>
    {showTimer ? "Stop Timer" : "Start Timer"}
  </button>

  {showTimer && <ScrollComponent/>}
  </div>;
}

export default App;
