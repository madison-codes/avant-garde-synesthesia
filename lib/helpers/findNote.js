export default (x) => {
  if (x <= 50 ){ return 14; }
  if (x > 50 && x <= 100){ return 13; }
  if (x > 100 && x <= 150){ return 12; }
  if (x > 150 && x <= 200){ return 11; }
  if (x > 200 && x <= 250){ return 10; }
  if (x > 250 && x <= 300){ return 9; }
  if (x > 300 && x <= 350){ return 8; }
  if (x > 350 && x <= 400){ return 7; }
  if (x > 400 && x <= 450){ return 6; }
  if (x > 450 && x <= 500){ return 5; }
  if (x > 500 && x <= 550){ return 4; }
  if (x > 550 && x <= 600){ return 3; }
  if (x > 600 && x <= 650){ return 2; }
  else { return 1; }
};
