import notes from './notes';

export default (coords) => {
  let x = coords.x;
  let y = coords.y;
  if (x <= 100 && y <= 100) {
    return notes()[0];
  }
  if (x <= 100 && y >= 100 && y<= 200) {
    return notes()[1];
  }
  if (x <= 100 && y >= 200 && y<= 300) {
    return notes()[2];
  }
  if (x >= 100 && x <= 200 && y <= 100) {
    return notes()[3];
  }
  if (x >= 100 && x <= 200 && y >= 100 && y<= 200) {
    return notes()[4];
  }
  if (x >= 100 && x <= 200 && y >= 200 && y<= 300) {
    return notes()[5];
  }
  if (x >= 200 && x <= 300) {
    return notes()[6];
  }
  if (x >= 200 && x <= 300 && y <= 100) {
    return notes()[7];
  }
  if (x >= 200 && x <= 300 && y >= 200 && y<= 300) {
    return notes()[8];
  }
  else {
    return notes()[9];
  }
};
