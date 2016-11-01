import React from 'react';
import Tracking from 'tracking';
import findIndex from '../helpers/index';

export default class TrackColor extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.createVideo();
    this.tracker();
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

  tracker() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', (event) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      event.data.forEach((rect) => {
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        if (rect) { this.props.onNoteChange(findIndex(rect)); }
      });
    });
  }

  render() {
    return (
      <section>
        <video id="video" height="300" width="300"></video>
        <canvas id="canvas" height="300" width="300"></canvas>
      </section>
    )
  }
}
