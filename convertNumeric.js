function textToDecimal(source, sourceBase) {
    let i = 0, k = 0;
    const numberArray = new Array();
    while (source[i] != null) {
        if (source[i] >= 'A') {
            numberArray[k] = source.charCodeAt(i) - 55;
            i++;
            k++
        }
        else {
            numberArray[k] = source.charCodeAt(i) - 48;
            i++;
            k++;
        }
    }
    let numberDecimal = 0;
    let n = numberArray.length;
    for (let i = 0; i < n; i++) {
        numberDecimal += numberArray[i] * Math.pow(sourceBase, n - 1 - i);
    }
    return numberDecimal;
}

function decimalToDest(decimal, destBase) {
    let i = 0;
    let remaining = decimal;
    const dest = new Array();
    while (remaining != 0) {
        dest[i] = remaining % destBase;
        if (dest[i] > 9) dest[i] += 55;
        else dest[i] += 48;
        remaining = Math.floor(remaining / destBase);
        i++;
    }
    const result = new Array();
    for (let j = i - 1; j >= 0; j--) {
        result[i - j - 1] = String.fromCharCode(dest[j]);
    }
    return result.join('');
}
function convertNumeric(source, sourceBase, destBase) {
    return decimalToDest(textToDecimal(source, sourceBase), destBase);
}

// module.export = convertNumeric;


