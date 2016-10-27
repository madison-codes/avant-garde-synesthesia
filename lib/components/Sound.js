import React from 'react';
import Octavian from 'octavian';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
let gain = context.createGain();
const destination = context.destination;
var gainNode = context.createGain();

const notes = [
  'A5',  'G5', 'E5', 'C5',
  'A4',  'G4', 'E4', 'C4',
  'A3',  'G3', 'E3', 'C3'
];

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     created: false,
     playing: false,
     note: ''
    };
  }

  getNote(index = this.props.index ) {
    return new Octavian.Note(notes[index]).frequency;
  }

  createOsc(index) {
    let osc = context.createOscillator();
    osc.connect(gain);
    gain.connect(destination);
    osc.start(0);
    osc.frequency.value = this.getNote(index);
    this.setState({ created: true });
    gain.gain.value = 1;

  }

  oscOn(index) {
    if (this.state.created) {
      gain.gain.value = 1;
      this.setState({ playing: true });
    } else {
      this.createOsc(index);
    }
  }

  pauseMusic() {
    gain.gain.value = 0;
  }

  render() {
    return (
      <section>
        <button
        className='sound-btn'
        onMouseEnter={() => this.oscOn()}
        onMouseOut={() => this.pauseMusic()}
        >
        </button>
      </section>
    )
  }
}
