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