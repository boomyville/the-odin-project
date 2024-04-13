const reverseString = function(str) {
    a = "";
    for(var i = str.length; i > 0; i--) {
        a += str[i -1];
    }
    return a;
};

// Do not edit below this line
module.exports = reverseString;
