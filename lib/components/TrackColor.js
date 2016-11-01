import React from 'react';
import Tracking from 'tracking';
import Sound from './Sound';
import findIndex from '../helpers/index';

let coords;
let note;

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
        if (rect.color === 'custom') {
          rect.color = tracker.customColor;
        }
        context.strokeStyle = rect.color;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        context.font = '11px Helvetica';
        context.fillStyle = "#000";
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        coords = rect;
      });
      if (coords) {
        this.props.onNoteChange(findIndex(coords));
      }
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
