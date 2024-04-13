const repeatString = function(str, times) {
    let a = ""
    if(times < 0) {
        return "ERROR"
    }
    if(typeof str == "string") {
        for(i = 0; i < times; i++) {
            a += str;
        }
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;
