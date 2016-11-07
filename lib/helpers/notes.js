const noteArray = [ 'C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'B#'];

export default (noteLetter, num) => {
  if (num) {
    let int = num.toString();
    return noteArray[noteLetter].concat(int);
  }
};
