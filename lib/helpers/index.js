import notes from './notes';

export default (coords) => {
  console.log(coords.y);
  let x = coords.x;
  let y = coords.y;
  if (y <= 30) {
    console.log(notes[0]);
    return notes[0];
  }
  if (y >= 30 && y <= 60) {
    // console.log(notes()[1]);
    return notes()[1];
  }
  if (y >= 60 && y <= 90) {
    // console.log(notes()[2]);
    return notes()[2];
  }
  if (y >= 90 && y <= 120) {
    // console.log(notes()[3]);
    return notes()[3];
  }
  if (y >= 120 && y <= 150) {
    // console.log(notes()[4]);
    return notes()[4];
  }
  if (y >= 150 && y <= 180) {
    // console.log(notes()[5]);
    return notes()[5];
  }
  if (y >= 180 && y <= 210) {
    // console.log(notes()[6]);
    return notes()[6];
  }
  if (y >= 210 && y <= 240) {
    // console.log(notes()[7]);
    return notes()[7];
  }
  if (y >= 240 && y <= 270) {
    // console.log(notes()[8]);
    return notes()[8];
  }
  if (y >= 270 && y <= 300) {
    // console.log(notes()[9]);
    return notes()[9];
  }
  if (y >= 300 && y <= 330) {
    // console.log(notes()[10]);
    return notes()[10];
  }
  if (y >= 330 && y <= 360) {
    return notes()[11];
  }
  if (y >= 360 && y <= 390) {
    return notes()[12];
  }
  if (y >= 390 && y <= 420) {
    return notes()[13];
  }
  if (y >= 420 && y <= 450) {
    return notes()[14];
  }
  if (y >= 450 && y <= 480) {
    return notes()[15];
  }
  if (y >= 480 && y <= 510) {
    return notes()[16];
  }
};
