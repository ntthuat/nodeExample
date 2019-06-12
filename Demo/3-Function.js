function count(a, b) {
    return a + b;
}

var x = count(5, 6);

console.log(x);

//////////////

function hello() {
    console.log("Welcome to nodeExample.js");
}

function callFunction(fn) {
    fn();
}

callFunction(hello);

var welcome = function () {
    console.log("Lap trinh NodeJs");
}

welcome();