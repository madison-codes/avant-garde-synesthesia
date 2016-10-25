import React from 'react';

// let int = this.props.oscillatorNumber;
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const context = new AudioContext();
// const oscillator = context.createOscillator();
// const gain = context.createGain();
// const destination = context.destination;
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
const destination = context.destination;
const gain = context.createGain();
const volume = gain.gain;

export default class Sound extends React.Component {
  constructor() {
    super();
    this.state = {
      played: false,
      playing: false,
    };
  }

  createOscillator(number) {
    let specOscillator = context.createOscillator();
    specOscillator.connect(gain);
    gain.connect(destination);
    specOscillator.start(0);
    specOscillator.frequency.value = this.props.value;
  }

  playAudio() {
    if (this.state.played) { this.restartAudio(); }
    else {
    this.createOscillator();
    this.setState({ played: true});
    }
    this.setState({ playing: true });
  }

  restartAudio() {
    volume.value = 1;
  }

  pauseAudio() {
    volume.value = 0;
    this.setState({ playing: false });
  }

  togglePlay() {
    this.state.playing ? this.pauseAudio() : this.playAudio();
  }

  render() {
    return (
      <section>
        <button onMouseEnter={() => this.togglePlay()}>Audio</button>
      </section>
    );
  }
}
