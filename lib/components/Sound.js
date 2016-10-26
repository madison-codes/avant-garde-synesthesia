import React from 'react';
import Octavian from 'octavian';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
const gain = context.createGain();
const destination = context.destination;

const notes = [
  'A5',  'G5', 'E5', 'C5',
  'A4',  'G4', 'E4', 'C4',
  'A3',  'G3', 'E3', 'C3'
];

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getNote(index) {
    const frequency = new Octavian.Note(notes[index]).frequency;
    console.log(frequency);
    return frequency;
  }

  createOscillator(index) {
    let osc = context.createOscillator();
    osc.connect(gain);
    gain.connect(destination);
    osc.start(0);
    osc.frequency.value = this.getNote(index);
  }

  render() {
    return (
      <button
      className='sound-btn'
      onMouseEnter={() => this.createOscillator(this.props.index)}>
      </button>
    )
  }
}
