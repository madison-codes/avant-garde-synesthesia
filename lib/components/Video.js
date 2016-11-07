import React from 'react';
import Tracking from 'tracking';
import findIndex from '../helpers/index';

export default class TrackColor extends React.Component {
  constructor() {
    super();
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
      <video id="video" height="510" width="810"></video>
    )
  }
}
