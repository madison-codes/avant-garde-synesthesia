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
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker, { camera: true });
      tracker.on('track', (event) => {
        event.data.forEach((rect) => {
        context.strokeRect(rect.x, rect.y, 30, 30);
        context.strokeStyle = '#fff';
        if (rect) { this.props.onNoteChange(findIndex(rect));
        }
      });
    });
  }

  render() {
    return (
      <section>
        <canvas id="canvas" height="600" width="800"></canvas>
        <div  id="container"></div>
      </section>
    )
  }
}
