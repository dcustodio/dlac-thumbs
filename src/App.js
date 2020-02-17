import React from 'react';
import './App.css';
import VideoThumbs from './components/VideoThumbs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Generate Youtube thumbnails</p>
        <VideoThumbs value='click here'></VideoThumbs>

      </header>
    </div>
  );
}

export default App;
