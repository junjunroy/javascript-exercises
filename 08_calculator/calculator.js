const add = function(num, otherNum) {
	return num + otherNum;
};

const subtract = function(num, otherNum) {
	return num - otherNum;
};

const sum = function(arrayOfNum) {
	let sumOfAll = 0;

  if(arrayOfNum.length === 0){
    return 0;
  }

  for(num of arrayOfNum){
    sumOfAll += num;
  }
  return sumOfAll;
};

const multiply = function(arrayOfNum) {
  let productOfAll = 1;

  if(arrayOfNum.length === 0){
    return 0;
  }

  for(num of arrayOfNum){
    productOfAll *= num;
  }
  return productOfAll;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let finalValue = num;

	if(num === 0 || num ===1){
    return 1;
  }

  for(let i = num-1; i >= 1; i--){
    finalValue *= i;
    num = i;
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
