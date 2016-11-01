
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
let osc = context.createOscillator();
let gain = context.createGain();
const destination = context.destination;
var gainNode = context.createGain();

export default() => {
  let osc = context.createOscillator();
  osc.connect(gain);
  gain.connect(destination);
  osc.start(0);
  gain.gain.value = 1;
  return osc; 
};
