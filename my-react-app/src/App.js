 
import "./App.css";
import {useState} from "react";

function App() {
let [count,setCount]=useState(0)

  return <div className="App">
    <h1>Count : {count}</h1>
    <button onClick={(prev)=> setCount(count+1)}>Increase Count </button>
    <button onClick={(prev)=> setCount(count-1)}>Decrease Count </button>
  </div>;
}

export default App;
