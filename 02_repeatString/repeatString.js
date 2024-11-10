const repeatString = function(str, num) {
    let i = 0;
    let finalStr = '';

    if(Math.sign(num) === -1){
        return 'ERROR';
    }
    while(i < num){
        finalStr += str;
        i++;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
