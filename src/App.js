import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoThumbs from './components/VideoThumbs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Something something</p>
        <VideoThumbs value='click here'></VideoThumbs>

      </header>
    </div>
  );
}

export default App;
