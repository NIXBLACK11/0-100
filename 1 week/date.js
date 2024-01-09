const currentDate = new Date();

console.log(currentDate.getMonth());


function sum() {
    let a = 0;
    for(let i=0;i<100000;i++) {
        a=a+i;
    }
    console.log(a);
}

let timeStamp1 = new Date();
const before = timeStamp1.getTime();

sum();

let timeStamp2 = new Date();
const after = timeStamp2.getTime();

console.log(after-before);