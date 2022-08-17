const findTheOldest = (people) => {
    const oldest = people.sort((a, b) => {
        let aYOD = a.yearOfDeath;
        let aYOB = a.yearOfBirth;
        let bYOD = b.yearOfDeath;
        let bYOB = b.yearOfBirth;
        
        if (!("yearOfDeath" in a)) {
            aYOD = new Date().getFullYear();
            console.log(aYOD);
        } else if (!("yearOfDeath" in b)) {
            bYOD = new Date().getFullYear();
            console.log(bYOD);
        }

        if ((aYOD - aYOB) > (bYOD - bYOB)) {
            return 1;
        } else {
            return -1;
        }
        
    })
    return oldest[oldest.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
