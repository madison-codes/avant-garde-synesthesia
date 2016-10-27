import React from 'react';
// import Tracker from 'tracking';
// const track = new tracking.Tracker();

// const colors = new track.ColorTracker(['magenta', 'cyan', 'yellow']);

export default class Tracker extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.createVideo();
  }

  createVideo() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then((stream) => {
      const video = document.querySelector('#video');
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function(e) {
      video.play();
    };
  })
    .catch((err) => {
      console.log(err.name + ": " + err.message);
    });
  }

  render() {
    return (
      <section>Video
        {/* <button onClick= {() => this.testing() }>Play</button> */}
        <video id="video" height="400" width="400"></video>
      </section>
    )
  }
}
