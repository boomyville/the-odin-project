const removeFromArray = function(arr, ...removeList) {
    b = [];
    arr.forEach(function(a) {
        if(!removeList.includes(a)) {
            b.push(a)
        }
    })
    return b;
};

// Do not edit below this line
module.exports = removeFromArray;
