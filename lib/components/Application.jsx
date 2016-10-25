import React from 'react';
import { map, extend, reverse } from 'lodash';
import firebase, { reference, signOut } from '../firebase';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const oscillator = context.createOscillator();
const gain = context.createGain();
const destination = context.destination;
const volume = gain.gain;


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  playAudio() {
    oscillator.connect(gain);
    gain.connect(destination);
    oscillator.start();
    console.log('hey');
  }

  pauseAudio() {
    oscillator.stop();
    console.log('stop');
  }

  render() {
    return (
      <section>
        <p>Click the buttons to play or pause the audio.</p>
        <button onClick={() => this.playAudio()}>Play Audio</button>
        <button onClick={() => this.pauseAudio()}>Pause Audio</button>
      </section>
    );
  }
}
