//basic
function test(callback) {
    setTimeout(function() {
        callback("hello")
    }, 5000);
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
        setTimeout(function() {
            resolve("hello");
        }, 5000);
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
        setTimeout(function() {
            resolve("hello");
        }, 5000);
    });
    return p;
}

async function main() {
    let value = await test();
    console.log(value);
    console.log("hello2");
}

main();