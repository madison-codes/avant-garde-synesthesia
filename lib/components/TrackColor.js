import React from 'react';
import Tracking from 'tracking';
import findIndex from '../helpers/index';

export default class TrackColor extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.tracker();
  }

  tracker() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', (event) => {
      // context.clearRect(0, 0, canvs.width, canvas.height);
      event.data.forEach((rect) => {
        context.strokeRect(rect.x, rect.y, 2, 2);
        context.strokeStyle = '#ADEDE0';
        if (rect) { this.props.onNoteChange(findIndex(rect));
        console.log(findIndex(rect));
        }
      });
    });
  }

  render() {
    return (
      <section>
        <canvas id="canvas" height="510" width="810"></canvas>
      </section>
    )
  }
}
