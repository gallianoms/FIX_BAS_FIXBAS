"use strict";
exports.__esModule = true;
//* IF NUM / 3 => FIZZ
//* IF NUM / 5 => BUZZ
//* IF (NUM / 3) AND (NUM / 5) => FIZZBUZZ
var main = function () {
    for (var i = 0; i <= 100; i++) {
        if (isDiv3(i) && isDiv5(i)) {
            console.log("".concat(i, " => FIZZBUZZ"));
        }
        else if (isDiv3(i)) {
            console.log("".concat(i, " => FIZZ"));
        }
        else if (isDiv5(i)) {
            console.log("".concat(i, " => BUZZ"));
        }
        else {
            console.log("".concat(i));
        }
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
main();
