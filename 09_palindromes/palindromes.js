const palindromes = function (a) {
    
    a = a.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toUpperCase();
if(typeof a == "string") {
    for(var i = 0; i < Math.floor(a.length * 0.5); i++) {
        if(a[i] == a[a.length - i - 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
} else {
    return false;
}
};
// Do not edit below this line
module.exports = palindromes;
