const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = '123456'

const app = express()

app.use(express.json())

const ALL_USERS = [
    {
        username: "siddharth", 
        password: "123",
        name: "siddharth rana"
    },
    {
        username: "shraddha", 
        password: "1234",
        name: "shraddha rana"
    }
]

function userExists(username, password) {
    for(let i=0;i<ALL_USERS.length;i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            return true
        }
    }
    return false
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist"
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    console.log(token)
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        let listUsers = []
        for(let i=0;i<ALL_USERS.length;i++) {
            if(ALL_USERS[i].username!=username) {
                listUsers.push(ALL_USERS[i].username)
            }
        }
        return res.status(201).json({
            users: listUsers
        })
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
});

app.listen(3000)