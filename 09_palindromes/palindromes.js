const palindromes = (string) => {
    string = string.toLowerCase();
    string = string
        .replaceAll(' ', '')
        .replaceAll(', ', '')
        .replaceAll(',', '')
        .replaceAll('.', '')
        .replaceAll('!', '');
        console.log(string);

    array = string.split('', string.length)
    let reversed = [];
    let x = 1

    for (i = 0; i < array.length; ++i) {
        reversed.push(array[array.length-x]);
        x = ++x;
    }

    reversed = reversed.join('');
    reversed = reversed
        .replaceAll(' ', '')
        .replaceAll(', ', '')
        .replaceAll(',', '')
        .replaceAll('.', '')
        .replaceAll('!', '');
        console.log(reversed);

    if (string === reversed) return true;
    return false;
};


// Do not edit below this line
module.exports = palindromes;
