import React, { useState } from 'react';
import './App.css';
import { CounterInput } from './component/counterInput';
import { CounterOutput } from './component/counterOutput';

function App() {
  let [counter , setCounter] = useState(0);
  return (
    <div>
    <CounterOutput counter={counter}/>
    hi
    <CounterInput counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
