const repeatString = function(string, num) {
    let stringVar = '';
    for (i = 0; i < num; ++i) {
        stringVar = stringVar.concat(string);
    }
    if (num < 0) {
        return "ERROR";
    }
    return stringVar;
}


// Do not edit below this line
module.exports = repeatString;
