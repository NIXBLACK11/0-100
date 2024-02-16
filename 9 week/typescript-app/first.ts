const x: number = 1;
console.log(x);

function greet(firstName: string) {
    console.log("Hello " + firstName);
}

function sum(a: number, b: number): number {
    return (a+b);
}

function runAfter(fn: ()=>void): void {
    setTimeout(fn, 1000);
}
function fn(): void {
    console.log("hey");
}

greet("Siddharth");
sum(1, 3);