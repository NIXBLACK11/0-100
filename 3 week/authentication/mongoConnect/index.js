const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456"

mongoose.connect("mongodb+srv://NIXBLACK:nixblack11@cluster0.tk5azpj.mongodb.net/100xTest")

const User = mongoose.model("Users", {
    name: String,
    username: String,
    password: String
});

const app = express();
app.use(express.json());

function userExists() {

}

app.post('/signup', async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });
    if(existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.status(201).json({
        msg: "User created successfully"
    });
});

// app.post('/signin', function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if(!userExists(username, password)) {
//         return  
//     }
// });

app.listen(3000);