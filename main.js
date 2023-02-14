"use strict";
exports.__esModule = true;
//* IF NUM / 3 => FIZZ
//* IF NUM / 5 => BUZZ
//* IF (NUM / 3) AND (NUM / 5) => FIZZBUZZ
var fizzbuzz = function (num) {
    if (num === 0) {
        return 0;
    }
    if (isDiv3(num) && isDiv5(num)) {
        return 'fizzbuzz';
    }
    if (isDiv3(num)) {
        return 'fizz';
    }
    if (isDiv5(num)) {
        return 'buzz';
    }
    return num;
};
var print = function () {
    for (var i = 0; i <= 100; i++) {
        console.log("".concat(i, ": ").concat(fizzbuzz(i)));
    }
};
var isDiv3 = function (num) {
    var arr = [];
    while (num > 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    var sum = arr.reduce(function (acc, val) { return acc + val; }, 0);
    if (sum % 3 === 0) {
        return true;
    }
    return false;
};
var isDiv5 = function (num) {
    if (num % 10 === 0 || num % 10 === 5) {
        return true;
    }
    return false;
};
print();
module.exports = fizzbuzz;
