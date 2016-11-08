const noteArray = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B'];

export default (noteLetter, num) => {
  if (num) {
    let int = num.toString();
    return noteArray[noteLetter].concat(int);
  }
};
