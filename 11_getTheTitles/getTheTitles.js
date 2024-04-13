const getTheTitles = function(arr) {
let a = [];
arr.forEach((book) => a.push(book['title']));
return a;
};

// Do not edit below this line
module.exports = getTheTitles;
