import './App.css';
import React from 'react';
import { Title } from './components/Title';
import { InputForm } from './components/InputForm';

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
    </div>
  );  
}

export default App;
