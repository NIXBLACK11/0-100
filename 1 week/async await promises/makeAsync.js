function findSum(n) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans+=i;
    }
    return ans;
}

function caller() {
    console.log(findSum(100));
}
//async

//setTimeout
setTimeout(caller, 1000);
console.log("hello world");

//busy waiting
caller();
function syncSleep() {
    let a = 1;
    for(let i = 0;i<10000000;i++)
        a++;
}
console.log("hello world");

//readFile
const fs = require("fs");
fs.readfile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log("hi there");

//fetch