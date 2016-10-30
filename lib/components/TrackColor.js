import React from 'react';
import Tracking from 'tracking';

// const colors = new tracker.ColorTracker(['magenta', 'cyan', 'yellow']);

export default class TrackColor extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.createVideo();
    this.startTracker();
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

  startTracker() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      event.data.forEach(function(rect) {
        console.log(rect.x, rect.y);
        console.log('height', rect.height);
        console.log('width', rect.width);

        if (rect.color === 'custom') {
          rect.color = tracker.customColor;
        }
        context.strokeStyle = rect.color;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        context.font = '11px Helvetica';
        context.fillStyle = "#fff";
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      });
    });
  //  initGUIControllers(tracker);
 }


  render() {
    return (
      <section>Video
        {/* <button onClick= {(e) => this.startTracker(e) }>Play</button> */}
        <video id="video" height="400" width="400"></video>
        <canvas id="canvas" height="400" width="400"></canvas>

      </section>
    )
  }
}
