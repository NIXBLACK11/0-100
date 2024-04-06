"use strict";
function sumOfRange(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfRange({ name: 'test', age: 10 }, { name: 'test2', age: 10 });
console.log(age);
