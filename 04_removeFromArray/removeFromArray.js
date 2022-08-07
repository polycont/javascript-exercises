const removeFromArray = function(array, ...arrayVal) {

    // Declare initial variables to gather function input
    let array1 = array;
    let array2 = arrayVal;

    // Create empty array to store output
    let newArray = [];

    for (i = 0; i < 9; ++i) {

        if (array1.includes(array2[i])) {
            let index = array1.indexOf(array2[i]);
            array1.splice(index, 1);
        }
        console.log(array1);
}
    return array1;

}

// Do not edit below this line
module.exports = removeFromArray;
