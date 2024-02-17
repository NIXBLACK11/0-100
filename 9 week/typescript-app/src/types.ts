type numberId = number | string;

function greet(id: numberId) {
    console.log(`${id}`);
}

type Emp = {
    name: string;
    startDate: Date
};

interface Manager {
    name: string;
    department: string;
};

type TechLead = Emp & Manager;

const t: TechLead = {
    name: "Siddharth",
    startDate: new Date(),
    department: "HR"
}

greet("1");
greet(1);