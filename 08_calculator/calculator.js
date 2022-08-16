const add = (a, b) => a + b;

const subtract = (a, b) => a - b; 

const sum = (array) => {
  let total = array.reduce((total, current) => total + current, 0);
  return total;
};

const multiply = (array) => {
  let total = array.reduce((total, current) => total * current, 1);
  return total;
};

const power = (a, b) => a ** b;

const factorial = (a) => {
  if (a === 0) return 1;
  let array = [];
  for (i = a; i > 0; --i) {
    array.push(a);
    --a;
  }
  let fac = array.reduce((total, current) => total * current, 1);
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
