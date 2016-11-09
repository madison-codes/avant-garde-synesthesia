import React from 'react';
import Octavian from 'octavian';
import Button from './Button';
import SoundControls from './SoundControls';

if (!AudioContext) window.AudioContext = window.webkitAudioContext;

let context = new AudioContext();
let osc = context.createOscillator();
let gain = context.createGain();
const destination = context.destination;

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note
    };
  }

  componentDidMount() {
    osc.connect(gain);
    gain.connect(destination);
    osc.start(0);
    osc.frequency.value = 300;
    gain.gain.value = 1;
  }

  componentWillUpdate(nextProps) {
    if (!this.props.note) {
      gain.gain.value = 0;
    } else {
      gain.gain.value = 1;
      osc.frequency.value = new Octavian.Note(nextProps.note).frequency;
    }
  }

  togglePlay() {
    gain.gain.value = gain.gain.value <= 0 ? 1 : 0;
  }

  render() {
    return (
      <SoundControls
        behavior={() => this.togglePlay()}
      />
    )
  }
}
