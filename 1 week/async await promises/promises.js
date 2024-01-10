const fs = require('fs');

function test() {
    return new Promise(function(resolve) {
        fs.readFile("test.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}

function out(data) {
    console.log(data);
}

test().then(out);

function t() {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, 2000)
    });
    return p;
}

const value = t();
value.then(function() {
    console.log("hi there");
})