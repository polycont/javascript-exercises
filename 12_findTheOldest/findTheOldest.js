const findTheOldest = (people) => {
    const oldest = people.sort((a, b) => {        
        if (!("yearOfDeath" in a)) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!("yearOfDeath" in b)) {
            b.yearOfDeath = new Date().getFullYear();
        }

        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return 1;
        } else {
            return -1;
        } 
    })
    
    return oldest[oldest.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
