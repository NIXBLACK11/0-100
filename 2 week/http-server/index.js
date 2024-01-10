const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/conv', function(req, res) {
    console.log(req.body.msg);
    console.log(req.headers.authorization);
    console.log(req.headers["authorization"]);
    console.log("hello");
    res.send({
        msg: "2+2"
    })
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});                                                                             