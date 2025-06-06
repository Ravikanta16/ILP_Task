import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [visits, setVisits] = useState("...");

  useEffect(() => {
    fetch("http://localhost:8081/")
      .then((res) => res.text())
      .then((data) => setVisits(data));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Visitor Counter</h1>
        <p>{visits}</p>
        <p>Hot Reload</p>
      </header>
    </div>
  );
}

export default App;
