const add = function(num, otherNum) {
	return num + otherNum;
};

const subtract = function(num, otherNum) {
	return num - otherNum;
};

const sum = function(arrayOfNum) {
  if(arrayOfNum.length === 0){
    return 0;
  }

  return arrayOfNum.reduce((total, num) => {
    return total + num;
  });
};

const multiply = function(arrayOfNum) {
  if(arrayOfNum.length === 0){
    return 0;
  }

  return arrayOfNum.reduce((productOfAll, num) => {
    return productOfAll * num;
  });
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let finalValue = 1;

  for(let curr = num; curr > 1; curr--){
    finalValue *= curr;
  }
  return finalValue;
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
