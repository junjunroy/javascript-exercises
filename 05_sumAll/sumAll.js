const sumAll = function(range, otherRange) {
    if(!Number.isInteger(range)|| !Number.isInteger(otherRange) || (range < 0 || otherRange < 0)) {
        return 'ERROR';
    }
    if(range > otherRange){
        return ((range + otherRange) * (range/2));
    }
    return ((range + otherRange) * (otherRange/2));
};

// Do not edit below this line
module.exports = sumAll;
