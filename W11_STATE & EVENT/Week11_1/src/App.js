import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  return (
    <div className='container'>
      <h1>{count}</h1>
      <button className='button' onClick={increase}>+</button>
      <button className='button' onClick={decrease}>-</button>
    </div>
  );
}


