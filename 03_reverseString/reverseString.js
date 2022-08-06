const reverseString = function(string) {
    let stringVar = string;
    arrayVar = stringVar.split("",stringVar.length);
    arrayLength = arrayVar.length;
    let newArray = [];
    let x = 1;
    console.log(arrayVar);

    for (i = 0; i < arrayLength; ++i) {

        newArray.push(arrayVar[arrayVar.length-x]);
        x = ++x;
        console.log(newArray);

    }
    newArray = newArray.join('');
    console.log(newArray);
    return newArray;

};

// Do not edit below this line
module.exports = reverseString;
