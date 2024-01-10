function asyncTest() {
    let p = new Promise(function(resolve) {
        // some async logic
        setTimeout(function() {
            resolve("hi there")
        }, 1000);//Promise { <pending> }
        // resolve("hi there");
    })
    return p;
}

//this will return Promise { 'hi there' }
// async function main() {
//     let value = asyncTest();
//     console.log(value);
// }

//this will hi there
async function main() {
    let value = await asyncTest();
    console.log(value);
}

main();