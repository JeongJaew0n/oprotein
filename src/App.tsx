import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormExample from './example/reactHookFormExample.tsx'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <FormExample></FormExample>
      
    </div>
  );
}

export default App;
