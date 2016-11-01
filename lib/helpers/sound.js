import Octavian from 'octavian';
import findIndex from '../helpers/index';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
let osc = context.createOscillator();
let gain = context.createGain();
const destination = context.destination;
var gainNode = context.createGain();

const sound = () => {
  let osc = context.createOscillator();
  osc.connect(gain);
  gain.connect(destination);
  osc.start(0);
  this.checkNote();
  gain.gain.value = 1;
};

export default sound;
