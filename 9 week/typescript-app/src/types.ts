type numberId = number | string;

function greet1(id: numberId) {
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

greet1("1");
greet1(1);