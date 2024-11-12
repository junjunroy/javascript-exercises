const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "")
                   .replace(/\s/g, "")
                   .toLowerCase();
    return string.split("").reverse().join("") === string? true: false;
};

// Do not edit below this line
module.exports = palindromes;
