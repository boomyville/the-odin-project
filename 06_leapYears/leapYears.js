const leapYears = function(yr) {
    return yr % 100  == 0 ? yr % 400 == 0 : yr % 4 == 0 
};

// Do not edit below this line
module.exports = leapYears;
