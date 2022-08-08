const ftoc = function(fTemp) {
  let finalTemp = (fTemp + 40) / 1.8 - 40;
  console.log(finalTemp);
  finalTemp = (Math.round(finalTemp * 10)) / 10;
  return finalTemp;
};

const ctof = function(cTemp) {
  let finalTemp = (cTemp + 40) * 1.8 - 40;
  finalTemp = (Math.round(finalTemp * 10)) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
