interface User {
    name: string;
    age: number;
    email: string;
}

type UpdateProps = Pick<User, 'name' | 'age'>

function sumOfRange(user1: User, user2: User): number{
    return user1.age + user2.age;
}

const age = sumOfRange({name: 'test', age: 10, email: 'sdcdc'}, {name: 'test2', age: 10, email: 'ewfwevfew'});
console.log(age);