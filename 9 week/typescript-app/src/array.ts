type numArray = number[];

const printValue = (arr: numArray): void => {
    arr.map((val)=>{
        console.log(val);
    });
};

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const searchName = (user: User[], name: string): boolean => {
    user.map((val)=>{
        if(val.firstName==name) {
            return true;
        }
    });
    return false;
};