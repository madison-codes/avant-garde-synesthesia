import React from 'react';
import Octavian from 'octavian';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
let osc = context.createOscillator();
let gain = context.createGain();
const destination = context.destination;
var gainNode = context.createGain();

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
    gain.gain.value = 1;
    osc.frequency.value = 100;
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
      <section>
        <button onClick={() => this.togglePlay()}>Play</button>
      </section>
    )
  }
}
