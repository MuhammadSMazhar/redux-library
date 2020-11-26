import React from 'react';
import './App.css';
import { CounterInput } from './component/counterInput';
import { CounterOutput } from './component/counterOutput';

function App() {
  return (
    <div>
    <CounterOutput />
    <CounterInput />
    </div>
  );
}

export default App;
