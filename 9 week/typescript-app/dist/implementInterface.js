"use strict";
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const emp1 = new Employee("Siddharth rana", 20);
emp1.greet("Hello ");
console.log(emp1.name);
