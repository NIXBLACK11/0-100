//basic
function test(callback) {
    callback("hello");
}

function main() {
    test(function(value) {
        console.log(value);
        console.log("hello2");
    });
}

//promises
function test() {
    let p = new Promise(function (resolve) {
        resolve("hello");
    });
    return p;
}

function main() {
    test().then(function(value) {
        console.log(value);
    });
    console.log("hello2");
}

// async await
function test() {
    let p = new Promise(function (resolve) {
        resolve("hello");
    });
    return p;
}

async function main() {
    let value = await test();
    console.log(value);
    console.log("hello2");
}

main();