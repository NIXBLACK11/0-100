const express = require("express");
const app = express();
const zod = require("zod");

app.use(express.json());

//define whgat type of schema it should have
// const schema = zod.string();
// const schema = zod.array(zod.number());

//To write schema like
// {
//     email: string=> email
//     password: atleast 8 characters
//     country: "IN", "US"
// }
const schema = zod.object({
    email: zod.email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(z.literal("US"))
})


function loginMiddleware(req, res, next) {
    if(req.headers.username != "siddharth" || req.headers.password != "password") {
        res.status(401).json({
            message: "Bad Auth!"
        });
    }
    else {
        next();
    }
}

app.get('/login', loginMiddleware, function(req, res) {
    const names = req.body.names;
    console.log(names);
    const response = schema.safeParse(names);
    if(!response.success) {
        res.status(411).json({
            msg: "invalid input!"
        });
    }
    res.status(200).json({
        message: "Successfull login!",
        response: response
    });
});

//global catch


//When using zod can remove this
// app.use(function(err, req, res, next) {
//     res.status(500).json({
//         message: "Internal server error!"
//     })
// });

app.listen(3000);