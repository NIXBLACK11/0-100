type Input = number[] | string[];

// error as number has no uppercase impelmentation
const test = (arr: Input) => {
    // return arr[0].touppercase();
}

test(["hello", "hello"]);

function test2<T>(arg: T) {
    return arg;
}

console.log(test2<string>("hello"));