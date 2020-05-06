import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

function App() {
  return (
    <div className="container-fluid">
      <div><Header></Header></div>
      <div className="body"><Body></Body></div>
      
    </div>
  );
}

export default App;
