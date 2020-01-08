import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="buffer"></div>
      <Content />
    </div>
  );
}

export default App;
