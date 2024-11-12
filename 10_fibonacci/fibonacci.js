const fibonacci = function(nth) {
    let prev = 0;
    let curr = 1;
    let nthSequence = 0;

    if(nth == 1){
        return 1;
    }

    if(Math.sign(nth) == -1){
        return "OOPS";
    }

    for(let i = 1; i < nth; i++){
        nthSequence = prev + curr;
        prev = curr; 
        curr = nthSequence;
    }
    return nthSequence;
};

// Do not edit below this line
module.exports = fibonacci;
