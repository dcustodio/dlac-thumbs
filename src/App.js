import React from 'react';
import './App.css';
import VideoThumbs from './components/VideoThumbs'
import InputBar from './components/InputBar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.setVideoId = this.setVideoId.bind(this);

    this.state = {
      value: '',
      videoId: ''
    }
  }

  setVideoId(videoId) {
    this.setState({ videoId })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Generate Youtube thumbnails</p>
          <InputBar value='click here' onSubmitVideoId={this.setVideoId}></InputBar>
          <VideoThumbs videoId={this.state.videoId}></VideoThumbs>
        </header>
      </div>
    );
  }
}