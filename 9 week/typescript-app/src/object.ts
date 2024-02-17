interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function isLegal(user: User): boolean {
    if(user.age>18) {
        return true;
    } else {
        return false;
    }
}

isLegal({
    firstName: "Siddharth",
    lastName: "Rana",
    age: 20
})