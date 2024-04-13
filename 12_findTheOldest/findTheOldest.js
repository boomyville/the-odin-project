const findTheOldest = function(people) {
//add age to everyone
people.map((people) => {
    if(typeof people['yearOfDeath'] == 'undefined') {
        const currentYear = new Date().getFullYear();
        people['yearOfDeath'] = currentYear;
    }
    people['age'] = people['yearOfDeath'] - people['yearOfBirth']
});

//find oldest
return people.reduce((oldest,current) => {
return current['age'] > oldest['age'] ? current : oldest 
});
}

// Do not edit below this line
module.exports = findTheOldest;
