import React from 'react';
import Octavian from 'octavian';
// import findIndex from '../helpers/index';

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
    let osc = context.createOscillator();
    osc.connect(gain);
    gain.connect(destination);
    osc.start(0);
    gain.gain.value = 1;
  }

  componentWillUpdate(nextProps) {
    if (this.props.note !== nextProps.note) {
      osc.frequency.value = new Octavian.Note(this.state.note()).frequency;
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
