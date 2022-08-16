const palindromes = (string) => {

    console.log(string);

    string = string.toLowerCase();
    string = string.replaceAll(' ', '');
    string = string.replaceAll(', ', '');
    string = string.replaceAll(',', '');
    string = string.replaceAll('.', '');
    string = string.replaceAll('!', '');
    console.log(string);


    array = string.split('', string.length)
    let reversed = [];
    let x = 1
    for (i = 0; i < array.length; ++i) {
        reversed.push(array[array.length-x]);
        x = ++x;
    }
    reversed = reversed.join('');

    // Replacing non-letter characters w/o RegEx.
    string = string.replaceAll(' ', '');
    string = string.replaceAll(', ', '');
    string = string.replaceAll(',', '');
    string = string.replaceAll('.', '');
    string = string.replaceAll('!', '');

    if (string === reversed) return true;
    return false;
};


// Do not edit below this line
module.exports = palindromes;
