function divide(a, b) {
    if (a !== undefined && a !== null && !isNaN(a)
        && b !== undefined && b !== null && !isNaN(b)
        && b > 0) {
        return a / b;
    } else {
        throw new Error("Operator not valid");
    }
}

try {
    console.log(divide(4, 2));
    console.log(divide(4, 3));
    console.log(divide(4, 0));
    console.log(divide(4));

    var a = 4;
    var b = 3;
    var c = 0;

    console.log(divide(a, b));
    console.log(divide(a, c));
    console.log(divide(a, d));
} catch (e) {
    console.error('Exception captured!', e);
}