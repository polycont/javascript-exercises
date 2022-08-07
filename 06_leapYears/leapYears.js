const leapYears = function(leapNum) {

    if (leapNum % 4 === 0 && leapNum % 100 !== 0) {
        return true;
    
    } else if (leapNum % 400 === 0) {
        return true;
        
    } else 
    return false;

};
    

// Do not edit below this line
module.exports = leapYears;
