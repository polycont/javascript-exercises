const fibonacci = (fibceil) => {
    if (fibceil < 0) return 'OOPS';
    if (typeof fibceil !== 'number') Number(fibceil);

    let array = [];
    let fibsum = 0;

    array.push(1);
    array.push(1);

    let a = 0;
    let b = 1;

    for (i = 0; i < fibceil; ++i) {
        fibsum = array[a] + array[b];
        array.push(fibsum);
        ++a;
        ++b;
    }

    console.log(array);
    return array[fibceil - 1]
};


// Do not edit below this line
module.exports = fibonacci;
