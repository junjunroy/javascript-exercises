const reverseString = function(str) {
    let reversed = "";
    let origChars = str.split('');

    for(let i = str.length - 1; i > -1; i--){
        reversed += origChars[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
