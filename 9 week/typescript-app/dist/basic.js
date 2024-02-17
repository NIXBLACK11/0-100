"use strict";
const x = 1;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
function sum(a, b) {
    return (a + b);
}
function runAfter(fn) {
    setTimeout(fn, 1000);
}
function fn() {
    console.log("hey");
}
greet("Siddharth");
sum(1, 3);
