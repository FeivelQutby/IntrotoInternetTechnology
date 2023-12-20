import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState("TIME")
  
  function GetTime(){
    let time = new Date().toLocaleTimeString(); 
    setTime(time);
  }
  return (
    <div className="App">
     <h1>{time}</h1>
     <button className="button" onClick={GetTime}>GET TIME</button>
    </div>
  );
}

export default App;
