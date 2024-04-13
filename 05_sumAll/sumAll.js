const sumAll = function(a, b) {
    if(typeof(a) == "number") {
        if(typeof(b) == "number") {
            if(a > 0 && b > 0) {
                range = Math.abs(a - b);
                val = 0;
                for(var i = 1; i <= range + 1; i++) {
                val += i;
                }
                return val;
            }
            return "ERROR";
        }
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
