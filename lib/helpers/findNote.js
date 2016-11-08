export default (x) => {
  if (x <= 100 ){ return 6; }
  if (x > 100 && x <= 200){ return 5; }
  if (x > 200 && x <= 300){ return 4; }
  if (x > 300 && x <= 400){ return 3; }
  if (x > 400 && x <= 500){ return 2; }
  if (x > 500 && x <= 600){ return 1; }
  else { return 0; }
};
