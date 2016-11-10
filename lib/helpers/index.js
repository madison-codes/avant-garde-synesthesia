import notes from './notes';
import findOctive from './findOctive';
import findNote from './findNote';

export default (coords) => {
  let x = findNote(coords.x);
  let y = findOctive(coords.y);
  return (notes(x, y));
};
