function sum(a, b) {
    let result = a+b;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : "+data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : "+data);
}

const ans = sum(1, 2);
displayResult(ans);

//Now call only one function and perform both actions

function sum1(a, b, fncToCall) {
    let result = a+b;
    fncToCall(result);
}

sum1(1, 2, displayResultPassive);

sum1(1, 2, function (data) {
    console.log('sum : '+data)
})