"use strict";
exports.__esModule = true;
//* IF NUM / 3 => FIX
//* IF NUM / 5 => BAS
//* IF (NUM / 3) AND (NUM / 5) => FIXBAS
var main = function () {
    for (var i = 0; i <= 100; i++) {
        if (isDiv3(i) && isDiv5(i)) {
            console.log("".concat(i, " => FIXBAS"));
        }
        else if (isDiv3(i)) {
            console.log("".concat(i, " => FIX"));
        }
        else if (isDiv5(i)) {
            console.log("".concat(i, " => BAS"));
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
