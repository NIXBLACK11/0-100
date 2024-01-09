const allUsers = [{
    firstName: "siddharth",
    gender: "male"
}, {
    firstName: "shraddha",
    gender: "female"
}]

const users = {
    firstName: "siddharth",
    gender: "male"
}

let n = allUsers.length

for(let i=0;i<n;i++)
{
    console.log(allUsers[i]["firstName"]);
}