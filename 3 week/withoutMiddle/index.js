const express = require("express");
const app = express();


// This solution is not good as the authentication must be repeated for all the requests
app.get('/login', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!='siddharth' || password!="Nixblack@11") {
        res.status(400).json({
            message: "Bath Auth"
        });
    }
    else {
        res.status(201).json({
            message: "Connected"
        });
    }
});

app.listen(3000);