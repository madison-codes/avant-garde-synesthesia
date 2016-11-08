export default (y) => {
  if (y <= 100 ){ return 6; }
  if (y > 100 && y <= 200){ return 5; }
  if (y > 200 && y <= 300){ return 4; }
  if (y > 300 && y <= 400){ return 3; }
  if (y > 400 && y <= 500){ return 2; }
  if (y > 500 && y <= 600){ return 1; }
  else { return 0; }
};
