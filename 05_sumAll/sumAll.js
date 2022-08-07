const sumAll = function(num1, num2) {

    let numOne = num1;
    let numTwo = num2;
    let finalSum;
    
    if (numTwo > numOne) {
        for (i = 1; i <= numTwo; ++i) {
            numOne = numOne + i;
        }
        finalSum = numOne-1;
    } else if (numTwo < numOne) {
        for (i = 1; i <= numOne; ++i) {
            numTwo = numTwo + i;
        }
        finalSum = numTwo-1;
    }

    if (finalSum < 0) {
        return 'ERROR';
    } else if (typeof(num2) !== 'number') {
        return 'ERROR';
    } else {
        parseInt(finalSum);
        return finalSum;
    }
};


// Do not edit below this line
module.exports = sumAll;
